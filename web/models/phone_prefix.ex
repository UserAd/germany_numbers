defmodule GermanyNumbers.PhonePrefix do
  use GermanyNumbers.Web, :model

  schema "phone_prefixes" do
    field :prefix, :string
    field :min_length, :string
    field :max_length, :string
    field :usage, :string
    field :comment, :string
    field :translated_comment, :string
    field :tags, {:array, :string}

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:prefix, :min_length, :max_length, :usage, :comment, :translated_comment, :tags])
    |> validate_required([:prefix, :min_length, :max_length, :usage, :comment, :translated_comment, :tags])
  end
end
