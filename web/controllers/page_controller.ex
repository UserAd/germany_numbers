defmodule GermanyNumbers.PageController do
  use GermanyNumbers.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
