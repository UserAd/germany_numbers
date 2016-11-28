# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :germany_numbers,
  ecto_repos: [GermanyNumbers.Repo]

# Configures the endpoint
config :germany_numbers, GermanyNumbers.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "stUz6CkH4KsRMPrGvdVSMIG9Gy/RbMn30ygHibGcyhTBxOKX1tqyZ3wbdzXahT+N",
  render_errors: [view: GermanyNumbers.ErrorView, accepts: ~w(html json)],
  pubsub: [name: GermanyNumbers.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
