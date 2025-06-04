var APP_DATA = {
  "scenes": [
    {
      "id": "0-md-cabin",
      "name": "md cabin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.06458756606020266,
        "pitch": 0.1116565007141439,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.7844137623879668,
          "pitch": -0.2831619793891953,
          "rotation": 0,
          "target": "1-cabin-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cabin-1",
      "name": "cabin 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.598256179096512,
          "pitch": -0.42568946268616514,
          "rotation": 0,
          "target": "0-md-cabin"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
