defmodule GermanyNumbers.Repo.Migrations.AddTextSearch do
  use Ecto.Migration

  def up do
    execute "CREATE extension IF NOT EXISTS pg_trgm"
    execute "CREATE INDEX phone_prefixes_usage_trgm_index ON phone_prefixes USING gin (usage gin_trgm_ops)"
    execute "CREATE INDEX phone_prefixes_comment_trgm_index ON phone_prefixes USING gin (comment gin_trgm_ops)"
    execute "CREATE INDEX phone_prefixes_translated_comment_trgm_index ON phone_prefixes USING gin (translated_comment gin_trgm_ops)"
  end

  def down do
    execute "DROP INDEX phone_prefixes_usage_trgm_index"
    execute "DROP INDEX phone_prefixes_comment_trgm_index"
    execute "DROP INDEX phone_prefixes_translated_comment_trgm_index"
  end
end
