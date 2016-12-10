defmodule GermanyNumbers.PhonePrefixController do
  use GermanyNumbers.Web, :controller

  alias GermanyNumbers.PhonePrefix

  def index(conn, params) do
    results = GermanyNumbers.PhonePrefix 
                |> SearchForm.new(params)
                |> Paginator.new(params)

    render(conn, "index.json", phone_prefixes: results.items, total_prefixes: results.total_items, total_pages: results.total_pages, current_page: results.page_number)
  end
end
