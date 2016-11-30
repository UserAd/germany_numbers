defmodule GermanyNumbers.Repo.Migrations.CreatePhonePrefix do
  use Ecto.Migration

  def change do
    create table(:phone_prefixes) do
      add :prefix, :string
      add :min_length, :string
      add :max_length, :string
      add :usage, :string
      add :comment, :string
      add :translated_comment, :string
      add :tags, {:array, :string}

      timestamps()
    end

    create index(:phone_prefixes, :prefix)
    create index(:phone_prefixes, :usage)
    create index(:phone_prefixes, :comment)
    create index(:phone_prefixes, :translated_comment)
    create index(:phone_prefixes, :tags)
  end
end
