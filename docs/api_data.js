define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/login",
    "title": "Authentication",
    "version": "0.0.1",
    "name": "Authentication",
    "group": "Getting_Started",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "un",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pw",
            "description": "<p>User's password.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header:",
          "content": "{\n  \"Content-Type\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>Object with single key, 'token', which contains the Bearer token which must be sent to protected routes.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"token\": \"s0m3_jwT_t0k3n\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "401",
            "description": "<p>Returns 401 status on bad authentication request.</p>"
          }
        ]
      }
    },
    "filename": "D:/Programming/Python/apidoc-python-poc/apidoc/documentation.py",
    "groupTitle": "Getting_Started"
  },
  {
    "type": "post",
    "url": "/api/v1/user/createtestuser",
    "title": "Create Test User",
    "version": "0.0.1",
    "name": "ApiV1CreateTestUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT token. Must be in <code>Bearer token-goes-here</code> format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header:",
          "content": "{\n  \"Authorization\": \"Bearer y0ur_JWT_t0k3n\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "401",
            "description": "<p>Returns 401 status on bad authentication request.</p>"
          }
        ]
      }
    },
    "filename": "D:/Programming/Python/apidoc-python-poc/apidoc/documentation.py",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the User was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the User was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"username\": \"xx.john.doe.xx\",\n    \"createdAt\": \"1970-01-01T16:32:34.650Z\",\n    \"updatedAt\": \"1980-01-01T16:32:34.650Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/user/create",
    "title": "Create User",
    "version": "0.0.1",
    "name": "ApiV1CreateUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT token. Must be in <code>Bearer token-goes-here</code> format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header:",
          "content": "{\n  \"Authorization\": \"Bearer y0ur_JWT_t0k3n\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "un",
            "description": "<p>Username of account you want to create.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pw",
            "description": "<p>Password of account you want to create.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "401",
            "description": "<p>Returns 401 status on bad authentication request.</p>"
          }
        ]
      }
    },
    "filename": "D:/Programming/Python/apidoc-python-poc/apidoc/documentation.py",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the User was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the User was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"username\": \"xx.john.doe.xx\",\n    \"createdAt\": \"1970-01-01T16:32:34.650Z\",\n    \"updatedAt\": \"1980-01-01T16:32:34.650Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/user/find",
    "title": "Find User",
    "version": "0.0.1",
    "name": "ApiV1FindUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT token. Must be in <code>Bearer token-goes-here</code> format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header:",
          "content": "{\n  \"Authorization\": \"Bearer y0ur_JWT_t0k3n\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "un",
            "description": "<p>Username of the user you want to find.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "401",
            "description": "<p>Returns 401 status on bad authentication request.</p>"
          }
        ]
      }
    },
    "filename": "D:/Programming/Python/apidoc-python-poc/apidoc/documentation.py",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when the User was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when the User was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"username\": \"xx.john.doe.xx\",\n    \"createdAt\": \"1970-01-01T16:32:34.650Z\",\n    \"updatedAt\": \"1980-01-01T16:32:34.650Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/user/test",
    "title": "Test",
    "version": "0.0.1",
    "name": "ApiV1User",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT token. Must be in <code>Bearer token-goes-here</code> format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header:",
          "content": "{\n  \"Authorization\": \"Bearer y0ur_JWT_t0k3n\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Test",
            "description": "<p>Returns <code>Test</code>.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "401",
            "description": "<p>Returns 401 status on bad authentication request.</p>"
          }
        ]
      }
    },
    "filename": "D:/Programming/Python/apidoc-python-poc/apidoc/documentation.py",
    "groupTitle": "User"
  }
] });
