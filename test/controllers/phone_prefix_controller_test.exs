defmodule GermanyNumbers.PhonePrefixControllerTest do
  use GermanyNumbers.ConnCase

  alias GermanyNumbers.PhonePrefix
  @valid_attrs %{comment: "some content", max_length: "some content", min_length: "some content", prefix: "some content", tags: "some content", translated_comment: "some content", usage: "some content"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, phone_prefix_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    phone_prefix = Repo.insert! %PhonePrefix{}
    conn = get conn, phone_prefix_path(conn, :show, phone_prefix)
    assert json_response(conn, 200)["data"] == %{"id" => phone_prefix.id,
      "prefix" => phone_prefix.prefix,
      "min_length" => phone_prefix.min_length,
      "max_length" => phone_prefix.max_length,
      "usage" => phone_prefix.usage,
      "comment" => phone_prefix.comment,
      "translated_comment" => phone_prefix.translated_comment,
      "tags" => phone_prefix.tags}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, phone_prefix_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, phone_prefix_path(conn, :create), phone_prefix: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(PhonePrefix, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, phone_prefix_path(conn, :create), phone_prefix: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    phone_prefix = Repo.insert! %PhonePrefix{}
    conn = put conn, phone_prefix_path(conn, :update, phone_prefix), phone_prefix: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(PhonePrefix, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    phone_prefix = Repo.insert! %PhonePrefix{}
    conn = put conn, phone_prefix_path(conn, :update, phone_prefix), phone_prefix: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    phone_prefix = Repo.insert! %PhonePrefix{}
    conn = delete conn, phone_prefix_path(conn, :delete, phone_prefix)
    assert response(conn, 204)
    refute Repo.get(PhonePrefix, phone_prefix.id)
  end
end
