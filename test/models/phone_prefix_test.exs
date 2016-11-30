defmodule GermanyNumbers.PhonePrefixTest do
  use GermanyNumbers.ModelCase

  alias GermanyNumbers.PhonePrefix

  @valid_attrs %{comment: "some content", max_length: "some content", min_length: "some content", prefix: "some content", tags: "some content", translated_comment: "some content", usage: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = PhonePrefix.changeset(%PhonePrefix{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = PhonePrefix.changeset(%PhonePrefix{}, @invalid_attrs)
    refute changeset.valid?
  end
end
