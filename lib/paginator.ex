defmodule Paginator do
  import Ecto.Query
  alias GermanyNumbers.Repo

  defstruct [:items, :total_items, :page_number]

  def new(query, params) do

    page_number = params |> Dict.get("page", 1) |> to_int
    
    %Paginator{
      items: items(query, page_number),
      total_items: total_items(query),
      page_number: page_number
    }
  end

  defp total_items(query) do
    count = query
    |> exclude(:order_by)
    |> exclude(:preload)
    |> exclude(:select)
    |> select([e], count(e.id))
    |> Repo.one
  end

  defp items(query, page_number) do
    page_size = 30
    offset = page_size * (page_number - 1)

    query
    |> limit(30)
    |> offset([_], ^offset)
    |> Repo.all
  end

  defp to_int(i) when is_integer(i), do: i
  defp to_int(s) when is_binary(s) do
    case Integer.parse(s) do
      {i, _} -> i
      :error -> :error
    end
  end

end