defmodule Paginator do
  import Ecto.Query
  alias GermanyNumbers.Repo

  defstruct [:items, :total_items, :page_number, :total_pages]

  def new(query, params) do

    page_number = params |> Dict.get("page", 0) |> to_int
    total = total_items(query)

    %Paginator{
      items: items(query, page_number),
      total_items: total,
      page_number: page_number,
      total_pages: ceiling(total / 30)
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
    offset = page_size * page_number

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

  defp ceiling(float) do
    t = trunc(float)

    case float - t do
      neg when neg < 0 ->
        t
      pos when pos > 0 ->
        t + 1
      _ -> t
    end
  end

end