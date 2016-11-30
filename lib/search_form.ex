defmodule SearchForm do
  import Ecto.Query

  def new(query, params) do

    unless params |> Dict.get("query", "") == "" do
      terms = params 
                |> Dict.get("query", "")
                |> String.downcase
                |> String.replace("(0)", "")
                |> String.replace(~r/[\(\)]/, "") 
                |> String.replace(~r/[,;.!]+/, " ") 
                |> String.replace(~r/[ ]+/, " ")
                |> String.replace("ä", "ae")
                |> String.replace("ö", "oe")
                |> String.replace("ü", "ue")
                |> String.replace("ß", "ss")
                |> String.split(" ") 
                |> Enum.reject(fn x -> String.length(x) < 2 end)
                |> Enum.join(" | ")

      prefixes = params 
                |> Dict.get("query", "")
                |> String.replace(~r/\([ ]*0[ ]*\)/, "")
                |> String.replace(~r/[ ]+/, " ")
                |> String.replace(~r/[^\d ]/, "")
                |> String.split(" ") 
                |> Enum.reject(fn x -> String.length(x) < 2 end)
                |> Enum.map(fn prefix -> if String.match?(prefix, ~r/^49/) do [prefix, prefix |> String.replace(~r/^490?/, "")] else [prefix] end end)
                |> Enum.flat_map(fn x -> x end)
                |> Enum.map(fn pref -> ((1..String.length(pref)) |> Enum.map(fn l -> String.slice(pref, 0, l) end)) end)
                |> Enum.flat_map(fn x -> x end)

      query = from q in query,
        where: q.prefix in ^prefixes or fragment("(to_tsvector(translated_comment) @@ to_tsquery(?))", ^terms),
        order_by: [desc: q.prefix]
    end
    query
  end
end