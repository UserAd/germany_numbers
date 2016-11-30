defmodule GermanyNumbers.PhonePrefixController do
  use GermanyNumbers.Web, :controller

  alias GermanyNumbers.PhonePrefix

  def index(conn, params) do
    paginator = GermanyNumbers.PhonePrefix 
                |> SearchForm.new(params)
                |> Paginator.new(params)

    render(conn, "index.json", phone_prefixes: paginator.items, total_prefixes: paginator.total_items)
  end
end
