const manifest = {
  _metadata: {
    major_version: 1,
    minor_version: 1,
  },
  display_information: {
    name: "Testing ",
  },
  features: {
    app_home: {
      home_tab_enabled: false,
      messages_tab_enabled: true,
      messages_tab_read_only_enabled: false,
    },
    bot_user: {
      display_name: "Testing ",
      always_online: false,
    },
    unfurl_domains: ["", "", "", "", "l"],
  },
  oauth_config: {
    scopes: {
      bot: [
        "app_mentions:read",
        "im:history",
        "links:read",
        "chat:write",
        "files:write",
        "users:read",
        "users.profile:read",
        "users:read.email",
        "im:write",
      ],
    },
  },
  settings: {
    event_subscriptions: {
      request_url: "",
      bot_events: [
        "app_mention",
        "app_uninstalled",
        "link_shared",
        "message.im",
      ],
    },
    interactivity: {
      is_enabled: true,
      request_url: "",
    },
    org_deploy_enabled: false,
    socket_mode_enabled: false,
  },
};
module.exports = manifest;
