# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     GermanyNumbers.Repo.insert!(%GermanyNumbers.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

{:ok, rows} = File.read!("priv/repo/germany_out.csv") |> ExCsv.parse(headings: true)

#list = rows |> Enum.to_list

Enum.each rows, fn row ->
  GermanyNumbers.Repo.insert!(%GermanyNumbers.PhonePrefix{
    comment: row["comment"],
    max_length: row["max_len"],
    min_length: row["min_len"],
    prefix: row["prefix"],
    tags: row["tags"] |> String.split(","),
    translated_comment: row["translated_comment"],
    usage: row["usage"]
  })
end

#%{"comment" => "", "max_len" => "3", "min_len" => "3", "prefix" => "115", "tags" => "goverment,internal", "translated_comment" => "", "usage" => "Public Service Number for German administration"}