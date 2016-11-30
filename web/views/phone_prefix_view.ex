defmodule GermanyNumbers.PhonePrefixView do
  use GermanyNumbers.Web, :view

  def render("index.json", %{phone_prefixes: phone_prefixes, total_prefixes: total_prefixes}) do
    %{
      data: render_many(phone_prefixes, GermanyNumbers.PhonePrefixView, "phone_prefix.json"),
      count: total_prefixes
    }
  end

  def render("phone_prefix.json", %{phone_prefix: phone_prefix}) do
    %{prefix: phone_prefix.prefix,
      min_length: phone_prefix.min_length,
      max_length: phone_prefix.max_length,
      usage: phone_prefix.usage,
      comment: phone_prefix.comment,
      tags: phone_prefix.tags}
  end
end
