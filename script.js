(function(){
    var script = {
 "start": "this.playAudioList([this.audio_15DF0713_02E4_9CA5_4173_B6244789FB4F]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB,this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57,this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "vrPolyfillScale": 1,
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_BD141CC8_9478_145B_41D4_265F47E47DB6",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_BD84EAD4_9478_3C4B_41C0_BDBA5096F748",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "layout": "absolute",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": [
  "this.IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D"
 ],
 "definitions": [{
 "class": "Video",
 "thumbnailUrl": "media/video_CFF11BD7_FEA2_F29F_41E2_7A3029A93A0C_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1920,
 "label": "Spice Diwali Video",
 "loop": false,
 "id": "video_CFF11BD7_FEA2_F29F_41E2_7A3029A93A0C",
 "height": 1080,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_CFF11BD7_FEA2_F29F_41E2_7A3029A93A0C.mp4"
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_t.jpg",
 "label": "R0010135_20210731152110",
 "id": "panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB",
 "hfov": 360,
 "overlays": [
  "this.overlay_DF671C8D_FD9E_1573_41DF_D56C2096CE77",
  "this.overlay_DE1C119D_FDA2_6E93_41EF_725FB8CA1571",
  "this.overlay_0DA9DD34_02A3_ECEC_4183_415132A934E3",
  "this.overlay_0C78E54C_02A3_7CA3_4167_56FD61F70054",
  "this.overlay_0C49C69E_02A4_FDDF_4157_A3A9D21C7074",
  "this.panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_tcap0"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 164.84,
   "class": "AdjacentPanorama",
   "yaw": 170.37,
   "panorama": "this.panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1",
   "distance": 1
  },
  {
   "backwardYaw": 164.84,
   "class": "AdjacentPanorama",
   "yaw": 110.66,
   "panorama": "this.panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18"
  },
  {
   "backwardYaw": -11.77,
   "class": "AdjacentPanorama",
   "yaw": -140.9,
   "panorama": "this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A",
   "distance": 1
  },
  {
   "backwardYaw": -11.77,
   "class": "AdjacentPanorama",
   "yaw": -55.18,
   "panorama": "this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1AD8328E_1493_9216_41A5_654A7A1F285A_t.jpg",
 "id": "photo_1AD8328E_1493_9216_41A5_654A7A1F285A",
 "width": 3600,
 "label": "9660",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1AD8328E_1493_9216_41A5_654A7A1F285A.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -66.91,
  "pitch": 0
 },
 "idleSequence": "this.sequence_005916AE_16F8_6597_41A6_954E38752991",
 "class": "PanoramaCamera",
 "id": "camera_005976AE_16F8_6597_41B3_DCDABFE61AA3",
 "initialSequence": "this.sequence_005916AE_16F8_6597_41A6_954E38752991"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 151.56,
  "pitch": 0
 },
 "idleSequence": "this.sequence_0408F1EB_16F8_5F9D_41B1_67F20BC07D8E",
 "class": "PanoramaCamera",
 "id": "camera_0408E1EB_16F8_5F9D_41AA_3D3F9C6845FE",
 "initialSequence": "this.sequence_0408F1EB_16F8_5F9D_41B1_67F20BC07D8E"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.93,
  "pitch": 0
 },
 "idleSequence": "this.sequence_028943DF_16F8_63B5_41B6_859488735228",
 "class": "PanoramaCamera",
 "id": "camera_028EA3DF_16F8_63B5_41AA_97E675BCE374",
 "initialSequence": "this.sequence_028943DF_16F8_63B5_41B6_859488735228"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.37,
  "pitch": 0
 },
 "idleSequence": "this.sequence_0406F798_16F8_63BB_4186_99BDAC02FF5C",
 "class": "PanoramaCamera",
 "id": "camera_0406E798_16F8_63BB_41A4_15D2936E4B4E",
 "initialSequence": "this.sequence_0406F798_16F8_63BB_4186_99BDAC02FF5C"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1AC58D9F_1492_9636_4195_D982C7821850_t.jpg",
 "id": "photo_1AC58D9F_1492_9636_4195_D982C7821850",
 "width": 3600,
 "label": "3062",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1AC58D9F_1492_9636_4195_D982C7821850.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 74.67,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0343D5B4_16F8_678B_4159_0B01CA8024BC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -56.56,
  "pitch": 0
 },
 "idleSequence": "this.sequence_026DA3FE_16F8_6377_41A1_E6928123FCC3",
 "class": "PanoramaCamera",
 "id": "camera_026D93FE_16F8_6377_41A1_894E6AC3B74D",
 "initialSequence": "this.sequence_026DA3FE_16F8_6377_41A1_E6928123FCC3"
},
{
 "class": "PlayList",
 "id": "playList_0151C045_16F8_5C95_41A5_FD5EE3C2FFB0",
 "items": [
  {
   "media": "this.video_063F3173_14B6_8E0E_41B1_4F23BFCB205A",
   "start": "this.MapViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0151C045_16F8_5C95_41A5_FD5EE3C2FFB0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0151C045_16F8_5C95_41A5_FD5EE3C2FFB0, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MapViewerVideoPlayer)",
   "player": "this.MapViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "audio": {
  "mp3Url": "media/audio_2B9D9F40_03AD_ECA3_4178_9C658E0216F8.mp3",
  "oggUrl": "media/audio_2B9D9F40_03AD_ECA3_4178_9C658E0216F8.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_2B9D9F40_03AD_ECA3_4178_9C658E0216F8",
 "autoplay": true,
 "data": {
  "label": "1627839677301-voicemaker.in-speech"
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_t.jpg",
 "label": "DOOR 7",
 "id": "panorama_19647650_0192_1BA3_4172_D0D86AA39F62",
 "hfov": 360,
 "overlays": [
  "this.overlay_1C313833_01F2_17E5_414C_92AAE9995707",
  "this.panorama_19647650_0192_1BA3_4172_D0D86AA39F62_tcap0"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 3.86,
   "class": "AdjacentPanorama",
   "yaw": 123.44,
   "panorama": "this.panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.22,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_044FB17E_16F8_5F77_41B6_A0D960CBD557",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 7.7,
  "pitch": 0
 },
 "idleSequence": "this.sequence_041C31CC_16F8_5F9B_419F_DCE8F915AA56",
 "class": "PanoramaCamera",
 "id": "camera_041C21CC_16F8_5F9B_4183_409453E30022",
 "initialSequence": "this.sequence_041C31CC_16F8_5F9B_419F_DCE8F915AA56"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_t.jpg",
 "label": "DOOR 2",
 "id": "panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4",
 "hfov": 360,
 "overlays": [
  "this.overlay_1B8BF08A_01F2_18A7_415B_D204B10B4B2E",
  "this.panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_tcap0"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -8.65,
   "class": "AdjacentPanorama",
   "yaw": 123.23,
   "panorama": "this.panorama_F662819B_FDAE_2E97_41D7_1583DFA38698",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 142.5,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0434418D_16F8_5F95_41B0_4079ACB8EB3E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1AC4DC61_1492_960B_4133_D62C638E3DAE_t.jpg",
 "id": "photo_1AC4DC61_1492_960B_4133_D62C638E3DAE",
 "width": 3600,
 "label": "3053",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1AC4DC61_1492_960B_4133_D62C638E3DAE.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -166.76,
  "pitch": 0
 },
 "idleSequence": "this.sequence_02F72352_16F8_5C8F_41B1_712D23249A98",
 "class": "PanoramaCamera",
 "id": "camera_02F70352_16F8_5C8F_4144_7A7F3915266E",
 "initialSequence": "this.sequence_02F72352_16F8_5C8F_41B1_712D23249A98"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1AC9CF67_1492_B217_41AD_B025A0F29909_t.jpg",
 "id": "photo_1AC9CF67_1492_B217_41AD_B025A0F29909",
 "width": 3600,
 "label": "3060",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1AC9CF67_1492_B217_41AD_B025A0F29909.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "60%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_08F4FCCB_1252_F0DB_41A8_3F3172E1A03F",
 "yaw": 2.59,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_08F4FCCB_1252_F0DB_41A8_3F3172E1A03F_0_2.jpg",
    "width": 834,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "hfov": 9.24,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "60%",
 "pitch": 8.54
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_235C3B9F_12F5_F17B_419A_DD19329A1611_t.jpg",
 "id": "photo_235C3B9F_12F5_F17B_419A_DD19329A1611",
 "width": 5472,
 "label": "03",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_235C3B9F_12F5_F17B_419A_DD19329A1611.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 3648
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -23.2,
  "pitch": 0
 },
 "idleSequence": "this.sequence_0420373A_16F8_64FF_4177_63B467A3254A",
 "class": "PanoramaCamera",
 "id": "camera_0420273A_16F8_64FF_419E_94BDA856C7E3",
 "initialSequence": "this.sequence_0420373A_16F8_64FF_4177_63B467A3254A"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1D497973_11E5_8184_41AF_226E330DF2EB_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.29,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_05035343_16F8_5C8D_41A3_E52DFDA6CCDB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_t.jpg",
 "label": "R0010155_20210803111824",
 "id": "panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_tcap0",
  "this.overlay_06E64712_11E4_8187_41AD_0EF1672E0D6E",
  "this.overlay_0BC96C88_11E7_8083_41AB_70790A9C1FFA",
  "this.overlay_0D9750EA_125D_8087_41AD_9E5C14385C23",
  "this.overlay_0D0133F3_125C_8084_41AF_9A5D80F6615B",
  "this.overlay_0D0274D6_125F_808F_41A1_BB605A0EF975",
  "this.overlay_0D0582C4_125C_808C_41A7_2235D1DFF90C",
  "this.overlay_0D06FFD5_125D_808C_41B0_E3607CD31FB6"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.44,
   "class": "AdjacentPanorama",
   "yaw": 179.78,
   "panorama": "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64",
   "distance": 1
  },
  {
   "backwardYaw": 1.44,
   "class": "AdjacentPanorama",
   "yaw": -144.85,
   "panorama": "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64",
   "distance": 1
  },
  {
   "backwardYaw": 1.44,
   "class": "AdjacentPanorama",
   "yaw": 158.96,
   "panorama": "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64",
   "distance": 1
  },
  {
   "backwardYaw": -82.93,
   "class": "AdjacentPanorama",
   "yaw": -3.36,
   "panorama": "this.panorama_F662819B_FDAE_2E97_41D7_1583DFA38698",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_6_t.jpg",
 "id": "album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_6",
 "width": 5472,
 "label": "01",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_6.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 3648
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -15.16,
  "pitch": 0
 },
 "idleSequence": "this.sequence_0230742D_16F8_6495_41AA_E099D53BE7EE",
 "class": "PanoramaCamera",
 "id": "camera_0230642D_16F8_6495_41B1_7F4661AE2995",
 "initialSequence": "this.sequence_0230742D_16F8_6495_41AA_E099D53BE7EE"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_t.jpg",
 "label": "DOOR 4",
 "id": "panorama_1954F328_0192_19E3_414B_FB5AF50E9250",
 "hfov": 360,
 "overlays": [
  "this.overlay_1AE407B2_01F2_18E7_417C_12EB1D26D9EE",
  "this.panorama_1954F328_0192_19E3_414B_FB5AF50E9250_tcap0"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 32.51,
   "class": "AdjacentPanorama",
   "yaw": 123.69,
   "panorama": "this.panorama_F662819B_FDAE_2E97_41D7_1583DFA38698",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.57,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_042A175A_16F8_64BF_41B4_E8B4E1702D2F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "audio": {
  "mp3Url": "media/audio_2BDC1D9C_03A3_6FA3_4154_10168C771942.mp3",
  "oggUrl": "media/audio_2BDC1D9C_03A3_6FA3_4154_10168C771942.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_2BDC1D9C_03A3_6FA3_4154_10168C771942",
 "autoplay": true,
 "data": {
  "label": "1627839689819-voicemaker.in-speech"
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1AC46365_1492_F20A_41A9_C2B2B8B81BCD_t.jpg",
 "id": "photo_1AC46365_1492_F20A_41A9_C2B2B8B81BCD",
 "width": 3600,
 "label": "3054",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1AC46365_1492_F20A_41A9_C2B2B8B81BCD.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_0_t.jpg",
 "id": "album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_0",
 "width": 5472,
 "label": "_21I9710",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_0.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 3648
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1AC59EA5_1492_B20A_4191_4EE6A6470493_t.jpg",
 "id": "photo_1AC59EA5_1492_B20A_4191_4EE6A6470493",
 "width": 3600,
 "label": "3046",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1AC59EA5_1492_B20A_4191_4EE6A6470493.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.79,
  "pitch": 0
 },
 "idleSequence": "this.sequence_05FE47D7_16F8_63B5_419A_EF926C84832B",
 "class": "PanoramaCamera",
 "id": "camera_05FFB7D7_16F8_63B5_4178_9C037113F7F3",
 "initialSequence": "this.sequence_05FE47D7_16F8_63B5_419A_EF926C84832B"
},
{
 "class": "Video",
 "thumbnailUrl": "media/video_CF23C4DD_FEA6_3693_41DB_17E139ED633C_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1920,
 "label": "SPICE SUPER SALE",
 "loop": false,
 "id": "video_CF23C4DD_FEA6_3693_41DB_17E139ED633C",
 "height": 1080,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_CF23C4DD_FEA6_3693_41DB_17E139ED633C.mp4"
 }
},
{
 "audio": {
  "mp3Url": "media/audio_0418BF47_1236_91CB_41A3_FD629573C667.mp3",
  "oggUrl": "media/audio_0418BF47_1236_91CB_41A3_FD629573C667.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_0418BF47_1236_91CB_41A3_FD629573C667",
 "autoplay": true,
 "data": {
  "label": "Kurties"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.22,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0458A15E_16F8_5CB7_41B4_253B2CEB1CBF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 154,
  "pitch": 0
 },
 "idleSequence": "this.sequence_05AF6278_16F8_5D7B_41B0_4B6FC269B1DE",
 "class": "PanoramaCamera",
 "id": "camera_05AF5278_16F8_5D7B_41AF_9DA08DD3F43E",
 "initialSequence": "this.sequence_05AF6278_16F8_5D7B_41B0_4B6FC269B1DE"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -36.77,
  "pitch": 0
 },
 "idleSequence": "this.sequence_057152B6_16F8_5DF7_41B0_B25382749550",
 "class": "PanoramaCamera",
 "id": "camera_0576B2B6_16F8_5DF7_41AA_FEE471A61CA9",
 "initialSequence": "this.sequence_057152B6_16F8_5DF7_41B0_B25382749550"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.16,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_05335314_16F8_5C8B_41B6_1F2C75562A61",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.22,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0446216E_16F8_5C97_4188_FF50FCBBDB5C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.93,
  "pitch": 0
 },
 "idleSequence": "this.sequence_02AA13C0_16F8_638B_41AF_9FCCFAA4114B",
 "class": "PanoramaCamera",
 "id": "camera_02AA03C0_16F8_638B_41B1_06A4B49777EA",
 "initialSequence": "this.sequence_02AA13C0_16F8_638B_41AF_9FCCFAA4114B"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1ACC8AA9_1492_F21B_419A_79B8484EF696_t.jpg",
 "id": "photo_1ACC8AA9_1492_F21B_419A_79B8484EF696",
 "width": 3600,
 "label": "3055",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1ACC8AA9_1492_F21B_419A_79B8484EF696.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_214ECF7C_01F2_0862_415E_590BFF465366_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -123.44,
  "pitch": 0
 },
 "idleSequence": "this.sequence_03BB0527_16F8_6495_41B3_8F424F366823",
 "class": "PanoramaCamera",
 "id": "camera_03BB7527_16F8_6495_4199_4C10C0938B3F",
 "initialSequence": "this.sequence_03BB0527_16F8_6495_41B3_8F424F366823"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_t.jpg",
 "label": "R0010151_20210803111300",
 "id": "panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8",
 "hfov": 360,
 "overlays": [
  "this.panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_tcap0",
  "this.overlay_036A2B8D_11FC_809C_4176_6CC7ADDE66ED",
  "this.overlay_0376C327_11E4_818C_41AD_83B3E58C5575",
  "this.overlay_031F4607_11E5_838C_4199_D78A3C656184",
  "this.overlay_02B34782_11E4_8084_41A7_08E2DE57BDC1",
  "this.overlay_08F6D3D9_11E5_8085_41A4_6BB5FFE08EA5",
  "this.overlay_0BA682DA_11DC_8084_419C_93DCCCD959EE",
  "this.overlay_0859AB05_1224_818C_41A9_D3543957C75B",
  "this.overlay_0860C0D4_1224_808C_4174_B5A0E248483C",
  "this.overlay_0E193273_1223_8384_41B0_21101F887C18",
  "this.overlay_0FDB1337_123D_818C_41A6_EEBA5151A2B4",
  "this.overlay_0FDB35D1_123C_8084_41A2_3C6A40881D52",
  "this.overlay_0C1DF34B_123C_8184_4169_5FB240DB3EB6",
  "this.overlay_0FDB5268_123D_8384_4198_316148AF6FF7",
  "this.overlay_0FC93A38_123C_8384_41B1_05B7CD934BF5",
  "this.overlay_0FDEBF4C_125D_91DD_419B_DCB2227E8640"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4"
  },
  {
   "backwardYaw": 3.95,
   "class": "AdjacentPanorama",
   "yaw": 179.78,
   "panorama": "this.panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3",
   "distance": 1
  },
  {
   "backwardYaw": 143.23,
   "class": "AdjacentPanorama",
   "yaw": 45.65,
   "panorama": "this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F",
   "distance": 1
  },
  {
   "backwardYaw": 143.23,
   "class": "AdjacentPanorama",
   "yaw": 72.6,
   "panorama": "this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F",
   "distance": 1
  },
  {
   "backwardYaw": 143.23,
   "class": "AdjacentPanorama",
   "yaw": 15.31,
   "panorama": "this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F",
   "distance": 1
  },
  {
   "backwardYaw": 160.97,
   "class": "AdjacentPanorama",
   "yaw": -37.5,
   "panorama": "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64",
   "distance": 1
  },
  {
   "backwardYaw": 160.97,
   "class": "AdjacentPanorama",
   "yaw": -42.58,
   "panorama": "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64",
   "distance": 1
  },
  {
   "backwardYaw": 160.97,
   "class": "AdjacentPanorama",
   "yaw": -19.13,
   "panorama": "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF"
  },
  {
   "backwardYaw": -153.34,
   "class": "AdjacentPanorama",
   "yaw": -74.68,
   "panorama": "this.panorama_1D497973_11E5_8184_41AF_226E330DF2EB",
   "distance": 1
  },
  {
   "backwardYaw": -178.69,
   "class": "AdjacentPanorama",
   "yaw": -4.84,
   "panorama": "this.panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "playList_012D5064_16F8_5C8B_4193_63D1FE1735F7",
 "items": [
  {
   "media": "this.video_CFF11BD7_FEA2_F29F_41E2_7A3029A93A0C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_012D5064_16F8_5C8B_4193_63D1FE1735F7, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_012D5064_16F8_5C8B_4193_63D1FE1735F7, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171.02,
  "pitch": 0
 },
 "idleSequence": "this.sequence_0252B40E_16F8_6497_4193_1EB5DD0CB5B9",
 "class": "PanoramaCamera",
 "id": "camera_0252A40E_16F8_6497_4194_E8D457D78941",
 "initialSequence": "this.sequence_0252B40E_16F8_6497_4193_1EB5DD0CB5B9"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.64,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_05E9921A_16F8_5CBF_41A3_4D05C9D624C6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -19.03,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_055082E5_16F8_5D95_41B5_9247299EEDF7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.56,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_030165F2_16F8_678F_41B2_544A94040BCF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1AC48FD0_1492_920A_4172_9BDF31DFB176_t.jpg",
 "id": "photo_1AC48FD0_1492_920A_4172_9BDF31DFB176",
 "width": 3600,
 "label": "3036",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1AC48FD0_1492_920A_4172_9BDF31DFB176.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 15.17,
  "pitch": 0
 },
 "idleSequence": "this.sequence_041C1779_16F8_637D_41A7_F9CA141B62DA",
 "class": "PanoramaCamera",
 "id": "camera_041C7779_16F8_637D_4193_0CFFE5A5A841",
 "initialSequence": "this.sequence_041C1779_16F8_637D_41A7_F9CA141B62DA"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 134.65,
  "pitch": 0
 },
 "idleSequence": "this.sequence_0240E41D_16F8_64B5_4172_9E8AB6699E40",
 "class": "PanoramaCamera",
 "id": "camera_0240D41D_16F8_64B5_41A7_9F36D302F589",
 "initialSequence": "this.sequence_0240E41D_16F8_64B5_4172_9E8AB6699E40"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 5.59,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_037F6585_16F8_6795_41B4_7C52B91060CE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 5.59,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_038F2575_16F8_6775_41A5_9D8FDA0B79EA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.05,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0596E287_16F8_5D95_41B0_5ABD8DBC351B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -23.2,
  "pitch": 0
 },
 "idleSequence": "this.sequence_0425772B_16F8_649D_419B_07F105BD7BF3",
 "class": "PanoramaCamera",
 "id": "camera_0425672B_16F8_649D_41B2_A9589E2576A8",
 "initialSequence": "this.sequence_0425772B_16F8_649D_419B_07F105BD7BF3"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1965B780_0192_78A3_4153_B33293D5EF40_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_t.jpg",
 "label": "R0010129_20210731151444",
 "id": "panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D",
 "hfov": 360,
 "overlays": [
  "this.overlay_12D50390_018F_F8A3_4153_B3269510D8D8",
  "this.overlay_152BD433_018E_7FE5_416A_6C3F3A466861",
  "this.overlay_15492808_0192_17A3_4173_1549C794351A",
  "this.overlay_22B6188F_01B2_08BD_4161_A9233C0F1786",
  "this.overlay_23475D44_01B2_09A3_416D_4E6F4939D324",
  "this.overlay_235F9A9F_01B2_08DD_417B_2A7B4C3382C7",
  "this.overlay_2359BD15_01B2_09AD_417C_1645019F680A",
  "this.overlay_235B581D_01B1_F7DD_4171_CA762604E4CD",
  "this.overlay_235E38B8_01B6_08E3_4128_146A4FCB7A40",
  "this.overlay_23583494_01B6_38A3_417B_795EC0340D9D",
  "this.panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_tcap0",
  "this.overlay_0DB0D383_1264_8084_41A1_83461392A752"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64"
  },
  {
   "backwardYaw": -164.83,
   "class": "AdjacentPanorama",
   "yaw": -67.37,
   "panorama": "this.panorama_F662819B_FDAE_2E97_41D7_1583DFA38698",
   "distance": 1
  },
  {
   "backwardYaw": 178.15,
   "class": "AdjacentPanorama",
   "yaw": 1.72,
   "panorama": "this.panorama_F6614504_FDAE_1771_41C6_7309CCD9F415",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF"
  },
  {
   "backwardYaw": 172.63,
   "class": "AdjacentPanorama",
   "yaw": 76.33,
   "panorama": "this.panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -36.77,
  "pitch": 0
 },
 "idleSequence": "this.sequence_059BE297_16F8_5DB5_41B3_7525513FDB95",
 "class": "PanoramaCamera",
 "id": "camera_059BD297_16F8_5DB5_41B1_0FFD1B76FA66",
 "initialSequence": "this.sequence_059BE297_16F8_5DB5_41B3_7525513FDB95"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_t.jpg",
 "label": "DOOR 9",
 "id": "panorama_214ECF7C_01F2_0862_415E_590BFF465366",
 "hfov": 360,
 "overlays": [
  "this.overlay_21965977_01F2_086D_4123_B88257513CCC",
  "this.panorama_214ECF7C_01F2_0862_415E_590BFF465366_tcap0"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -67.32,
   "class": "AdjacentPanorama",
   "yaw": 124.35,
   "panorama": "this.panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_t.jpg",
 "label": "R0010139_20210731152426",
 "id": "panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1",
 "hfov": 360,
 "overlays": [
  "this.overlay_DF3DA255_FDA2_6D93_41D5_910FB60585E2",
  "this.overlay_D9F53022_FDA2_6DB0_4184_DFE4CECAE648",
  "this.overlay_0DD069D1_02A5_77A5_4181_55D63307E97F",
  "this.overlay_0DC4B54E_02A7_7CBC_4183_CE8696B79643",
  "this.overlay_0D1881EF_02A7_777D_415F_D374558A7974",
  "this.panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_tcap0"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18"
  },
  {
   "backwardYaw": 56.56,
   "class": "AdjacentPanorama",
   "yaw": 113.09,
   "panorama": "this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A",
   "distance": 1
  },
  {
   "backwardYaw": 56.56,
   "class": "AdjacentPanorama",
   "yaw": 156.35,
   "panorama": "this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A",
   "distance": 1
  },
  {
   "backwardYaw": 170.37,
   "class": "AdjacentPanorama",
   "yaw": 164.84,
   "panorama": "this.panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_t.jpg",
 "label": "R0010143_20210731152931",
 "id": "panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759",
 "hfov": 360,
 "overlays": [
  "this.overlay_E6CA44AA_FDFE_16B1_41CB_E7C176A6CEDE",
  "this.overlay_E1277214_FDE2_6D91_4185_5EC92E592955",
  "this.overlay_18E1C2BF_000D_EFC5_4135_2B8A627678B8",
  "this.overlay_198FC99B_000D_BDCE_415E_DA45824C7F8A",
  "this.overlay_195B9269_000D_6F4A_4163_4615844D45DD",
  "this.overlay_188DE888_000D_5BCA_4159_49D2060CB7C4",
  "this.overlay_180E8781_0033_75BA_415F_C42D8A3B0FE8",
  "this.overlay_18446F4D_0033_B54A_4158_772BEC5DDB38",
  "this.overlay_175DB017_0032_AAC6_4160_5B7C735F842A",
  "this.overlay_18783F8F_0032_F5C7_4161_AFDC063DE7F2",
  "this.overlay_2306A80A_01B6_37A7_4178_89B0761E53FC",
  "this.overlay_235A9C05_01B2_0FAD_4169_5FF9ECF7535B",
  "this.overlay_233CAC0D_01BE_0FBD_4138_BEBB9C37C5F6",
  "this.overlay_2305AE8F_01BE_08BD_4176_83E2B7306690",
  "this.panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_tcap0",
  "this.overlay_04D8A648_1236_F3C4_4194_993D97FB49C8"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 76.33,
   "class": "AdjacentPanorama",
   "yaw": 172.63,
   "panorama": "this.panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D",
   "distance": 1
  },
  {
   "backwardYaw": 123.72,
   "class": "AdjacentPanorama",
   "yaw": -26,
   "panorama": "this.panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F"
  },
  {
   "backwardYaw": 123.33,
   "class": "AdjacentPanorama",
   "yaw": 29.13,
   "panorama": "this.panorama_19544208_0192_FBA3_4174_2268217B47E4",
   "distance": 1
  },
  {
   "backwardYaw": 124.47,
   "class": "AdjacentPanorama",
   "yaw": -45.35,
   "panorama": "this.panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC",
   "distance": 1
  },
  {
   "backwardYaw": -177.07,
   "class": "AdjacentPanorama",
   "yaw": 87.21,
   "panorama": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF",
   "distance": 1
  },
  {
   "backwardYaw": -177.07,
   "class": "AdjacentPanorama",
   "yaw": 53.19,
   "panorama": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF",
   "distance": 1
  },
  {
   "backwardYaw": -177.07,
   "class": "AdjacentPanorama",
   "yaw": 67.05,
   "panorama": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF",
   "distance": 1
  },
  {
   "backwardYaw": -177.07,
   "class": "AdjacentPanorama",
   "yaw": 107.54,
   "panorama": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF",
   "distance": 1
  },
  {
   "backwardYaw": 123.44,
   "class": "AdjacentPanorama",
   "yaw": 3.86,
   "panorama": "this.panorama_19647650_0192_1BA3_4172_D0D86AA39F62",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "audio": {
  "mp3Url": "media/audio_180615B5_02A4_9FEC_4186_3DFABCFEB6DE.mp3",
  "oggUrl": "media/audio_180615B5_02A4_9FEC_4186_3DFABCFEB6DE.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_180615B5_02A4_9FEC_4186_3DFABCFEB6DE",
 "autoplay": true,
 "data": {
  "label": "1627839529889-voicemaker.in-speech"
 }
},
{
 "audio": {
  "mp3Url": "media/audio_15DF0713_02E4_9CA5_4173_B6244789FB4F.mp3",
  "oggUrl": "media/audio_15DF0713_02E4_9CA5_4173_B6244789FB4F.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_15DF0713_02E4_9CA5_4173_B6244789FB4F",
 "autoplay": true,
 "data": {
  "label": "the-all-night-preview-full"
 }
},
{
 "audio": {
  "mp3Url": "media/audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6.mp3",
  "oggUrl": "media/audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6",
 "autoplay": true,
 "data": {
  "label": "1627839439664-voicemaker.in-speech"
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_t.jpg",
 "label": "DOOR 10",
 "id": "panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A",
 "hfov": 360,
 "overlays": [
  "this.overlay_21DA36F8_01F2_7863_4170_FDEA7C26B3DA",
  "this.panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_tcap0"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 8.98,
   "class": "AdjacentPanorama",
   "yaw": 123.03,
   "panorama": "this.panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "audio": {
  "mp3Url": "media/audio_07B3D4CA_1235_70C4_41A8_25E6085351BF.mp3",
  "oggUrl": "media/audio_07B3D4CA_1235_70C4_41A8_25E6085351BF.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_07B3D4CA_1235_70C4_41A8_25E6085351BF",
 "autoplay": true,
 "data": {
  "label": "plazo"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.87,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00ABE660_16F8_648B_41B1_95A1B351C0C6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.23,
  "pitch": 0
 },
 "idleSequence": "this.sequence_0207048B_16F8_659D_41B0_F6615B954AD1",
 "class": "PanoramaCamera",
 "id": "camera_0207548B_16F8_659D_41B4_86D193AF3AAF",
 "initialSequence": "this.sequence_0207048B_16F8_659D_41B0_F6615B954AD1"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1AC7C814_1492_BE09_41A2_471791A13BE4_t.jpg",
 "id": "photo_1AC7C814_1492_BE09_41A2_471791A13BE4",
 "width": 3600,
 "label": "3059",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1AC7C814_1492_BE09_41A2_471791A13BE4.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1AC54993_1493_9E0E_41B4_364305FC2C08_t.jpg",
 "id": "photo_1AC54993_1493_9E0E_41B4_364305FC2C08",
 "width": 3600,
 "label": "9662",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1AC54993_1493_9E0E_41B4_364305FC2C08.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1AD90205_1492_920A_41A0_A51F71BB523C_t.jpg",
 "id": "photo_1AD90205_1492_920A_41A0_A51F71BB523C",
 "width": 3600,
 "label": "3034",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1AD90205_1492_920A_41A0_A51F71BB523C.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 39.1,
  "pitch": 0
 },
 "idleSequence": "this.sequence_042CF74A_16F8_649F_41B5_C323385E4E58",
 "class": "PanoramaCamera",
 "id": "camera_042CE74A_16F8_649F_41B1_3C0CCC407A6E",
 "initialSequence": "this.sequence_042CF74A_16F8_649F_41B5_C323385E4E58"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_t.jpg",
 "label": "R0010134_20210731152018",
 "id": "panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A",
 "hfov": 360,
 "overlays": [
  "this.overlay_DC56B694_FD9E_1291_41E6_004A9E5AD445",
  "this.overlay_DF65AA9F_FD9E_728F_41ED_645C5B62663B",
  "this.overlay_D9665995_FDA6_1E93_41E3_BF86C4CADD96",
  "this.overlay_DB9CA428_FDA2_15B1_41D0_B863FEB944F6",
  "this.overlay_0DC1C190_02BD_97A3_4182_6A06617844BF",
  "this.overlay_0C4E3CAF_02BC_EDFD_40F8_55ECE745D6A0",
  "this.overlay_0C4C68F6_02A3_756C_4177_18FDB1C91137",
  "this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_tcap0"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 113.09,
   "class": "AdjacentPanorama",
   "yaw": 56.56,
   "panorama": "this.panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1",
   "distance": 1
  },
  {
   "backwardYaw": 113.09,
   "class": "AdjacentPanorama",
   "yaw": 24.62,
   "panorama": "this.panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1",
   "distance": 1
  },
  {
   "backwardYaw": 48.52,
   "class": "AdjacentPanorama",
   "yaw": 155.79,
   "panorama": "this.panorama_F6614504_FDAE_1771_41C6_7309CCD9F415",
   "distance": 1
  },
  {
   "backwardYaw": 156.8,
   "class": "AdjacentPanorama",
   "yaw": -172.3,
   "panorama": "this.panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18",
   "distance": 1
  },
  {
   "backwardYaw": 156.8,
   "class": "AdjacentPanorama",
   "yaw": -144.26,
   "panorama": "this.panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18",
   "distance": 1
  },
  {
   "backwardYaw": -140.9,
   "class": "AdjacentPanorama",
   "yaw": -11.77,
   "panorama": "this.panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.45,
  "pitch": 0
 },
 "idleSequence": "this.sequence_05249324_16F8_5C8A_41B5_A458D717B416",
 "class": "PanoramaCamera",
 "id": "camera_05248324_16F8_5C8A_41A2_F4EA3E485B6A",
 "initialSequence": "this.sequence_05249324_16F8_5C8A_41B5_A458D717B416"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -15.16,
  "pitch": 0
 },
 "idleSequence": "this.sequence_0226D44C_16F8_649B_41A0_AA6B11DFBB59",
 "class": "PanoramaCamera",
 "id": "camera_0226C44C_16F8_649B_41B4_41703EB7C513",
 "initialSequence": "this.sequence_0226D44C_16F8_649B_41A0_AA6B11DFBB59"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "audio": {
  "mp3Url": "media/audio_2B43C0B4_03A5_75EC_4147_761C844AB07C.mp3",
  "oggUrl": "media/audio_2B43C0B4_03A5_75EC_4147_761C844AB07C.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_2B43C0B4_03A5_75EC_4147_761C844AB07C",
 "autoplay": true,
 "data": {
  "label": "1627839704649-voicemaker.in-speech"
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.28,
  "pitch": 0
 },
 "idleSequence": "this.sequence_03E504BA_16F8_65FF_41A3_B0D5001DDD74",
 "class": "PanoramaCamera",
 "id": "camera_03E564BA_16F8_65FF_41B1_C779F5934DFB",
 "initialSequence": "this.sequence_03E504BA_16F8_65FF_41A3_B0D5001DDD74"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_t.jpg",
 "label": "R0010141_20210731152801",
 "id": "panorama_F662819B_FDAE_2E97_41D7_1583DFA38698",
 "hfov": 360,
 "overlays": [
  "this.panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_tcap0",
  "this.overlay_E013C354_FDE2_1390_41AC_241A0E625E56",
  "this.overlay_E373CE15_FDE2_3593_41D9_28C3710C1971",
  "this.overlay_CF4C41C2_FEA6_EEF1_41D2_C579272732EB",
  "this.overlay_14074E17_003F_56C6_4152_1B6D06AD9E5E",
  "this.overlay_14077E17_003F_56C6_4155_9801BB14D94D",
  "this.overlay_16D87491_0012_ABDB_4160_8B6138C8A7DA",
  "this.overlay_16DAF6FC_001F_574A_415D_00E8DB44D090",
  "this.overlay_17E88FF6_001E_F546_414D_75C980DF9E0E",
  "this.overlay_1729DEE2_0013_D77E_4138_8716AA0D33E0",
  "this.overlay_1729CEE2_0013_D77E_414B_F2BBAB957F5C",
  "this.overlay_16726645_0013_56BA_415B_CD807EEFA5FE",
  "this.overlay_18FB48C9_0012_FB4A_4148_B65CD7DBFDB8",
  "this.overlay_174D44BE_0012_ABC6_4151_DBCB2E081188",
  "this.overlay_18FA1BB3_000D_7DDE_4157_1D1CED3991EC",
  "this.overlay_0D39C60F_125C_839C_41A3_CFFC2A389A4D",
  "this.overlay_0D7DE325_1263_818D_41AC_D47D78B96B79"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 122.04,
   "class": "AdjacentPanorama",
   "yaw": -28.44,
   "panorama": "this.panorama_1B9E615B_0192_39A5_4153_2594C1C572D3",
   "distance": 1
  },
  {
   "backwardYaw": -3.36,
   "class": "AdjacentPanorama",
   "yaw": -82.93,
   "panorama": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4",
   "distance": 1
  },
  {
   "backwardYaw": -3.36,
   "class": "AdjacentPanorama",
   "yaw": -44.75,
   "panorama": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4",
   "distance": 1
  },
  {
   "backwardYaw": -3.36,
   "class": "AdjacentPanorama",
   "yaw": -100.77,
   "panorama": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4",
   "distance": 1
  },
  {
   "backwardYaw": -67.37,
   "class": "AdjacentPanorama",
   "yaw": -164.83,
   "panorama": "this.panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64"
  },
  {
   "backwardYaw": 123.23,
   "class": "AdjacentPanorama",
   "yaw": -8.65,
   "panorama": "this.panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4",
   "distance": 1
  },
  {
   "backwardYaw": 123.52,
   "class": "AdjacentPanorama",
   "yaw": 13.24,
   "panorama": "this.panorama_1965B780_0192_78A3_4153_B33293D5EF40",
   "distance": 1
  },
  {
   "backwardYaw": 123.69,
   "class": "AdjacentPanorama",
   "yaw": 32.51,
   "panorama": "this.panorama_1954F328_0192_19E3_414B_FB5AF50E9250",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 92.11,
  "pitch": 0
 },
 "idleSequence": "this.sequence_040D17A8_16F8_639B_41B0_20098B183640",
 "class": "PanoramaCamera",
 "id": "camera_040D07A8_16F8_639B_41B5_2BAA2140CB45",
 "initialSequence": "this.sequence_040D17A8_16F8_639B_41B0_20098B183640"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 26.66,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_055AA2F5_16F8_5D75_4197_05ADFC111B2F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "audio": {
  "mp3Url": "media/audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA.mp3",
  "oggUrl": "media/audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA",
 "autoplay": true,
 "data": {
  "label": "T-shirt"
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -57.96,
  "pitch": 0
 },
 "idleSequence": "this.sequence_05F241FB_16F8_5F7D_4190_B7D80BF51D4A",
 "class": "PanoramaCamera",
 "id": "camera_05F3A1FB_16F8_5F7D_41A8_9F310A633060",
 "initialSequence": "this.sequence_05F241FB_16F8_5F7D_4190_B7D80BF51D4A"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_2_t.jpg",
 "id": "album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_2",
 "width": 5472,
 "label": "_21I9788",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_2.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 3648
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 105.32,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_035D15A4_16F8_678B_41B1_011931EE84C9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.14,
  "pitch": 0
 },
 "idleSequence": "this.sequence_05E667E6_16F8_6397_41B2_A4BC20510D5C",
 "class": "PanoramaCamera",
 "id": "camera_05E647E6_16F8_6397_41AC_742A6CDB5FB3",
 "initialSequence": "this.sequence_05E667E6_16F8_6397_41B2_A4BC20510D5C"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 112.63,
  "pitch": 0
 },
 "idleSequence": "this.sequence_05C40239_16F8_5CFD_41A1_BEDF52AA6B47",
 "class": "PanoramaCamera",
 "id": "camera_05C47239_16F8_5CFD_41AE_21A8690EB2CF",
 "initialSequence": "this.sequence_05C40239_16F8_5CFD_41A1_BEDF52AA6B47"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_t.jpg",
 "label": "R0010131_20210731151701",
 "id": "panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF",
 "hfov": 360,
 "overlays": [
  "this.overlay_E70C9B04_FDE2_3371_41E9_5D309A044E0D",
  "this.overlay_E700B189_FDFE_6F73_41DF_4E57941E5624",
  "this.overlay_230C9918_01B2_09A3_4165_23CEAE970C56",
  "this.overlay_2353544B_01B2_3FA5_4145_18DC5F6B1605",
  "this.overlay_23988626_01B3_FBEF_4110_6B94E71E8A50",
  "this.overlay_239B3B46_01B2_09AF_4162_663B881EEA20",
  "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_tcap0",
  "this.overlay_30D4CB2D_1265_819C_41A6_3F1B1D2567DE"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -87.89,
   "class": "AdjacentPanorama",
   "yaw": 0.29,
   "panorama": "this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F",
   "distance": 1
  },
  {
   "backwardYaw": -87.89,
   "class": "AdjacentPanorama",
   "yaw": -24.63,
   "panorama": "this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F",
   "distance": 1
  },
  {
   "backwardYaw": -87.89,
   "class": "AdjacentPanorama",
   "yaw": 23.61,
   "panorama": "this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F",
   "distance": 1
  },
  {
   "backwardYaw": 87.21,
   "class": "AdjacentPanorama",
   "yaw": -177.07,
   "panorama": "this.panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "audio": {
  "mp3Url": "media/audio_1F0E9AD2_029D_75A4_4143_BA068AFA2D22.mp3",
  "oggUrl": "media/audio_1F0E9AD2_029D_75A4_4143_BA068AFA2D22.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_1F0E9AD2_029D_75A4_4143_BA068AFA2D22",
 "autoplay": true,
 "data": {
  "label": "1627839475474-voicemaker.in-speech"
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -150.87,
  "pitch": 0
 },
 "idleSequence": "this.sequence_0333D5C3_16F8_678D_4188_FE7D4A0DBC95",
 "class": "PanoramaCamera",
 "id": "camera_033325C3_16F8_678D_4196_BF32C00F8746",
 "initialSequence": "this.sequence_0333D5C3_16F8_678D_4188_FE7D4A0DBC95"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_t.jpg",
 "label": "R0010150_20210803110916",
 "id": "panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3",
 "hfov": 360,
 "overlays": [
  "this.panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_tcap0",
  "this.overlay_00739418_11FD_8784_41A4_058D894DAACB",
  "this.overlay_033DEF57_11FD_818C_419C_C648A95F8038"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -4.09,
   "class": "AdjacentPanorama",
   "yaw": -178.43,
   "panorama": "this.panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD",
   "distance": 1
  },
  {
   "backwardYaw": 179.78,
   "class": "AdjacentPanorama",
   "yaw": 3.95,
   "panorama": "this.panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.19,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_03F7449A_16F8_65BF_41B3_4C982DA7567F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.71,
  "pitch": 0
 },
 "idleSequence": "this.sequence_00C46631_16F8_648D_41A6_07CDD81C85DB",
 "class": "PanoramaCamera",
 "id": "camera_00C45631_16F8_648D_41A5_A98F1CBE370F",
 "initialSequence": "this.sequence_00C46631_16F8_648D_41A6_07CDD81C85DB"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_t.jpg",
 "label": "R0010137_20210731152228",
 "id": "panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18",
 "hfov": 360,
 "overlays": [
  "this.overlay_DDCED0A7_FDE2_6EB0_41DC_545D98AB914E",
  "this.overlay_DF443A45_FD9E_1DF3_41E7_F3232D6D49E8",
  "this.overlay_1F1AD9E5_01F6_0862_4174_0D5DD18074A7",
  "this.overlay_21C50E7B_01F6_0865_4171_5B3B9D999281",
  "this.overlay_228BF297_01F2_18AD_4146_FB0D0895CD0F",
  "this.overlay_1E0626DE_01F2_185F_417B_2D0B5A39A95C",
  "this.overlay_0DEFD06C_02BF_7563_415B_915B2925868C",
  "this.overlay_0C7469BF_02BC_F7DD_4174_0363BF05288E",
  "this.overlay_0DED72BE_02BD_95DF_413F_949F20EB18EC",
  "this.panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_tcap0"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 123.03,
   "class": "AdjacentPanorama",
   "yaw": 8.98,
   "panorama": "this.panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A",
   "distance": 1
  },
  {
   "backwardYaw": -30.61,
   "class": "AdjacentPanorama",
   "yaw": -151.2,
   "panorama": "this.panorama_F6614504_FDAE_1771_41C6_7309CCD9F415",
   "distance": 1
  },
  {
   "backwardYaw": 124.35,
   "class": "AdjacentPanorama",
   "yaw": -67.32,
   "panorama": "this.panorama_214ECF7C_01F2_0862_415E_590BFF465366",
   "distance": 1
  },
  {
   "backwardYaw": -172.3,
   "class": "AdjacentPanorama",
   "yaw": 156.8,
   "panorama": "this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A",
   "distance": 1
  },
  {
   "backwardYaw": -172.3,
   "class": "AdjacentPanorama",
   "yaw": 125.57,
   "panorama": "this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_t.jpg",
 "label": "R0010153_20210803111624",
 "id": "panorama_1D497973_11E5_8184_41AF_226E330DF2EB",
 "hfov": 360,
 "overlays": [
  "this.panorama_1D497973_11E5_8184_41AF_226E330DF2EB_tcap0",
  "this.overlay_0903ECDB_11DC_8084_41A8_FD4204C9EEBB",
  "this.overlay_0BEFEB0D_11DD_819D_4183_BB94168996DD",
  "this.overlay_0A4CF2C6_11DD_808F_4141_2C244D808290",
  "this.overlay_329030BE_1225_80FF_41AC_139504F8782C",
  "this.overlay_0D59C2B1_1224_8085_4172_A597B59FAD2B",
  "this.overlay_0D1CA2A0_1223_8084_41B0_A30DBCDD95CE",
  "this.overlay_0D5A9BB2_122C_8084_417E_A94FA13A7202",
  "this.overlay_0D5DEC97_122D_808C_41B0_918C55C713AF",
  "this.overlay_056F9F4D_1255_91DC_41A0_89E28B07BC07",
  "this.popup_08F4FCCB_1252_F0DB_41A8_3F3172E1A03F"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -174.41,
   "class": "AdjacentPanorama",
   "yaw": 88.59,
   "panorama": "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64",
   "distance": 1
  },
  {
   "backwardYaw": -174.41,
   "class": "AdjacentPanorama",
   "yaw": 63.73,
   "panorama": "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64",
   "distance": 1
  },
  {
   "backwardYaw": -174.41,
   "class": "AdjacentPanorama",
   "yaw": 110.65,
   "panorama": "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4"
  },
  {
   "backwardYaw": -74.68,
   "class": "AdjacentPanorama",
   "yaw": -153.34,
   "panorama": "this.panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8",
   "distance": 1
  },
  {
   "backwardYaw": -105.33,
   "class": "AdjacentPanorama",
   "yaw": 165.71,
   "panorama": "this.panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerVideoPlayer",
 "displayPlaybackBar": true
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.85,
  "pitch": 0
 },
 "idleSequence": "this.sequence_04188788_16F8_639B_4159_C37EA952E04C",
 "class": "PanoramaCamera",
 "id": "camera_0418F788_16F8_639B_41B1_FE0FA81E7D49",
 "initialSequence": "this.sequence_04188788_16F8_639B_4159_C37EA952E04C"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1ACD7AE1_1491_720A_4199_29031A1759FC_t.jpg",
 "id": "photo_1ACD7AE1_1491_720A_4199_29031A1759FC",
 "width": 3600,
 "label": "3033",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1ACD7AE1_1491_720A_4199_29031A1759FC.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.93,
  "pitch": 0
 },
 "idleSequence": "this.sequence_027E03EF_16F8_6395_4190_A1F491EE2A20",
 "class": "PanoramaCamera",
 "id": "camera_027E63EF_16F8_6395_4181_CCEBD66E5A22",
 "initialSequence": "this.sequence_027E03EF_16F8_6395_4190_A1F491EE2A20"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.45,
  "pitch": 0
 },
 "idleSequence": "this.sequence_051D7343_16F8_5C8D_41B6_0B08D6F68E5F",
 "class": "PanoramaCamera",
 "id": "camera_051D5343_16F8_5C8D_41B0_8F8F0D521292",
 "initialSequence": "this.sequence_051D7343_16F8_5C8D_41B6_0B08D6F68E5F"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.45,
  "pitch": 0
 },
 "idleSequence": "this.sequence_05295333_16F8_5C8D_41A5_355758355E7C",
 "class": "PanoramaCamera",
 "id": "camera_05294333_16F8_5C8D_41A3_1D307A71C589",
 "initialSequence": "this.sequence_05295333_16F8_5C8D_41A5_355758355E7C"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_t.jpg",
 "label": "R0010133_20210731151919",
 "id": "panorama_F6614504_FDAE_1771_41C6_7309CCD9F415",
 "hfov": 360,
 "overlays": [
  "this.overlay_E2619D60_FDE2_17B1_41DE_266B983662F2",
  "this.overlay_DDB04334_FDE3_F391_41EF_282BD8E3FD3D",
  "this.overlay_D85D4E04_FDA2_3571_41E7_6F04CA969E3F",
  "this.overlay_0CBC9267_02BC_956D_416A_96B85D1E1F0A",
  "this.overlay_0DCE837A_02BC_BB64_416C_5E68D653C098",
  "this.panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_tcap0"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.72,
   "class": "AdjacentPanorama",
   "yaw": 178.15,
   "panorama": "this.panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D",
   "distance": 1
  },
  {
   "backwardYaw": -151.2,
   "class": "AdjacentPanorama",
   "yaw": -30.61,
   "panorama": "this.panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18",
   "distance": 1
  },
  {
   "backwardYaw": 155.79,
   "class": "AdjacentPanorama",
   "yaw": 48.52,
   "panorama": "this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A",
   "distance": 1
  },
  {
   "backwardYaw": 155.79,
   "class": "AdjacentPanorama",
   "yaw": 43.26,
   "panorama": "this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "audio": {
  "mp3Url": "media/audio_000FB5BA_1232_9144_41AA_30BA1960C690.mp3",
  "oggUrl": "media/audio_000FB5BA_1232_9144_41AA_30BA1960C690.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_000FB5BA_1232_9144_41AA_30BA1960C690",
 "autoplay": true,
 "data": {
  "label": "fancy kurties"
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -66.91,
  "pitch": 0
 },
 "idleSequence": "this.sequence_0068069E_16F8_65B7_41B3_82EB7EBEFAB1",
 "class": "PanoramaCamera",
 "id": "camera_0068669E_16F8_65B7_41B1_8DB7248B4A08",
 "initialSequence": "this.sequence_0068069E_16F8_65B7_41B3_82EB7EBEFAB1"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.23,
  "pitch": 0
 },
 "idleSequence": "this.sequence_0216A46C_16F8_649B_419C_37DE85F707F0",
 "class": "PanoramaCamera",
 "id": "camera_0216846C_16F8_649B_41B0_03409E9881E0",
 "initialSequence": "this.sequence_0216A46C_16F8_649B_419C_37DE85F707F0"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.64,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_05D3122A_16F8_5C9E_41B2_4DC3CFAC8987",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -147.49,
  "pitch": 0
 },
 "idleSequence": "this.sequence_0078068E_16F8_6597_41B6_32EF6D22A915",
 "class": "PanoramaCamera",
 "id": "camera_0078768E_16F8_6597_41A2_197E4D76A836",
 "initialSequence": "this.sequence_0078068E_16F8_6597_41B6_32EF6D22A915"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_t.jpg",
 "label": "R0010148_20210803110522",
 "id": "panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D",
 "hfov": 360,
 "overlays": [
  "this.panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0",
  "this.overlay_01C039BB_11FC_8084_419D_309D9C0B0014"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.81,
   "class": "AdjacentPanorama",
   "yaw": 2.95,
   "panorama": "this.panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -19.03,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_056542C6_16F8_5D97_41A6_0CB0F1874AC7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "audio": {
  "mp3Url": "media/audio_0D61F785_1225_808C_41A0_DCA2027278D6.mp3",
  "oggUrl": "media/audio_0D61F785_1225_808C_41A0_DCA2027278D6.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_0D61F785_1225_808C_41A0_DCA2027278D6",
 "autoplay": true,
 "data": {
  "label": "Junsuit"
 }
},
{
 "audio": {
  "mp3Url": "media/audio_1957831D_02AC_B4DD_4183_6CF1411B69E4.mp3",
  "oggUrl": "media/audio_1957831D_02AC_B4DD_4183_6CF1411B69E4.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_1957831D_02AC_B4DD_4183_6CF1411B69E4",
 "autoplay": true,
 "data": {
  "label": "1627839405677-voicemaker.in-speech"
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_5_t.jpg",
 "id": "album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_5",
 "width": 5472,
 "label": "_21I9911",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_5.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 3648
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.22,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0EA6D0D2_16F8_5D8F_41B2_69C3F8913D38",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.71,
  "pitch": 0
 },
 "idleSequence": "this.sequence_00D44621_16F8_648D_41A2_110D7C452D88",
 "class": "PanoramaCamera",
 "id": "camera_00D5B621_16F8_648D_41B3_82590D5E9A0F",
 "initialSequence": "this.sequence_00D44621_16F8_648D_41A2_110D7C452D88"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -56.28,
  "pitch": 0
 },
 "idleSequence": "this.sequence_02C30391_16F8_638D_4197_BDC8DACEE0AA",
 "class": "PanoramaCamera",
 "id": "camera_02C37391_16F8_638D_4183_BF373088A95D",
 "initialSequence": "this.sequence_02C30391_16F8_638D_4197_BDC8DACEE0AA"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1AC6E079_1493_8EFB_41A6_7111098FAF9A_t.jpg",
 "id": "photo_1AC6E079_1493_8EFB_41A6_7111098FAF9A",
 "width": 3600,
 "label": "9663",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1AC6E079_1493_8EFB_41A6_7111098FAF9A.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_t.jpg",
 "label": "R0010154_20210803111752",
 "id": "panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64",
 "hfov": 360,
 "overlays": [
  "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_tcap0",
  "this.overlay_077FC8D6_11E4_808C_4199_6BB463F61957",
  "this.overlay_0634B2DF_11E5_80BC_41A5_0318BFD352A0",
  "this.overlay_08CBB5AD_1224_809C_41A4_70A289FABDA9",
  "this.overlay_0DF5C7C2_1225_8084_41A6_0A1B822D9C91",
  "this.overlay_0D49CA63_1225_8384_415D_2FFDEB2A2504",
  "this.overlay_0D545714_1224_818C_4151_9C2002397920",
  "this.overlay_0D041195_1223_808C_41A9_052E6D7D4629",
  "this.overlay_0D0B0BF4_125C_808C_41A7_7BB2A0348681"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.78,
   "class": "AdjacentPanorama",
   "yaw": 1.44,
   "panorama": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4",
   "distance": 1
  },
  {
   "backwardYaw": 179.78,
   "class": "AdjacentPanorama",
   "yaw": -35.82,
   "panorama": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4",
   "distance": 1
  },
  {
   "backwardYaw": 179.78,
   "class": "AdjacentPanorama",
   "yaw": -20,
   "panorama": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4",
   "distance": 1
  },
  {
   "backwardYaw": 179.78,
   "class": "AdjacentPanorama",
   "yaw": 20.26,
   "panorama": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4",
   "distance": 1
  },
  {
   "backwardYaw": -37.5,
   "class": "AdjacentPanorama",
   "yaw": 160.97,
   "panorama": "this.panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8",
   "distance": 1
  },
  {
   "backwardYaw": 88.59,
   "class": "AdjacentPanorama",
   "yaw": -174.41,
   "panorama": "this.panorama_1D497973_11E5_8184_41AF_226E330DF2EB",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 112.68,
  "pitch": 0
 },
 "idleSequence": "this.sequence_009BE66F_16F8_6495_41B3_8B2506C597DF",
 "class": "PanoramaCamera",
 "id": "camera_009BD66F_16F8_6495_419B_3703D2E5228A",
 "initialSequence": "this.sequence_009BE66F_16F8_6495_41B3_8B2506C597DF"
},
{
 "audio": {
  "mp3Url": "media/audio_0340A3BC_1232_90BD_41A7_3AB3C34F341D.mp3",
  "oggUrl": "media/audio_0340A3BC_1232_90BD_41A7_3AB3C34F341D.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_0340A3BC_1232_90BD_41A7_3AB3C34F341D",
 "autoplay": true,
 "data": {
  "label": "leggings"
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.07,
  "pitch": 0
 },
 "idleSequence": "this.sequence_00F7C602_16F8_648F_419D_32E5D242013A",
 "class": "PanoramaCamera",
 "id": "camera_00F71602_16F8_648F_4188_9F207E66CBAC",
 "initialSequence": "this.sequence_00F7C602_16F8_648F_419D_32E5D242013A"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_t.jpg",
 "label": "DOOR 3",
 "id": "panorama_1965B780_0192_78A3_4153_B33293D5EF40",
 "hfov": 360,
 "overlays": [
  "this.overlay_1AC210EA_01F2_1867_415C_7515F29FA13B",
  "this.panorama_1965B780_0192_78A3_4153_B33293D5EF40_tcap0"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 13.24,
   "class": "AdjacentPanorama",
   "yaw": 123.52,
   "panorama": "this.panorama_F662819B_FDAE_2E97_41D7_1583DFA38698",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.05,
  "pitch": 0
 },
 "idleSequence": "this.sequence_0416D769_16F8_649D_41A1_F1E886B80C12",
 "class": "PanoramaCamera",
 "id": "camera_0416C769_16F8_649D_41B5_E22755DA6340",
 "initialSequence": "this.sequence_0416D769_16F8_649D_41A1_F1E886B80C12"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.22,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_02E90372_16F8_5C8F_41B6_281765EAD87A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "audio": {
  "mp3Url": "media/audio_1906CADF_029D_955C_4172_0172B5E377D2.mp3",
  "oggUrl": "media/audio_1906CADF_029D_955C_4172_0172B5E377D2.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_1906CADF_029D_955C_4172_0172B5E377D2",
 "autoplay": true,
 "data": {
  "label": "1627839606303-voicemaker.in-speech"
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_t.jpg",
 "label": "R0010149_20210803110642",
 "id": "panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD",
 "hfov": 360,
 "overlays": [
  "this.panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_tcap0",
  "this.overlay_0149FEFA_11FF_8084_419E_996B76BAC3B5",
  "this.overlay_006EC4B3_11FC_8084_4187_89513FC93C9D"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -178.43,
   "class": "AdjacentPanorama",
   "yaw": -4.09,
   "panorama": "this.panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3",
   "distance": 1
  },
  {
   "backwardYaw": 2.95,
   "class": "AdjacentPanorama",
   "yaw": 179.81,
   "panorama": "this.panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.67,
  "pitch": 0
 },
 "idleSequence": "this.sequence_02DCB381_16F8_638D_41B3_4E22BF347753",
 "class": "PanoramaCamera",
 "id": "camera_02DC9381_16F8_638D_41A9_770592D4974C",
 "initialSequence": "this.sequence_02DCB381_16F8_638D_41B3_4E22BF347753"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 149.39,
  "pitch": 0
 },
 "idleSequence": "this.sequence_0423D1BC_16F8_5FFB_4182_4D297608CA4E",
 "class": "PanoramaCamera",
 "id": "camera_0423C1BC_16F8_5FFB_4191_D0E3C4C5091C",
 "initialSequence": "this.sequence_0423D1BC_16F8_5FFB_4182_4D297608CA4E"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_t.jpg",
 "label": "R0010152_20210803111504",
 "id": "panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_tcap0",
  "this.overlay_0475176C_11ED_819C_41B0_BF02A8E594F0",
  "this.overlay_07D6C685_11EC_808C_4174_B5AB384F2F01",
  "this.overlay_0769ABD6_11EC_808C_41AD_87147CFC58C6",
  "this.overlay_06B9E6F3_11E3_8084_41A3_205C6098AAD5",
  "this.overlay_0D900967_122C_818C_41A9_DB7AFC6CD027",
  "this.overlay_0D5C6CB3_122D_8084_4194_0F6F4DA1A857",
  "this.overlay_0D50C3CB_122F_8084_41A7_10E24E70AE82",
  "this.overlay_0D5CD3CA_122C_8084_41A3_8A7E9B0389CB",
  "this.overlay_0D5F6BF9_122C_8084_418F_26D525FDB022",
  "this.overlay_0D4E2A6D_1225_839C_419A_D1A877676320",
  "this.overlay_0D4AC9E2_1225_8084_4182_95C38505158D",
  "this.overlay_0D4B2333_1227_8184_41B1_1D5427E84A21",
  "this.overlay_0D48DECA_1224_8084_419F_6B1A5D0A746C",
  "this.overlay_3268B011_126D_7F85_419A_C444A8FEC5FE"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4"
  },
  {
   "backwardYaw": -4.84,
   "class": "AdjacentPanorama",
   "yaw": -178.69,
   "panorama": "this.panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8",
   "distance": 1
  },
  {
   "backwardYaw": -171.55,
   "class": "AdjacentPanorama",
   "yaw": 92.13,
   "panorama": "this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F",
   "distance": 1
  },
  {
   "backwardYaw": -171.55,
   "class": "AdjacentPanorama",
   "yaw": 97.76,
   "panorama": "this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F",
   "distance": 1
  },
  {
   "backwardYaw": -171.55,
   "class": "AdjacentPanorama",
   "yaw": 32.52,
   "panorama": "this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF"
  },
  {
   "backwardYaw": 165.71,
   "class": "AdjacentPanorama",
   "yaw": -105.33,
   "panorama": "this.panorama_1D497973_11E5_8184_41AF_226E330DF2EB",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -19.03,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_056F52D5_16F8_5DB5_41B2_C12AECE7298E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_t.jpg",
 "label": "R0010132_20210731151800",
 "id": "panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F",
 "hfov": 360,
 "overlays": [
  "this.overlay_EBF01D94_FD9E_1690_41D8_DBDE4F2EFEA2",
  "this.overlay_EA984735_FDE2_1393_41ED_98EA624198C3",
  "this.overlay_EA366879_FDE2_3D93_41BB_610137D2DF27",
  "this.overlay_E79DF8E5_FDE6_1EB3_41E3_5FA942C45F0A",
  "this.overlay_23250E7D_0196_085D_417D_B092D2082837",
  "this.overlay_236F3149_0192_79A5_4160_C9758738C0DA",
  "this.overlay_2363DC69_0192_0865_4165_97B38735E908",
  "this.overlay_22C9A7C6_018E_38AF_4170_4C25EA4333D7",
  "this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_tcap0",
  "this.overlay_089E1843_122E_9FCB_4172_12E7AA10BF04"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.29,
   "class": "AdjacentPanorama",
   "yaw": -87.89,
   "panorama": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF",
   "distance": 1
  },
  {
   "backwardYaw": 0.29,
   "class": "AdjacentPanorama",
   "yaw": -54.37,
   "panorama": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF",
   "distance": 1
  },
  {
   "backwardYaw": 0.29,
   "class": "AdjacentPanorama",
   "yaw": -70.49,
   "panorama": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF",
   "distance": 1
  },
  {
   "backwardYaw": 0.29,
   "class": "AdjacentPanorama",
   "yaw": -99.82,
   "panorama": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF",
   "distance": 1
  },
  {
   "backwardYaw": 45.65,
   "class": "AdjacentPanorama",
   "yaw": 143.23,
   "panorama": "this.panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1D497973_11E5_8184_41AF_226E330DF2EB"
  },
  {
   "backwardYaw": 92.13,
   "class": "AdjacentPanorama",
   "yaw": -171.55,
   "panorama": "this.panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1ACF6073_1492_8E0F_41B2_20219F7D54F9_t.jpg",
 "id": "photo_1ACF6073_1492_8E0F_41B2_20219F7D54F9",
 "width": 3600,
 "label": "3058",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1ACF6073_1492_8E0F_41B2_20219F7D54F9.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.35,
  "pitch": 0
 },
 "idleSequence": "this.sequence_008BE67F_16F8_6575_4177_0C011648ED1E",
 "class": "PanoramaCamera",
 "id": "camera_008B367F_16F8_6575_41B3_E3F099F54193",
 "initialSequence": "this.sequence_008BE67F_16F8_6575_4177_0C011648ED1E"
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_camera",
   "media": "this.panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_camera",
   "media": "this.panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_camera",
   "media": "this.panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_camera",
   "media": "this.panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1D497973_11E5_8184_41AF_226E330DF2EB_camera",
   "media": "this.panorama_1D497973_11E5_8184_41AF_226E330DF2EB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_camera",
   "media": "this.panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_camera",
   "media": "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_camera",
   "media": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_camera",
   "media": "this.panorama_F662819B_FDAE_2E97_41D7_1583DFA38698",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_camera",
   "media": "this.panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_camera",
   "media": "this.panorama_F6614504_FDAE_1771_41C6_7309CCD9F415",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_camera",
   "media": "this.panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_camera",
   "media": "this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_camera",
   "media": "this.panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_camera",
   "media": "this.panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_camera",
   "media": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_camera",
   "media": "this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_camera",
   "media": "this.panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_camera",
   "media": "this.panorama_1B9E615B_0192_39A5_4153_2594C1C572D3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_camera",
   "media": "this.panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1965B780_0192_78A3_4153_B33293D5EF40_camera",
   "media": "this.panorama_1965B780_0192_78A3_4153_B33293D5EF40",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1954F328_0192_19E3_414B_FB5AF50E9250_camera",
   "media": "this.panorama_1954F328_0192_19E3_414B_FB5AF50E9250",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_camera",
   "media": "this.panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_camera",
   "media": "this.panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_19647650_0192_1BA3_4172_D0D86AA39F62_camera",
   "media": "this.panorama_19647650_0192_1BA3_4172_D0D86AA39F62",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_19544208_0192_FBA3_4174_2268217B47E4_camera",
   "media": "this.panorama_19544208_0192_FBA3_4174_2268217B47E4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_214ECF7C_01F2_0862_415E_590BFF465366_camera",
   "media": "this.panorama_214ECF7C_01F2_0862_415E_590BFF465366",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_camera",
   "media": "this.panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "media": "this.album_2130F603_12F2_9344_41A7_9EA4ABDA16CC",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "media": "this.video_063F3173_14B6_8E0E_41B1_4F23BFCB205A",
   "end": "this.trigger('tourEnded')",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 29, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 29)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 29, 0)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ]
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1ADD88CC_1492_9E19_41B2_A9C0F78548A4_t.jpg",
 "id": "photo_1ADD88CC_1492_9E19_41B2_A9C0F78548A4",
 "width": 3600,
 "label": "3035",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1ADD88CC_1492_9E19_41B2_A9C0F78548A4.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1AC28752_1492_B20E_41A4_5CAC301CBD83_t.jpg",
 "id": "photo_1AC28752_1492_B20E_41A4_5CAC301CBD83",
 "width": 3600,
 "label": "3037",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1AC28752_1492_B20E_41A4_5CAC301CBD83.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 7.7,
  "pitch": 0
 },
 "idleSequence": "this.sequence_0407A1DB_16F8_5FBD_41AC_19612A951F20",
 "class": "PanoramaCamera",
 "id": "camera_040791DB_16F8_5FBD_4194_61F1436479C8",
 "initialSequence": "this.sequence_0407A1DB_16F8_5FBD_41AC_19612A951F20"
},
{
 "audio": {
  "mp3Url": "media/audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6.mp3",
  "oggUrl": "media/audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6",
 "autoplay": true,
 "data": {
  "label": "1627839353904-voicemaker.in-speech"
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1AC2C76E_1493_B216_4177_91526524CDDC_t.jpg",
 "id": "photo_1AC2C76E_1493_B216_4177_91526524CDDC",
 "width": 3600,
 "label": "9667",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1AC2C76E_1493_B216_4177_91526524CDDC.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1AC0067B_1492_92FE_41AC_EBA977108E89_t.jpg",
 "id": "photo_1AC0067B_1492_92FE_41AC_EBA977108E89",
 "width": 3600,
 "label": "3061",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1AC0067B_1492_92FE_41AC_EBA977108E89.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_t.jpg",
 "label": "DOOR 6",
 "id": "panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA",
 "hfov": 360,
 "overlays": [
  "this.overlay_1C71144E_01F2_1FBF_4169_B4228C41F650",
  "this.panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_tcap0"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -26,
   "class": "AdjacentPanorama",
   "yaw": 123.72,
   "panorama": "this.panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1BB7442D_1491_961B_41B1_93F866F4EB75_t.jpg",
 "id": "photo_1BB7442D_1491_961B_41B1_93F866F4EB75",
 "width": 3600,
 "label": "3029",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1BB7442D_1491_961B_41B1_93F866F4EB75.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -55.53,
  "pitch": 0
 },
 "idleSequence": "this.sequence_02A583B0_16F8_638B_41A1_08B1E45E2150",
 "class": "PanoramaCamera",
 "id": "camera_02A5F3B0_16F8_638B_41B2_24A6D07C0293",
 "initialSequence": "this.sequence_02A583B0_16F8_638B_41A1_08B1E45E2150"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_t.png",
 "playList": "this.album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_AlbumPlayList",
 "label": "Photo Album _21I9710",
 "id": "album_2130F603_12F2_9344_41A7_9EA4ABDA16CC",
 "class": "PhotoAlbum"
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1AC3EBB9_1493_727B_416A_744941C2538A_t.jpg",
 "id": "photo_1AC3EBB9_1493_727B_416A_744941C2538A",
 "width": 3600,
 "label": "9659",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1AC3EBB9_1493_727B_416A_744941C2538A.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -56.97,
  "pitch": 0
 },
 "idleSequence": "this.sequence_043B919D_16F8_5FB5_41A6_0B0BA3DAE33F",
 "class": "PanoramaCamera",
 "id": "camera_043B819D_16F8_5FB5_41AF_F5C273931504",
 "initialSequence": "this.sequence_043B919D_16F8_5FB5_41A6_0B0BA3DAE33F"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1ADA256B_1492_961E_41A4_0F1D991F2D84_t.jpg",
 "id": "photo_1ADA256B_1492_961E_41A4_0F1D991F2D84",
 "width": 3600,
 "label": "3052",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1ADA256B_1492_961E_41A4_0F1D991F2D84.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.63,
  "pitch": 0
 },
 "idleSequence": "this.sequence_03997566_16F8_6497_4187_2D20536D4F75",
 "class": "PanoramaCamera",
 "id": "camera_03995566_16F8_6497_41B2_5EAE3F990CDD",
 "initialSequence": "this.sequence_03997566_16F8_6497_4187_2D20536D4F75"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -36.77,
  "pitch": 0
 },
 "idleSequence": "this.sequence_058DC2A7_16F8_5D96_41B2_DC7BE59E63D8",
 "class": "PanoramaCamera",
 "id": "camera_058D22A7_16F8_5D96_4195_36470531E46C",
 "initialSequence": "this.sequence_058DC2A7_16F8_5D96_41B2_DC7BE59E63D8"
},
{
 "class": "PlayList",
 "id": "playList_0150E045_16F8_5C95_419A_17C6FC933161",
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_0150E045_16F8_5C95_419A_17C6FC933161, 0)",
   "media": "this.album_2130F603_12F2_9344_41A7_9EA4ABDA16CC",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer"
  }
 ]
},
{
 "audio": {
  "mp3Url": "media/audio_19106DA8_029F_AFE3_4163_D1D79957A876.mp3",
  "oggUrl": "media/audio_19106DA8_029F_AFE3_4163_D1D79957A876.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_19106DA8_029F_AFE3_4163_D1D79957A876",
 "autoplay": true,
 "data": {
  "label": "1627839630511-voicemaker.in-speech"
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1AC384B4_1493_7609_41B0_ACA55612D884_t.jpg",
 "id": "photo_1AC384B4_1493_7609_41B0_ACA55612D884",
 "width": 3600,
 "label": "9657",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1AC384B4_1493_7609_41B0_ACA55612D884.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "playList_0122A064_16F8_5C8B_41B0_490D9B66A44B",
 "items": [
  {
   "media": "this.video_CF23C4DD_FEA6_3693_41DB_17E139ED633C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0122A064_16F8_5C8B_41B0_490D9B66A44B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0122A064_16F8_5C8B_41B0_490D9B66A44B, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -56.48,
  "pitch": 0
 },
 "idleSequence": "this.sequence_05B08258_16F8_5CBB_4169_8680E9A81718",
 "class": "PanoramaCamera",
 "id": "camera_05B0F258_16F8_5CBB_41B1_293706A5D9D0",
 "initialSequence": "this.sequence_05B08258_16F8_5CBB_4169_8680E9A81718"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_02E57362_16F8_5C8F_41B3_BFA135BB8C93",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -56.67,
  "pitch": 0
 },
 "idleSequence": "this.sequence_02B6B3A0_16F8_638B_418A_FFE2C7CEB98E",
 "class": "PanoramaCamera",
 "id": "camera_02B6A3A0_16F8_638B_417F_4E5DBF10A63C",
 "initialSequence": "this.sequence_02B6B3A0_16F8_638B_418A_FFE2C7CEB98E"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -134.35,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00BA9650_16F8_648B_418F_C9BD2410EEAB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1954F328_0192_19E3_414B_FB5AF50E9250_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.56,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_032375D3_16F8_678D_419A_8EE3C924D17A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_19544208_0192_FBA3_4174_2268217B47E4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1AD8E8D2_1492_9E09_41B4_781009E6C397_t.jpg",
 "id": "photo_1AD8E8D2_1492_9E09_41B4_781009E6C397",
 "width": 3600,
 "label": "3057",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1AD8E8D2_1492_9E09_41B4_781009E6C397.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_08F4FCCB_1252_F0DB_41A8_3F3172E1A03F_0_0.jpg",
   "width": 2008,
   "class": "ImageResourceLevel",
   "height": 2464
  },
  {
   "url": "media/popup_08F4FCCB_1252_F0DB_41A8_3F3172E1A03F_0_1.jpg",
   "width": 1668,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_08F4FCCB_1252_F0DB_41A8_3F3172E1A03F_0_2.jpg",
   "width": 834,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_08F4FCCB_1252_F0DB_41A8_3F3172E1A03F_0_3.jpg",
   "width": 417,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_0B07B414_1253_774D_4195_8336D8833EA4"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_1_t.jpg",
 "id": "album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_1",
 "width": 5472,
 "label": "_21I9786",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_1.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 3648
},
{
 "buttonCardboardView": [
  "this.IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "viewerArea": "this.MainViewer",
 "buttonToggleHotspots": [
  "this.IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96"
 ],
 "buttonToggleGyroscope": [
  "this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
 ],
 "mouseControlMode": "drag_acceleration",
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 28.8,
  "pitch": 0
 },
 "idleSequence": "this.sequence_03D544D9_16F8_65BD_4161_367CAF0293F3",
 "class": "PanoramaCamera",
 "id": "camera_03EAB4D9_16F8_65BD_4186_A71662189959",
 "initialSequence": "this.sequence_03D544D9_16F8_65BD_4161_367CAF0293F3"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_3_t.jpg",
 "id": "album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_3",
 "width": 5472,
 "label": "_21I9825",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_3.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 3648
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_19647650_0192_1BA3_4172_D0D86AA39F62_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "audio": {
  "mp3Url": "media/audio_1E7EB526_029C_9CEF_416D_93BA8BC30DA1.mp3",
  "oggUrl": "media/audio_1E7EB526_029C_9CEF_416D_93BA8BC30DA1.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_1E7EB526_029C_9CEF_416D_93BA8BC30DA1",
 "autoplay": true,
 "data": {
  "label": "1627839657388-voicemaker.in-speech"
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -56.31,
  "pitch": 0
 },
 "idleSequence": "this.sequence_05BA0268_16F8_5C9B_41A1_DF97EE569501",
 "class": "PanoramaCamera",
 "id": "camera_05BA6268_16F8_5C9B_41A3_0CE3CFBBCF2E",
 "initialSequence": "this.sequence_05BA0268_16F8_5C9B_41A1_DF97EE569501"
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1BD79BAF_1491_9217_41A5_93340E2C2E43_t.jpg",
 "id": "photo_1BD79BAF_1491_9217_41A5_93340E2C2E43",
 "width": 3600,
 "label": "3030",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1BD79BAF_1491_9217_41A5_93340E2C2E43.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.71,
  "pitch": 0
 },
 "idleSequence": "this.sequence_00E7F611_16F8_648D_41B5_51940BD53652",
 "class": "PanoramaCamera",
 "id": "camera_00E7E611_16F8_648D_4142_0C32923C5F39",
 "initialSequence": "this.sequence_00E7F611_16F8_648D_41B5_51940BD53652"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 5.59,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_036D7594_16F8_678B_41AE_CB9486F537EE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -56.77,
  "pitch": 0
 },
 "idleSequence": "this.sequence_05CF9249_16F8_5C9D_41B2_0A9B2F728FBA",
 "class": "PanoramaCamera",
 "id": "camera_05CF8249_16F8_5C9D_41B1_2204A53E8D69",
 "initialSequence": "this.sequence_05CF9249_16F8_5C9D_41B2_0A9B2F728FBA"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -131.48,
  "pitch": 0
 },
 "idleSequence": "this.sequence_004916BD_16F8_65F5_41B0_54E91640E084",
 "class": "PanoramaCamera",
 "id": "camera_004906BD_16F8_65F5_41B2_1A276822B72D",
 "initialSequence": "this.sequence_004916BD_16F8_65F5_41B0_54E91640E084"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_t.jpg",
 "label": "DOOR 5",
 "id": "panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC",
 "hfov": 360,
 "overlays": [
  "this.overlay_1C5D069F_01F2_18DE_416B_973D073ADD3E",
  "this.panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_tcap0"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -45.35,
   "class": "AdjacentPanorama",
   "yaw": 124.47,
   "panorama": "this.panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1ACE62D3_1491_720F_41B0_10C72A894A4B_t.jpg",
 "id": "photo_1ACE62D3_1491_720F_41B0_10C72A894A4B",
 "width": 3600,
 "label": "3031",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1ACE62D3_1491_720F_41B0_10C72A894A4B.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -123.44,
  "pitch": 0
 },
 "idleSequence": "this.sequence_03A92546_16F8_6497_4199_FA22D394F600",
 "class": "PanoramaCamera",
 "id": "camera_03A90546_16F8_6497_41A3_917FC1E22736",
 "initialSequence": "this.sequence_03A92546_16F8_6497_4199_FA22D394F600"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.31,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_054E8304_16F8_5C8B_41B1_5741BE0CE169",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 92.11,
  "pitch": 0
 },
 "idleSequence": "this.sequence_05F077C7_16F8_6395_4188_E023A0177C1E",
 "class": "PanoramaCamera",
 "id": "camera_05F067C7_16F8_6395_41B4_D9DD376817DF",
 "initialSequence": "this.sequence_05F077C7_16F8_6395_4188_E023A0177C1E"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.64,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_05E7420A_16F8_5C9F_41A0_4AB65170E555",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.93,
  "pitch": 0
 },
 "idleSequence": "this.sequence_029843CF_16F8_6395_4174_9F7A51801D60",
 "class": "PanoramaCamera",
 "id": "camera_0299A3CF_16F8_6395_41AC_FA037B233CDD",
 "initialSequence": "this.sequence_029843CF_16F8_6395_4174_9F7A51801D60"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 92.11,
  "pitch": 0
 },
 "idleSequence": "this.sequence_040B77B7_16F8_63F5_41AC_42F40D6A98B2",
 "class": "PanoramaCamera",
 "id": "camera_040B67B7_16F8_63F5_41AB_C7A0D5D04543",
 "initialSequence": "this.sequence_040B77B7_16F8_63F5_41AC_42F40D6A98B2"
},
{
 "class": "Video",
 "thumbnailUrl": "media/video_063F3173_14B6_8E0E_41B1_4F23BFCB205A_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1920,
 "label": "HD",
 "loop": false,
 "id": "video_063F3173_14B6_8E0E_41B1_4F23BFCB205A",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_063F3173_14B6_8E0E_41B1_4F23BFCB205A.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -24.21,
  "pitch": 0
 },
 "idleSequence": "this.sequence_03DBC4F8_16F8_657B_4174_1AB7E6E11DB3",
 "class": "PanoramaCamera",
 "id": "camera_03DB34F8_16F8_657B_4174_1C58324DB6A3",
 "initialSequence": "this.sequence_03DBC4F8_16F8_657B_4174_1AB7E6E11DB3"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_t.jpg",
 "label": "DOOR 1",
 "id": "panorama_1B9E615B_0192_39A5_4153_2594C1C572D3",
 "hfov": 360,
 "overlays": [
  "this.overlay_186D1445_018E_1FAD_416D_C2314FE82AF4",
  "this.panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_tcap0"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -28.44,
   "class": "AdjacentPanorama",
   "yaw": 122.04,
   "panorama": "this.panorama_F662819B_FDAE_2E97_41D7_1583DFA38698",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1AC271EC_1492_8E1A_41AF_9EFF191CCF40_t.jpg",
 "id": "photo_1AC271EC_1492_8E1A_41AF_9EFF191CCF40",
 "width": 3600,
 "label": "3056",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_1AC271EC_1492_8E1A_41AF_9EFF191CCF40.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 5400
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_4_t.jpg",
 "id": "album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_4",
 "width": 5472,
 "label": "_21I9869",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_4.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 3648
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -24.21,
  "pitch": 0
 },
 "idleSequence": "this.sequence_03CB7508_16F8_649B_412E_58CDAB314840",
 "class": "PanoramaCamera",
 "id": "camera_03CB5508_16F8_649B_4153_0F26369435A0",
 "initialSequence": "this.sequence_03CB7508_16F8_649B_412E_58CDAB314840"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_382464BA_12F5_F744_419E_BAB4A1A91204_t.jpg",
 "id": "photo_382464BA_12F5_F744_419E_BAB4A1A91204",
 "width": 5472,
 "label": "02",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_382464BA_12F5_F744_419E_BAB4A1A91204.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 3648
},
{
 "class": "PlayList",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "items": [
  {
   "camera": "this.panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_camera",
   "media": "this.panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_camera",
   "media": "this.panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_camera",
   "media": "this.panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_camera",
   "media": "this.panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1D497973_11E5_8184_41AF_226E330DF2EB_camera",
   "media": "this.panorama_1D497973_11E5_8184_41AF_226E330DF2EB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_camera",
   "media": "this.panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_camera",
   "media": "this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_camera",
   "media": "this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_camera",
   "media": "this.panorama_F662819B_FDAE_2E97_41D7_1583DFA38698",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_camera",
   "media": "this.panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_camera",
   "media": "this.panorama_F6614504_FDAE_1771_41C6_7309CCD9F415",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_camera",
   "media": "this.panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_camera",
   "media": "this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_camera",
   "media": "this.panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_camera",
   "media": "this.panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_camera",
   "media": "this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_camera",
   "media": "this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_camera",
   "media": "this.panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_camera",
   "media": "this.panorama_1B9E615B_0192_39A5_4153_2594C1C572D3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_camera",
   "media": "this.panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1965B780_0192_78A3_4153_B33293D5EF40_camera",
   "media": "this.panorama_1965B780_0192_78A3_4153_B33293D5EF40",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1954F328_0192_19E3_414B_FB5AF50E9250_camera",
   "media": "this.panorama_1954F328_0192_19E3_414B_FB5AF50E9250",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_camera",
   "media": "this.panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_camera",
   "media": "this.panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_19647650_0192_1BA3_4172_D0D86AA39F62_camera",
   "media": "this.panorama_19647650_0192_1BA3_4172_D0D86AA39F62",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_19544208_0192_FBA3_4174_2268217B47E4_camera",
   "media": "this.panorama_19544208_0192_FBA3_4174_2268217B47E4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_214ECF7C_01F2_0862_415E_590BFF465366_camera",
   "media": "this.panorama_214ECF7C_01F2_0862_415E_590BFF465366",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_camera",
   "media": "this.panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "media": "this.album_2130F603_12F2_9344_41A7_9EA4ABDA16CC",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "media": "this.video_063F3173_14B6_8E0E_41B1_4F23BFCB205A",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 0)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.71,
  "pitch": 0
 },
 "idleSequence": "this.sequence_00B54640_16F8_648B_41AF_2EEF2EC6A629",
 "class": "PanoramaCamera",
 "id": "camera_00CAB640_16F8_648B_41AA_93808D09DADD",
 "initialSequence": "this.sequence_00B54640_16F8_648B_41AF_2EEF2EC6A629"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_t.jpg",
 "label": "DOOR 8",
 "id": "panorama_19544208_0192_FBA3_4174_2268217B47E4",
 "hfov": 360,
 "overlays": [
  "this.overlay_1F9D1C37_01FE_0FEE_416C_C81D311D2871",
  "this.panorama_19544208_0192_FBA3_4174_2268217B47E4_tcap0"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 29.13,
   "class": "AdjacentPanorama",
   "yaw": 123.33,
   "panorama": "this.panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.56,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_031155E3_16F8_678D_4199_B7F9BDB846CD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.41,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_043DD19D_16F8_5FB5_41B4_2DCD1E3570F0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -55.65,
  "pitch": 0
 },
 "idleSequence": "this.sequence_042BF1CC_16F8_5F9B_4175_8F9523223768",
 "class": "PanoramaCamera",
 "id": "camera_042BD1CC_16F8_5F9B_41A5_87608484EF38",
 "initialSequence": "this.sequence_042BF1CC_16F8_5F9B_4175_8F9523223768"
},
{
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarBottom": 5,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543"
 ],
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 330,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "class": "Container",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--- LEFT PANEL 2"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": 641,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "backgroundOpacity": 0,
 "width": 550,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": 34,
 "class": "Container",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": 140,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--STICKER"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_BD15DCC8_9478_145B_41E1_35766BBBD98F",
  "this.Container_BD147CC8_9478_145B_41E1_A1505134A3C3"
 ],
 "id": "Container_BD141CC8_9478_145B_41D4_265F47E47DB6",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_BD141CC8_9478_145B_41D4_265F47E47DB6, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "bottom": "0%",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--INFO photo"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "bottom": "0%",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "bottom": "0%",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "bottom": "0%",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "height": "100%"
},
{
 "layout": "absolute",
 "children": [
  "this.Container_BD878AD4_9478_3C4B_41E0_1542ED46C5EC",
  "this.Container_BD84CAD4_9478_3C4B_41DB_EAABF4EA300E"
 ],
 "id": "Container_BD84EAD4_9478_3C4B_41C0_BDBA5096F748",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarColor": "#04A3E1",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_BD84EAD4_9478_3C4B_41C0_BDBA5096F748, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "bottom": "0%",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "paddingBottom": 0,
 "right": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "class": "UIComponent",
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "bottom": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "UIComponent4959"
 },
 "shadow": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "right": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "top": 0,
 "class": "ZoomImage",
 "minWidth": 0,
 "backgroundColor": [],
 "bottom": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "ZoomImage4960"
 },
 "shadow": false,
 "scaleMode": "custom"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "layout": "horizontal",
 "data": {
  "name": "CloseButton4961"
 },
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "iconHeight": 20,
 "paddingBottom": 5,
 "iconWidth": 20,
 "shadowColor": "#000000",
 "right": 10,
 "borderRadius": 0,
 "paddingRight": 5,
 "paddingLeft": 5,
 "borderSize": 0,
 "iconColor": "#000000",
 "minHeight": 0,
 "propagateClick": false,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "top": 10,
 "rollOverIconColor": "#666666",
 "class": "CloseButton",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontSize": "1.29vmin",
 "label": "",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedIconColor": "#888888",
 "fontStyle": "normal",
 "paddingTop": 5,
 "iconBeforeLabel": true,
 "visible": false,
 "iconLineWidth": 5,
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
 "backgroundOpacity": 0,
 "width": 30,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 30,
 "pressedIconURL": "skin/IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Sound"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
 "backgroundOpacity": 0,
 "width": 30,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 30,
 "pressedIconURL": "skin/IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Fullscreen"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A, this.camera_0216846C_16F8_649B_41B0_03409E9881E0); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6076C6_1233_70CC_41A5_8F955289C1BD",
   "yaw": -140.9,
   "pitch": -30.04,
   "distance": 100,
   "hfov": 13.33
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -140.9,
   "hfov": 13.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.04
  }
 ],
 "id": "overlay_DF671C8D_FD9E_1573_41DF_D56C2096CE77",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1, this.camera_0230642D_16F8_6495_41B1_7F4661AE2995); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6056C6_1233_70CC_4174_3EF1491D050E",
   "yaw": 170.37,
   "pitch": -32.3,
   "distance": 100,
   "hfov": 13.02
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.37,
   "hfov": 13.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.3
  }
 ],
 "id": "overlay_DE1C119D_FDA2_6E93_41EF_725FB8CA1571",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_2B43C0B4_03A5_75EC_4147_761C844AB07C).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_2B43C0B4_03A5_75EC_4147_761C844AB07C); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_2B43C0B4_03A5_75EC_4147_761C844AB07C); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1, this.camera_0226C44C_16F8_649B_41B4_41703EB7C513); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 110.66,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_1_HS_2_0.png",
      "width": 292,
      "class": "ImageResourceLevel",
      "height": 372
     }
    ]
   },
   "pitch": -4.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.54
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.66,
   "hfov": 19.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -4.13
  }
 ],
 "id": "overlay_0DA9DD34_02A3_ECEC_4183_415132A934E3",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_2BDC1D9C_03A3_6FA3_4154_10168C771942).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_2BDC1D9C_03A3_6FA3_4154_10168C771942); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_2BDC1D9C_03A3_6FA3_4154_10168C771942); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A, this.camera_0207548B_16F8_659D_41B4_86D193AF3AAF); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -55.18,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_1_HS_3_0.png",
      "width": 312,
      "class": "ImageResourceLevel",
      "height": 410
     }
    ]
   },
   "pitch": -5.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.82
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.18,
   "hfov": 20.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": -5.08
  }
 ],
 "id": "overlay_0C78E54C_02A3_7CA3_4167_56FD61F70054",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_2B9D9F40_03AD_ECA3_4178_9C658E0216F8).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_2B9D9F40_03AD_ECA3_4178_9C658E0216F8); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_2B9D9F40_03AD_ECA3_4178_9C658E0216F8); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -114.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_1_HS_4_0.png",
      "width": 221,
      "class": "ImageResourceLevel",
      "height": 260
     }
    ]
   },
   "pitch": -0.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.86
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -114.74,
   "hfov": 14.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -0.96
  }
 ],
 "id": "overlay_0C49C69E_02A4_FDDF_4157_A3A9D21C7074",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_005916AE_16F8_6597_41A6_954E38752991",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_0408F1EB_16F8_5F9D_41B1_67F20BC07D8E",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_028943DF_16F8_63B5_41B6_859488735228",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_0406F798_16F8_63BB_4186_99BDAC02FF5C",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_026DA3FE_16F8_6377_41A1_E6928123FCC3",
 "restartMovementOnUserInteraction": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759, this.camera_05E647E6_16F8_6397_41AC_742A6CDB5FB3); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6EB6D6_1233_70CC_41A4_6A0AC574194D",
   "yaw": 123.44,
   "pitch": 0.41,
   "distance": 100,
   "hfov": 5.29
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.44,
   "hfov": 5.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.41
  }
 ],
 "id": "overlay_1C313833_01F2_17E5_414C_92AAE9995707",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_19647650_0192_1BA3_4172_D0D86AA39F62_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_041C31CC_16F8_5F9B_419F_DCE8F915AA56",
 "restartMovementOnUserInteraction": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F662819B_FDAE_2E97_41D7_1583DFA38698, this.camera_008B367F_16F8_6575_41B3_E3F099F54193); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6DF6D6_1233_70CC_41B0_2A42CDD74949",
   "yaw": 123.23,
   "pitch": 1.73,
   "distance": 100,
   "hfov": 5.28
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.23,
   "hfov": 5.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.73
  }
 ],
 "id": "overlay_1B8BF08A_01F2_18A7_415B_D204B10B4B2E",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_02F72352_16F8_5C8F_41B1_712D23249A98",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_0420373A_16F8_64FF_4177_63B467A3254A",
 "restartMovementOnUserInteraction": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64, this.camera_032375D3_16F8_678D_419A_8EE3C924D17A); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C7BB6B6_1233_734D_41AF_01D5D8CE40C8",
   "yaw": 179.78,
   "pitch": -21.15,
   "distance": 100,
   "hfov": 13.18
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.78,
   "hfov": 13.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.15
  }
 ],
 "id": "overlay_06E64712_11E4_8187_41AD_0EF1672E0D6E",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F662819B_FDAE_2E97_41D7_1583DFA38698, this.camera_00F71602_16F8_648F_4188_9F207E66CBAC); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C7B66B6_1233_734D_4183_A05BACDBB85F",
   "yaw": -3.36,
   "pitch": -19.39,
   "distance": 100,
   "hfov": 13.33
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.36,
   "hfov": 13.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.39
  }
 ],
 "id": "overlay_0BC96C88_11E7_8083_41AB_70790A9C1FFA",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_0D61F785_1225_808C_41A0_DCA2027278D6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0D61F785_1225_808C_41A0_DCA2027278D6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0D61F785_1225_808C_41A0_DCA2027278D6); }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 85.65,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_1_HS_2_0.png",
      "width": 336,
      "class": "ImageResourceLevel",
      "height": 343
     }
    ]
   },
   "pitch": -11.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.14
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.65,
   "hfov": 22.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.09
  }
 ],
 "id": "overlay_0D9750EA_125D_8087_41AD_9E5C14385C23",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4); }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -93.36,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_1_HS_3_0.png",
      "width": 276,
      "class": "ImageResourceLevel",
      "height": 269
     }
    ]
   },
   "pitch": -4.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.45
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.36,
   "hfov": 18.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.19
  }
 ],
 "id": "overlay_0D0133F3_125C_8084_41AF_9A5D80F6615B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6); }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -47.89,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_1_HS_4_0.png",
      "width": 203,
      "class": "ImageResourceLevel",
      "height": 195
     }
    ]
   },
   "pitch": -2.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.6
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -47.89,
   "hfov": 13.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.22
  }
 ],
 "id": "overlay_0D0274D6_125F_808F_41A1_BB605A0EF975",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64, this.camera_031155E3_16F8_678D_4199_B7F9BDB846CD); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -144.85,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_1_HS_5_0.png",
      "width": 203,
      "class": "ImageResourceLevel",
      "height": 195
     }
    ]
   },
   "pitch": -1.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.65
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.85,
   "hfov": 13.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.33
  }
 ],
 "id": "overlay_0D0582C4_125C_808C_41A7_2235D1DFF90C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64, this.camera_030165F2_16F8_678F_41B2_544A94040BCF); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 158.96,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_1_HS_6_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": -3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.47
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.96,
   "hfov": 11.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3
  }
 ],
 "id": "overlay_0D06FFD5_125D_808C_41B0_E3607CD31FB6",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_0230742D_16F8_6495_41AA_E099D53BE7EE",
 "restartMovementOnUserInteraction": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F662819B_FDAE_2E97_41D7_1583DFA38698, this.camera_0078768E_16F8_6597_41A2_197E4D76A836); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6D76D6_1233_70CC_419B_D82A1EBB626E",
   "yaw": 123.69,
   "pitch": 3.15,
   "distance": 100,
   "hfov": 5.28
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.69,
   "hfov": 5.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.15
  }
 ],
 "id": "overlay_1AE407B2_01F2_18E7_417C_12EB1D26D9EE",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1954F328_0192_19E3_414B_FB5AF50E9250_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_05FE47D7_16F8_63B5_419A_EF926C84832B",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_05AF6278_16F8_5D7B_41B0_4B6FC269B1DE",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_057152B6_16F8_5DF7_41B0_B25382749550",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_02AA13C0_16F8_638B_41AF_9FCCFAA4114B",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_03BB0527_16F8_6495_41B3_8F424F366823",
 "restartMovementOnUserInteraction": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC, this.camera_054E8304_16F8_5C8B_41B1_5741BE0CE169); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C7F96B6_1233_734D_4150_CC8053D37659",
   "yaw": -4.84,
   "pitch": -30.19,
   "distance": 100,
   "hfov": 12.22
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.84,
   "hfov": 12.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.19
  }
 ],
 "id": "overlay_036A2B8D_11FC_809C_4176_6CC7ADDE66ED",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1D497973_11E5_8184_41AF_226E330DF2EB, this.camera_055AA2F5_16F8_5D75_4197_05ADFC111B2F); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C7F76B6_1233_734D_4186_622C782CE735",
   "yaw": -74.68,
   "pitch": -23.41,
   "distance": 100,
   "hfov": 12.97
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -74.68,
   "hfov": 12.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.41
  }
 ],
 "id": "overlay_0376C327_11E4_818C_41AD_83B3E58C5575",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64, this.camera_056542C6_16F8_5D97_41A6_0CB0F1874AC7); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C7F56B6_1233_734D_41B1_F8D0E0CBCB64",
   "yaw": -37.5,
   "pitch": -18.64,
   "distance": 100,
   "hfov": 13.39
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.5,
   "hfov": 13.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.64
  }
 ],
 "id": "overlay_031F4607_11E5_838C_4199_D78A3C656184",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F, this.camera_059BD297_16F8_5DB5_41B1_0FFD1B76FA66); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C7F26B6_1233_734D_4190_8B182939A83B",
   "yaw": 45.65,
   "pitch": -22.15,
   "distance": 100,
   "hfov": 13.09
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 45.65,
   "hfov": 13.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.15
  }
 ],
 "id": "overlay_02B34782_11E4_8084_41A7_08E2DE57BDC1",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3, this.camera_0596E287_16F8_5D95_41B0_5ABD8DBC351B); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C7E06B6_1233_734D_4197_6D4D677941C9",
   "yaw": 179.78,
   "pitch": -37.48,
   "distance": 100,
   "hfov": 11.22
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.78,
   "hfov": 11.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_4_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.48
  }
 ],
 "id": "overlay_08F6D3D9_11E5_8085_41A4_6BB5FFE08EA5",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64, this.camera_056F52D5_16F8_5DB5_41B2_C12AECE7298E); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -42.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_5_0.png",
      "width": 94,
      "class": "ImageResourceLevel",
      "height": 124
     }
    ]
   },
   "pitch": -1.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.35
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -42.58,
   "hfov": 6.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": -1.19
  }
 ],
 "id": "overlay_0BA682DA_11DC_8084_419C_93DCCCD959EE",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -31.86,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_7_0.png",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "pitch": -1.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.47
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -31.86,
   "hfov": 5.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -1.41
  }
 ],
 "id": "overlay_0859AB05_1224_818C_41A9_D3543957C75B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -24.16,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_8_0.png",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ]
   },
   "pitch": -1.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.71
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.16,
   "hfov": 4.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -1.71
  }
 ],
 "id": "overlay_0860C0D4_1224_808C_4174_B5A0E248483C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64, this.camera_055082E5_16F8_5D95_41B5_9247299EEDF7); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -19.13,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_9_0.png",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 110
     }
    ]
   },
   "pitch": -4.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.6
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.13,
   "hfov": 5.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": -4.4
  }
 ],
 "id": "overlay_0E193273_1223_8384_41B0_21101F887C18",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1E7EB526_029C_9CEF_416D_93BA8BC30DA1).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1E7EB526_029C_9CEF_416D_93BA8BC30DA1); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1E7EB526_029C_9CEF_416D_93BA8BC30DA1); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F, this.camera_058D22A7_16F8_5D96_4195_36470531E46C); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 72.6,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_10_0.png",
      "width": 166,
      "class": "ImageResourceLevel",
      "height": 210
     }
    ]
   },
   "pitch": -1.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.15
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 72.6,
   "hfov": 11.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -1.2
  }
 ],
 "id": "overlay_0FDB1337_123D_818C_41A6_EEBA5151A2B4",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_19106DA8_029F_AFE3_4163_D1D79957A876).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_19106DA8_029F_AFE3_4163_D1D79957A876); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_19106DA8_029F_AFE3_4163_D1D79957A876); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 43.52,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_11_0.png",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ]
   },
   "pitch": -1.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.11
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.52,
   "hfov": 7.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "pitch": -1.16
  }
 ],
 "id": "overlay_0FDB35D1_123C_8084_41A2_3C6A40881D52",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1906CADF_029D_955C_4172_0172B5E377D2).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1906CADF_029D_955C_4172_0172B5E377D2); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1906CADF_029D_955C_4172_0172B5E377D2); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 29.71,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_12_0.png",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ]
   },
   "pitch": -0.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.45
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.71,
   "hfov": 5.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "pitch": -0.74
  }
 ],
 "id": "overlay_0C1DF34B_123C_8184_4169_5FB240DB3EB6",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F, this.camera_0576B2B6_16F8_5DF7_41AA_FEE471A61CA9); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "rollOver": "if(this.getGlobalAudio(this.audio_1F0E9AD2_029D_75A4_4143_BA068AFA2D22).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1F0E9AD2_029D_75A4_4143_BA068AFA2D22); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1F0E9AD2_029D_75A4_4143_BA068AFA2D22); }"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 15.31,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_13_0.png",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ]
   },
   "pitch": -4.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.2
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.31,
   "hfov": 6.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 27
     }
    ]
   },
   "pitch": -4.85
  }
 ],
 "id": "overlay_0FDB5268_123D_8384_4198_316148AF6FF7",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_0D61F785_1225_808C_41A0_DCA2027278D6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0D61F785_1225_808C_41A0_DCA2027278D6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0D61F785_1225_808C_41A0_DCA2027278D6); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -11.61,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_14_0.png",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 105
     }
    ]
   },
   "pitch": -3.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.61,
   "hfov": 4.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": -3.58
  }
 ],
 "id": "overlay_0FC93A38_123C_8384_41B1_05B7CD934BF5",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "rollOver": "if(this.getGlobalAudio(this.audio_1F0E9AD2_029D_75A4_4143_BA068AFA2D22).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1F0E9AD2_029D_75A4_4143_BA068AFA2D22); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1F0E9AD2_029D_75A4_4143_BA068AFA2D22); }"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 8.66,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0_HS_15_0.png",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ]
   },
   "pitch": -2.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.27
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.66,
   "hfov": 5.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_0_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": -2.94
  }
 ],
 "id": "overlay_0FDEBF4C_125D_91DD_419B_DCB2227E8640",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_0252B40E_16F8_6497_4193_1EB5DD0CB5B9",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_041C1779_16F8_637D_41A7_F9CA141B62DA",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_0240E41D_16F8_64B5_4172_9E8AB6699E40",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_0425772B_16F8_649D_419B_07F105BD7BF3",
 "restartMovementOnUserInteraction": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F662819B_FDAE_2E97_41D7_1583DFA38698, this.camera_041C7779_16F8_637D_4193_0CFFE5A5A841); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6506C6_1233_70CC_41A6_AC623E7C9ED7",
   "yaw": -67.37,
   "pitch": -24.1,
   "distance": 100,
   "hfov": 12.68
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.37,
   "hfov": 12.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.1
  }
 ],
 "id": "overlay_12D50390_018F_F8A3_4153_B3269510D8D8",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759, this.camera_0406E798_16F8_63BB_41A4_15D2936E4B4E); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C66D6C6_1233_70CC_41A6_8EBB6B7B3CD9",
   "yaw": 76.33,
   "pitch": -23.6,
   "distance": 100,
   "hfov": 12.73
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.33,
   "hfov": 12.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.6
  }
 ],
 "id": "overlay_152BD433_018E_7FE5_416A_6C3F3A466861",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F6614504_FDAE_1771_41C6_7309CCD9F415, this.camera_0418F788_16F8_639B_41B1_FE0FA81E7D49); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C66B6C6_1233_70CC_417A_F36C5D3932E2",
   "yaw": 1.72,
   "pitch": -14.55,
   "distance": 100,
   "hfov": 13.45
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.72,
   "hfov": 13.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.55
  }
 ],
 "id": "overlay_15492808_0192_17A3_4173_1549C794351A",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_19106DA8_029F_AFE3_4163_D1D79957A876).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_19106DA8_029F_AFE3_4163_D1D79957A876); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_19106DA8_029F_AFE3_4163_D1D79957A876); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 138.34,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_3_0.png",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 143
     }
    ]
   },
   "pitch": 0.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.14
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 138.34,
   "hfov": 7.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": 0.74
  }
 ],
 "id": "overlay_22B6188F_01B2_08BD_4161_A9233C0F1786",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1906CADF_029D_955C_4172_0172B5E377D2).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1906CADF_029D_955C_4172_0172B5E377D2); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1906CADF_029D_955C_4172_0172B5E377D2); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 117.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_4_0.png",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 204
     }
    ]
   },
   "pitch": 1.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.2
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 117.17,
   "hfov": 11.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": 1.29
  }
 ],
 "id": "overlay_23475D44_01B2_09A3_416D_4E6F4939D324",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -127,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_5_0.png",
      "width": 129,
      "class": "ImageResourceLevel",
      "height": 198
     }
    ]
   },
   "pitch": 1.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.65
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127,
   "hfov": 8.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 24
     }
    ]
   },
   "pitch": 1.36
  }
 ],
 "id": "overlay_235F9A9F_01B2_08DD_417B_2A7B4C3382C7",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -144.62,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_6_0.png",
      "width": 94,
      "class": "ImageResourceLevel",
      "height": 123
     }
    ]
   },
   "pitch": 1.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.34
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.62,
   "hfov": 6.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": 1.6
  }
 ],
 "id": "overlay_2359BD15_01B2_09AD_417C_1645019F680A",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "rollOver": "if(this.getGlobalAudio(this.audio_180615B5_02A4_9FEC_4186_3DFABCFEB6DE).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_180615B5_02A4_9FEC_4186_3DFABCFEB6DE); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_180615B5_02A4_9FEC_4186_3DFABCFEB6DE); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -139.15,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_7_0.png",
      "width": 249,
      "class": "ImageResourceLevel",
      "height": 248
     }
    ]
   },
   "pitch": -9.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.49
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -139.15,
   "hfov": 16.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.82
  }
 ],
 "id": "overlay_235B581D_01B1_F7DD_4171_CA762604E4CD",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -106.36,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_8_0.png",
      "width": 138,
      "class": "ImageResourceLevel",
      "height": 229
     }
    ]
   },
   "pitch": 0.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.3
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.36,
   "hfov": 9.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ]
   },
   "pitch": 0.57
  }
 ],
 "id": "overlay_235E38B8_01B6_08E3_4128_146A4FCB7A40",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1E7EB526_029C_9CEF_416D_93BA8BC30DA1).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1E7EB526_029C_9CEF_416D_93BA8BC30DA1); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1E7EB526_029C_9CEF_416D_93BA8BC30DA1); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 154.76,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0_HS_9_0.png",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ]
   },
   "pitch": 0.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.12
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.76,
   "hfov": 5.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": 0.92
  }
 ],
 "id": "overlay_23583494_01B6_38A3_417B_795EC0340D9D",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -167.18,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_10_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 121
     }
    ]
   },
   "pitch": -1.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.85
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.18,
   "hfov": 6.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -1.68
  }
 ],
 "id": "overlay_0DB0D383_1264_8084_41A1_83461392A752",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_059BE297_16F8_5DB5_41B3_7525513FDB95",
 "restartMovementOnUserInteraction": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18, this.camera_009BD66F_16F8_6495_419B_3703D2E5228A); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6E36D6_1233_70CC_41A6_782F3CF8ADEE",
   "yaw": 124.35,
   "pitch": 3.27,
   "distance": 100,
   "hfov": 8.24
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 124.35,
   "hfov": 8.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.27
  }
 ],
 "id": "overlay_21965977_01F2_086D_4123_B88257513CCC",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_214ECF7C_01F2_0862_415E_590BFF465366_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A, this.camera_03BB7527_16F8_6495_4199_4C10C0938B3F); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C61C6C6_1233_70CC_41A9_DDBB36674902",
   "yaw": 113.09,
   "pitch": -28.53,
   "distance": 100,
   "hfov": 13.53
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 113.09,
   "hfov": 13.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.53
  }
 ],
 "id": "overlay_DF3DA255_FDA2_6D93_41D5_910FB60585E2",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB, this.camera_03995566_16F8_6497_41B2_5EAE3F990CDD); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6186C6_1233_70CC_4181_2BDE7CBD7CC4",
   "yaw": 164.84,
   "pitch": -32.8,
   "distance": 100,
   "hfov": 12.94
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 164.84,
   "hfov": 12.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.8
  }
 ],
 "id": "overlay_D9F53022_FDA2_6DB0_4184_DFE4CECAE648",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_2B9D9F40_03AD_ECA3_4178_9C658E0216F8).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_2B9D9F40_03AD_ECA3_4178_9C658E0216F8); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_2B9D9F40_03AD_ECA3_4178_9C658E0216F8); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 110.23,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_1_HS_2_0.png",
      "width": 195,
      "class": "ImageResourceLevel",
      "height": 234
     }
    ]
   },
   "pitch": -1.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.1
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.23,
   "hfov": 13.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": -1.34
  }
 ],
 "id": "overlay_0DD069D1_02A5_77A5_4181_55D63307E97F",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_2BDC1D9C_03A3_6FA3_4154_10168C771942).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_2BDC1D9C_03A3_6FA3_4154_10168C771942); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_2BDC1D9C_03A3_6FA3_4154_10168C771942); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A, this.camera_03A90546_16F8_6497_41A3_917FC1E22736); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 156.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_1_HS_3_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 275
     }
    ]
   },
   "pitch": -2.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.85
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.35,
   "hfov": 13.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": -2.57
  }
 ],
 "id": "overlay_0DC4B54E_02A7_7CBC_4183_CE8696B79643",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_2B43C0B4_03A5_75EC_4147_761C844AB07C).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_2B43C0B4_03A5_75EC_4147_761C844AB07C); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_2B43C0B4_03A5_75EC_4147_761C844AB07C); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -123.48,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_1_HS_4_0.png",
      "width": 292,
      "class": "ImageResourceLevel",
      "height": 376
     }
    ]
   },
   "pitch": -6.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.46
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -123.48,
   "hfov": 19.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -6.77
  }
 ],
 "id": "overlay_0D1881EF_02A7_777D_415F_D374558A7974",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF, this.camera_02AA03C0_16F8_638B_41B1_06A4B49777EA); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6C96C6_1233_70CC_41AD_A2C3AD4836FC",
   "yaw": 87.21,
   "pitch": -13.46,
   "distance": 100,
   "hfov": 14.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.21,
   "hfov": 14.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.46
  }
 ],
 "id": "overlay_E6CA44AA_FDFE_16B1_41CB_E7C176A6CEDE",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D, this.camera_02DC9381_16F8_638D_41A9_770592D4974C); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6C76D6_1233_70CC_41A2_8B4D455A4A38",
   "yaw": 172.63,
   "pitch": -28.53,
   "distance": 100,
   "hfov": 13.53
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.63,
   "hfov": 13.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.53
  }
 ],
 "id": "overlay_E1277214_FDE2_6D91_4185_5EC92E592955",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC, this.camera_02A5F3B0_16F8_638B_41B2_24A6D07C0293); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6C46D6_1233_70CC_4194_F2C2514124F8",
   "yaw": -45.35,
   "pitch": -0.76,
   "distance": 100,
   "hfov": 5.29
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -45.35,
   "hfov": 5.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.76
  }
 ],
 "id": "overlay_18E1C2BF_000D_EFC5_4135_2B8A627678B8",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA, this.camera_02C37391_16F8_638D_4183_BF373088A95D); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6C26D6_1233_70CC_41A1_49BFE97C1FFC",
   "yaw": -26,
   "pitch": -1.14,
   "distance": 100,
   "hfov": 5.29
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26,
   "hfov": 5.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.14
  }
 ],
 "id": "overlay_198FC99B_000D_BDCE_415E_DA45824C7F8A",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19647650_0192_1BA3_4172_D0D86AA39F62, this.camera_026D93FE_16F8_6377_41A1_894E6AC3B74D); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6DF6D6_1233_70CC_41A7_C3F234C1069B",
   "yaw": 3.86,
   "pitch": -1.61,
   "distance": 100,
   "hfov": 5.28
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.86,
   "hfov": 5.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.61
  }
 ],
 "id": "overlay_195B9269_000D_6F4A_4163_4615844D45DD",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19544208_0192_FBA3_4174_2268217B47E4, this.camera_02B6A3A0_16F8_638B_417F_4E5DBF10A63C); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6DC6D6_1233_70CC_4153_7A18EB93D80C",
   "yaw": 29.13,
   "pitch": -1.98,
   "distance": 100,
   "hfov": 5.28
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.13,
   "hfov": 5.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.98
  }
 ],
 "id": "overlay_188DE888_000D_5BCA_4159_49D2060CB7C4",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_6_0.png",
      "width": 152,
      "class": "ImageResourceLevel",
      "height": 37
     }
    ]
   },
   "yaw": 29.71,
   "pitch": -5.75,
   "distance": 50,
   "hfov": 10.2
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.71,
   "hfov": 10.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_6_0_map.gif",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.75
  }
 ],
 "id": "overlay_180E8781_0033_75BA_415F_C42D8A3B0FE8",
 "data": {
  "label": "TRIAL ROOM  8"
 },
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_7_0.png",
      "width": 157,
      "class": "ImageResourceLevel",
      "height": 37
     }
    ]
   },
   "yaw": -45.65,
   "pitch": -4.43,
   "distance": 50,
   "hfov": 10.51
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -45.65,
   "hfov": 10.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_7_0_map.gif",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.43
  }
 ],
 "id": "overlay_18446F4D_0033_B54A_4158_772BEC5DDB38",
 "data": {
  "label": "TRIAL ROOM  5"
 },
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_8_0.png",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 36
     }
    ]
   },
   "yaw": -25.11,
   "pitch": -4.87,
   "distance": 50,
   "hfov": 11.21
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.11,
   "hfov": 11.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_8_0_map.gif",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.87
  }
 ],
 "id": "overlay_175DB017_0032_AAC6_4160_5B7C735F842A",
 "data": {
  "label": "TRIAL ROOM  6"
 },
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_9_0.png",
      "width": 157,
      "class": "ImageResourceLevel",
      "height": 37
     }
    ]
   },
   "yaw": 4.14,
   "pitch": -5.28,
   "distance": 50,
   "hfov": 10.52
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.14,
   "hfov": 10.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_9_0_map.gif",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.28
  }
 ],
 "id": "overlay_18783F8F_0032_F5C7_4161_AFDC063DE7F2",
 "data": {
  "label": "TRIAL ROOM  7"
 },
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_000FB5BA_1232_9144_41AA_30BA1960C690).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_000FB5BA_1232_9144_41AA_30BA1960C690); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_000FB5BA_1232_9144_41AA_30BA1960C690); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF, this.camera_0299A3CF_16F8_6395_41AC_FA037B233CDD); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 53.19,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0_HS_10_0.png",
      "width": 164,
      "class": "ImageResourceLevel",
      "height": 224
     }
    ]
   },
   "pitch": 0.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.04
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 53.19,
   "hfov": 11.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": 0.03
  }
 ],
 "id": "overlay_2306A80A_01B6_37A7_4178_89B0761E53FC",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_0418BF47_1236_91CB_41A3_FD629573C667).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0418BF47_1236_91CB_41A3_FD629573C667); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0418BF47_1236_91CB_41A3_FD629573C667); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 96.78,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0_HS_11_0.png",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 136
     }
    ]
   },
   "pitch": -0.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.5
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.78,
   "hfov": 6.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": -0.13
  }
 ],
 "id": "overlay_235A9C05_01B2_0FAD_4169_5FF9ECF7535B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_07B3D4CA_1235_70C4_41A8_25E6085351BF).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_07B3D4CA_1235_70C4_41A8_25E6085351BF); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_07B3D4CA_1235_70C4_41A8_25E6085351BF); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 75.91,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0_HS_13_0.png",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ]
   },
   "pitch": 0.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.91,
   "hfov": 5.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": 0.41
  }
 ],
 "id": "overlay_233CAC0D_01BE_0FBD_4138_BEBB9C37C5F6",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_0340A3BC_1232_90BD_41A7_3AB3C34F341D).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0340A3BC_1232_90BD_41A7_3AB3C34F341D); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0340A3BC_1232_90BD_41A7_3AB3C34F341D); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF, this.camera_028EA3DF_16F8_63B5_41AA_97E675BCE374); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 67.05,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0_HS_14_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 162
     }
    ]
   },
   "pitch": 0.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.92
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.05,
   "hfov": 7.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": 0.15
  }
 ],
 "id": "overlay_2305AE8F_01BE_08BD_4176_83E2B7306690",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF, this.camera_027E63EF_16F8_6395_4181_CCEBD66E5A22); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "rollOver": "if(this.getGlobalAudio(this.audio_0418BF47_1236_91CB_41A3_FD629573C667).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0418BF47_1236_91CB_41A3_FD629573C667); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0418BF47_1236_91CB_41A3_FD629573C667); }"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 107.54,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0_HS_15_0.png",
      "width": 149,
      "class": "ImageResourceLevel",
      "height": 174
     }
    ]
   },
   "pitch": -3.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.96
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.54,
   "hfov": 9.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_0_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -3.55
  }
 ],
 "id": "overlay_04D8A648_1236_F3C4_4194_993D97FB49C8",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18, this.camera_0252A40E_16F8_6497_4194_E8D457D78941); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6E06D6_1233_70CC_4167_7F4A44B1FAC4",
   "yaw": 123.03,
   "pitch": 2.11,
   "distance": 100,
   "hfov": 8.25
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.03,
   "hfov": 8.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.11
  }
 ],
 "id": "overlay_21DA36F8_01F2_7863_4170_FDEA7C26B3DA",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_0207048B_16F8_659D_41B0_F6615B954AD1",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_042CF74A_16F8_649F_41B5_C323385E4E58",
 "restartMovementOnUserInteraction": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB, this.camera_042CE74A_16F8_649F_41B1_3C0CCC407A6E); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6766C6_1233_70CC_4182_757815D3EDD4",
   "yaw": -11.77,
   "pitch": -34.81,
   "distance": 100,
   "hfov": 12.64
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.77,
   "hfov": 12.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.81
  }
 ],
 "id": "overlay_DC56B694_FD9E_1291_41E6_004A9E5AD445",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1, this.camera_0068669E_16F8_65B7_41B1_8DB7248B4A08); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6736C6_1233_70CC_41B1_5EDEAD8FEEBB",
   "yaw": 56.56,
   "pitch": -34.56,
   "distance": 100,
   "hfov": 12.68
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 56.56,
   "hfov": 12.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.56
  }
 ],
 "id": "overlay_DF65AA9F_FD9E_728F_41ED_645C5B62663B",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F6614504_FDAE_1771_41C6_7309CCD9F415, this.camera_004906BD_16F8_65F5_41B2_1A276822B72D); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6716C6_1233_70CC_41A3_9F35106A5A18",
   "yaw": 155.79,
   "pitch": -26.02,
   "distance": 100,
   "hfov": 13.84
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 155.79,
   "hfov": 13.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.02
  }
 ],
 "id": "overlay_D9665995_FDA6_1E93_41E3_BF86C4CADD96",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18, this.camera_0425672B_16F8_649D_41B2_A9589E2576A8); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C60F6C6_1233_70CC_4195_1403A11507AE",
   "yaw": -172.3,
   "pitch": -21,
   "distance": 100,
   "hfov": 14.38
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.3,
   "hfov": 14.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_1_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21
  }
 ],
 "id": "overlay_DB9CA428_FDA2_15B1_41D0_B863FEB944F6",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_2BDC1D9C_03A3_6FA3_4154_10168C771942).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_2BDC1D9C_03A3_6FA3_4154_10168C771942); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_2BDC1D9C_03A3_6FA3_4154_10168C771942); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -67.62,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_1_HS_4_0.png",
      "width": 285,
      "class": "ImageResourceLevel",
      "height": 361
     }
    ]
   },
   "pitch": -4.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.09
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.62,
   "hfov": 19.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -4.2
  }
 ],
 "id": "overlay_0DC1C190_02BD_97A3_4182_6A06617844BF",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_2B9D9F40_03AD_ECA3_4178_9C658E0216F8).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_2B9D9F40_03AD_ECA3_4178_9C658E0216F8); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_2B9D9F40_03AD_ECA3_4178_9C658E0216F8); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18, this.camera_0420273A_16F8_64FF_419E_94BDA856C7E3); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -144.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_1_HS_5_0.png",
      "width": 270,
      "class": "ImageResourceLevel",
      "height": 320
     }
    ]
   },
   "pitch": -1.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.12
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.26,
   "hfov": 18.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -1.7
  }
 ],
 "id": "overlay_0C4E3CAF_02BC_EDFD_40F8_55ECE745D6A0",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_2B43C0B4_03A5_75EC_4147_761C844AB07C).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_2B43C0B4_03A5_75EC_4147_761C844AB07C); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_2B43C0B4_03A5_75EC_4147_761C844AB07C); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1, this.camera_005976AE_16F8_6597_41B3_DCDABFE61AA3); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 24.62,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_1_HS_6_0.png",
      "width": 258,
      "class": "ImageResourceLevel",
      "height": 324
     }
    ]
   },
   "pitch": -4.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.29
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.62,
   "hfov": 17.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -4.26
  }
 ],
 "id": "overlay_0C4C68F6_02A3_756C_4177_18FDB1C91137",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_05249324_16F8_5C8A_41B5_A458D717B416",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_0226D44C_16F8_649B_41A0_AA6B11DFBB59",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_03E504BA_16F8_65FF_41A3_B0D5001DDD74",
 "restartMovementOnUserInteraction": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4, this.camera_05E7420A_16F8_5C9F_41A0_4AB65170E555); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C64B6B6_1233_734D_4190_3A08B647A0E4",
   "yaw": -82.93,
   "pitch": -15.31,
   "distance": 100,
   "hfov": 13.4
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.93,
   "hfov": 13.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.31
  }
 ],
 "id": "overlay_E013C354_FDE2_1390_41AC_241A0E625E56",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D, this.camera_05C47239_16F8_5CFD_41AE_21A8690EB2CF); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6496B6_1233_734D_4191_AD74F216FABD",
   "yaw": -164.83,
   "pitch": -27.87,
   "distance": 100,
   "hfov": 12.28
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -164.83,
   "hfov": 12.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.87
  }
 ],
 "id": "overlay_E373CE15_FDE2_3593_41D9_28C3710C1971",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "blending": 0,
 "class": "VideoPanoramaOverlay",
 "id": "overlay_CF4C41C2_FEA6_EEF1_41D2_C579272732EB",
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CF4C41C2_FEA6_EEF1_41D2_C579272732EB_t.jpg",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "pitch": 13.97,
 "useHandCursor": true,
 "roll": 8.82,
 "videoVisibleOnStop": false,
 "rotationX": -16.36,
 "rotationY": -28,
 "yaw": 60.21,
 "vfov": 20.97,
 "data": {
  "label": "Video"
 },
 "autoplay": true,
 "enabledInCardboard": true,
 "hfov": 35.65,
 "distance": 50,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_CF23C4DD_FEA6_3693_41DB_17E139ED633C.mp4"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F662BE67_FDAE_75BF_41B5_17420D6CE92C, this.camera_27F66AC6_03A4_95AF_4161_7AD8E245A11D)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -58.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_4_0.png",
      "width": 117,
      "class": "ImageResourceLevel",
      "height": 170
     }
    ]
   },
   "pitch": 0.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.88
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.75,
   "hfov": 7.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "pitch": 0.01
  }
 ],
 "id": "overlay_14074E17_003F_56C6_4152_1B6D06AD9E5E",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -67.61,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_5_0.png",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": 0.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.31
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.61,
   "hfov": 5.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "pitch": 0.13
  }
 ],
 "id": "overlay_14077E17_003F_56C6_4155_9801BB14D94D",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -91.78,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_6_0.png",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 110
     }
    ]
   },
   "pitch": -1.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.62
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.78,
   "hfov": 5.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": -1.34
  }
 ],
 "id": "overlay_16D87491_0012_ABDB_4160_8B6138C8A7DA",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1B9E615B_0192_39A5_4153_2594C1C572D3, this.camera_05F3A1FB_16F8_5F7D_41A8_9F310A633060); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6426B6_1233_734D_41AA_18296E2838B7",
   "yaw": -28.44,
   "pitch": -0.29,
   "distance": 100,
   "hfov": 5.29
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -28.44,
   "hfov": 5.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.29
  }
 ],
 "id": "overlay_16DAF6FC_001F_574A_415D_00E8DB44D090",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_9_0.png",
      "width": 145,
      "class": "ImageResourceLevel",
      "height": 37
     }
    ]
   },
   "yaw": -27.82,
   "pitch": -4.06,
   "distance": 50,
   "hfov": 9.74
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.82,
   "hfov": 9.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_9_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.06
  }
 ],
 "id": "overlay_17E88FF6_001E_F546_414D_75C980DF9E0E",
 "data": {
  "label": "TRIAL ROOM 1"
 },
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4, this.camera_05CF8249_16F8_5C9D_41B1_2204A53E8D69); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C65E6B6_1233_734D_41A4_29EACA8275A6",
   "yaw": -8.65,
   "pitch": -0.54,
   "distance": 100,
   "hfov": 5.29
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.65,
   "hfov": 5.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.54
  }
 ],
 "id": "overlay_1729DEE2_0013_D77E_4138_8716AA0D33E0",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_11_0.png",
      "width": 145,
      "class": "ImageResourceLevel",
      "height": 37
     }
    ]
   },
   "yaw": -8.34,
   "pitch": -4.12,
   "distance": 50,
   "hfov": 9.74
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.34,
   "hfov": 9.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_11_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.12
  }
 ],
 "id": "overlay_1729CEE2_0013_D77E_414B_F2BBAB957F5C",
 "data": {
  "label": "TRIAL ROOM 2"
 },
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1965B780_0192_78A3_4153_B33293D5EF40, this.camera_05B0F258_16F8_5CBB_41B1_293706A5D9D0); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C65A6B6_1233_734D_4193_F3AAE9130455",
   "yaw": 13.24,
   "pitch": -0.99,
   "distance": 100,
   "hfov": 5.29
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.24,
   "hfov": 5.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.99
  }
 ],
 "id": "overlay_16726645_0013_56BA_415B_CD807EEFA5FE",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_13_0.png",
      "width": 145,
      "class": "ImageResourceLevel",
      "height": 36
     }
    ]
   },
   "yaw": 32.26,
   "pitch": -4.69,
   "distance": 50,
   "hfov": 9.72
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.26,
   "hfov": 9.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_13_0_map.gif",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.69
  }
 ],
 "id": "overlay_18FB48C9_0012_FB4A_4148_B65CD7DBFDB8",
 "data": {
  "label": "TRIAL ROOM 4"
 },
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1954F328_0192_19E3_414B_FB5AF50E9250, this.camera_05BA6268_16F8_5C9B_41A3_0CE3CFBBCF2E); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6576B6_1233_734D_4175_21857E9CF2B4",
   "yaw": 32.51,
   "pitch": -1.13,
   "distance": 100,
   "hfov": 5.29
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.51,
   "hfov": 5.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.13
  }
 ],
 "id": "overlay_174D44BE_0012_ABC6_4151_DBCB2E081188",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_15_0.png",
      "width": 145,
      "class": "ImageResourceLevel",
      "height": 36
     }
    ]
   },
   "yaw": 13.28,
   "pitch": -4.4,
   "distance": 50,
   "hfov": 9.72
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.28,
   "hfov": 9.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_15_0_map.gif",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.4
  }
 ],
 "id": "overlay_18FA1BB3_000D_7DDE_4157_1D1CED3991EC",
 "data": {
  "label": "TRIAL ROOM 3"
 },
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4, this.camera_05E9921A_16F8_5CBF_41A3_4D05C9D624C6); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -44.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_16_0.png",
      "width": 203,
      "class": "ImageResourceLevel",
      "height": 195
     }
    ]
   },
   "pitch": -1.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.6
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.75,
   "hfov": 13.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_16_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.94
  }
 ],
 "id": "overlay_0D39C60F_125C_839C_41A3_CFFC2A389A4D",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_0D61F785_1225_808C_41A0_DCA2027278D6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0D61F785_1225_808C_41A0_DCA2027278D6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0D61F785_1225_808C_41A0_DCA2027278D6); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4, this.camera_05D3122A_16F8_5C9E_41B2_4DC3CFAC8987); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -100.77,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_17_0.png",
      "width": 220,
      "class": "ImageResourceLevel",
      "height": 300
     }
    ]
   },
   "pitch": -3.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.75
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.77,
   "hfov": 14.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_17_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": -3.09
  }
 ],
 "id": "overlay_0D7DE325_1263_818D_41AC_D47D78B96B79",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_040D17A8_16F8_639B_41B0_20098B183640",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_05F241FB_16F8_5F7D_4190_B7D80BF51D4A",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_05E667E6_16F8_6397_41B2_A4BC20510D5C",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_05C40239_16F8_5CFD_41A1_BEDF52AA6B47",
 "restartMovementOnUserInteraction": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F, this.camera_040D07A8_16F8_639B_41B5_2BAA2140CB45); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6286C6_1233_70CC_41A5_D6042954B516",
   "yaw": 0.29,
   "pitch": -14.97,
   "distance": 100,
   "hfov": 14.88
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.29,
   "hfov": 14.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.97
  }
 ],
 "id": "overlay_E70C9B04_FDE2_3371_41E9_5D309A044E0D",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759, this.camera_05FFB7D7_16F8_63B5_4178_9C037113F7F3); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6266C6_1233_70CC_41B2_1B8988F9ACAE",
   "yaw": -177.07,
   "pitch": -14.46,
   "distance": 100,
   "hfov": 14.91
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.07,
   "hfov": 14.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.46
  }
 ],
 "id": "overlay_E700B189_FDFE_6F73_41DF_4E57941E5624",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_19106DA8_029F_AFE3_4163_D1D79957A876).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_19106DA8_029F_AFE3_4163_D1D79957A876); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_19106DA8_029F_AFE3_4163_D1D79957A876); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F, this.camera_27D05FFA_0263_6B67_4162_35734FFCFFF6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -62.68,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_1_HS_2_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 277
     }
    ]
   },
   "pitch": -1.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.41
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.68,
   "hfov": 13.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": -1.61
  }
 ],
 "id": "overlay_230C9918_01B2_09A3_4165_23CEAE970C56",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1E7EB526_029C_9CEF_416D_93BA8BC30DA1).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1E7EB526_029C_9CEF_416D_93BA8BC30DA1); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1E7EB526_029C_9CEF_416D_93BA8BC30DA1); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F, this.camera_040B67B7_16F8_63F5_41AB_C7A0D5D04543); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -24.63,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_1_HS_3_0.png",
      "width": 158,
      "class": "ImageResourceLevel",
      "height": 166
     }
    ]
   },
   "pitch": -0.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.62
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.63,
   "hfov": 10.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.19
  }
 ],
 "id": "overlay_2353544B_01B2_3FA5_4145_18DC5F6B1605",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1906CADF_029D_955C_4172_0172B5E377D2).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1906CADF_029D_955C_4172_0172B5E377D2); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1906CADF_029D_955C_4172_0172B5E377D2); }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -116.66,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_1_HS_4_0.png",
      "width": 257,
      "class": "ImageResourceLevel",
      "height": 323
     }
    ]
   },
   "pitch": 1.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.25
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.66,
   "hfov": 17.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": 1.01
  }
 ],
 "id": "overlay_23988626_01B3_FBEF_4110_6B94E71E8A50",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F, this.camera_05F067C7_16F8_6395_41B4_D9DD376817DF); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "rollOver": "if(this.getGlobalAudio(this.audio_0418BF47_1236_91CB_41A3_FD629573C667).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0418BF47_1236_91CB_41A3_FD629573C667); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0418BF47_1236_91CB_41A3_FD629573C667); }"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 23.61,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_1_HS_5_0.png",
      "width": 182,
      "class": "ImageResourceLevel",
      "height": 245
     }
    ]
   },
   "pitch": -6.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.17
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.61,
   "hfov": 12.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": -6.26
  }
 ],
 "id": "overlay_239B3B46_01B2_09AF_4162_663B881EEA20",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_0418BF47_1236_91CB_41A3_FD629573C667).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0418BF47_1236_91CB_41A3_FD629573C667); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0418BF47_1236_91CB_41A3_FD629573C667); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F, this.camera_31B5A4EA_1263_8087_41A5_B2A37C24AC9F)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 118.85,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_1_HS_7_0.png",
      "width": 243,
      "class": "ImageResourceLevel",
      "height": 327
     }
    ]
   },
   "pitch": -11.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.03
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 118.85,
   "hfov": 16.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": -11.01
  }
 ],
 "id": "overlay_30D4CB2D_1265_819C_41A6_3F1B1D2567DE",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_0333D5C3_16F8_678D_4188_FE7D4A0DBC95",
 "restartMovementOnUserInteraction": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD, this.camera_02E57362_16F8_5C8F_41B3_BFA135BB8C93); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C7E06B6_1233_734D_41A3_B3D663F599FF",
   "yaw": -178.43,
   "pitch": -38.23,
   "distance": 100,
   "hfov": 11.1
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -178.43,
   "hfov": 11.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.23
  }
 ],
 "id": "overlay_00739418_11FD_8784_41A4_058D894DAACB",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8, this.camera_02E90372_16F8_5C8F_41B6_281765EAD87A); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C7FD6B6_1233_734D_418D_C46FD89BF19D",
   "yaw": 3.95,
   "pitch": -23.41,
   "distance": 100,
   "hfov": 12.97
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.95,
   "hfov": 12.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.41
  }
 ],
 "id": "overlay_033DEF57_11FD_818C_419C_C648A95F8038",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_00C46631_16F8_648D_41A6_07CDD81C85DB",
 "restartMovementOnUserInteraction": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F6614504_FDAE_1771_41C6_7309CCD9F415, this.camera_0423C1BC_16F8_5FFB_4191_D0E3C4C5091C); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6676C6_1233_70CC_41AA_A85325513FB0",
   "yaw": -151.2,
   "pitch": -27.28,
   "distance": 100,
   "hfov": 13.69
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.2,
   "hfov": 13.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.28
  }
 ],
 "id": "overlay_DDCED0A7_FDE2_6EB0_41DC_545D98AB914E",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A, this.camera_041C21CC_16F8_5F9B_4183_409453E30022); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6646C6_1233_70CC_41B0_34DB440965DD",
   "yaw": 156.8,
   "pitch": -24.76,
   "distance": 100,
   "hfov": 13.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.8,
   "hfov": 13.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.76
  }
 ],
 "id": "overlay_DF443A45_FD9E_1DF3_41E7_F3232D6D49E8",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_214ECF7C_01F2_0862_415E_590BFF465366, this.camera_042BD1CC_16F8_5F9B_41A5_87608484EF38); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6626C6_1233_70CC_4190_9ED801852B86",
   "yaw": -67.32,
   "pitch": 5.53,
   "distance": 100,
   "hfov": 8.22
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.32,
   "hfov": 8.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.53
  }
 ],
 "id": "overlay_1F1AD9E5_01F6_0862_4174_0D5DD18074A7",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_1_HS_3_0.png",
      "width": 266,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ]
   },
   "yaw": 9.17,
   "pitch": -4.33,
   "distance": 50,
   "hfov": 17.78
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.17,
   "hfov": 17.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_1_HS_3_0_map.gif",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.33
  }
 ],
 "id": "overlay_21C50E7B_01F6_0865_4171_5B3B9D999281",
 "data": {
  "label": "TRIAL ROOM 10"
 },
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A, this.camera_043B819D_16F8_5FB5_41AF_F5C273931504); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C67E6C6_1233_70CC_41A4_141FD21CABFE",
   "yaw": 8.98,
   "pitch": 1.86,
   "distance": 100,
   "hfov": 8.25
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.98,
   "hfov": 8.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.86
  }
 ],
 "id": "overlay_228BF297_01F2_18AD_4146_FB0D0895CD0F",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_1_HS_5_0.png",
      "width": 266,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ]
   },
   "yaw": -66.79,
   "pitch": -0.66,
   "distance": 50,
   "hfov": 17.83
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66.79,
   "hfov": 17.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_1_HS_5_0_map.gif",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.66
  }
 ],
 "id": "overlay_1E0626DE_01F2_185F_417B_2D0B5A39A95C",
 "data": {
  "label": "TRIAL ROOM 9"
 },
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_2B9D9F40_03AD_ECA3_4178_9C658E0216F8).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_2B9D9F40_03AD_ECA3_4178_9C658E0216F8); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_2B9D9F40_03AD_ECA3_4178_9C658E0216F8); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 79.21,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_1_HS_6_0.png",
      "width": 327,
      "class": "ImageResourceLevel",
      "height": 384
     }
    ]
   },
   "pitch": -1.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.89
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.21,
   "hfov": 21.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -1.59
  }
 ],
 "id": "overlay_0DEFD06C_02BF_7563_415B_915B2925868C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_2BDC1D9C_03A3_6FA3_4154_10168C771942).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_2BDC1D9C_03A3_6FA3_4154_10168C771942); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_2BDC1D9C_03A3_6FA3_4154_10168C771942); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A, this.camera_040791DB_16F8_5FBD_4194_61F1436479C8); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 125.57,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_1_HS_7_0.png",
      "width": 225,
      "class": "ImageResourceLevel",
      "height": 297
     }
    ]
   },
   "pitch": 0.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.12
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 125.57,
   "hfov": 15.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": 0.19
  }
 ],
 "id": "overlay_0C7469BF_02BC_F7DD_4174_0363BF05288E",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_2B43C0B4_03A5_75EC_4147_761C844AB07C).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_2B43C0B4_03A5_75EC_4147_761C844AB07C); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_2B43C0B4_03A5_75EC_4147_761C844AB07C); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 155.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_1_HS_8_0.png",
      "width": 183,
      "class": "ImageResourceLevel",
      "height": 241
     }
    ]
   },
   "pitch": 2.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.3
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 155.51,
   "hfov": 12.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": 2.27
  }
 ],
 "id": "overlay_0DED72BE_02BD_95DF_413F_949F20EB18EC",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1D497973_11E5_8184_41AF_226E330DF2EB_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC, this.camera_0343D5B4_16F8_678B_4159_0B01CA8024BC); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C7F16B6_1233_734D_417A_98014C338543",
   "yaw": 165.71,
   "pitch": -27.18,
   "distance": 100,
   "hfov": 12.57
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.71,
   "hfov": 12.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.18
  }
 ],
 "id": "overlay_0903ECDB_11DC_8084_41A8_FD4204C9EEBB",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64, this.camera_038F2575_16F8_6775_41A5_9D8FDA0B79EA); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C78F6B6_1233_734D_4147_0EA419D6A714",
   "yaw": 88.59,
   "pitch": -22.91,
   "distance": 100,
   "hfov": 13.02
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.59,
   "hfov": 13.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.91
  }
 ],
 "id": "overlay_0BEFEB0D_11DD_819D_4183_BB94168996DD",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8, this.camera_035D15A4_16F8_678B_41B1_011931EE84C9); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C78B6B6_1233_734D_4195_082217C618E8",
   "yaw": -153.34,
   "pitch": -28.18,
   "distance": 100,
   "hfov": 12.46
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -153.34,
   "hfov": 12.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.18
  }
 ],
 "id": "overlay_0A4CF2C6_11DD_808F_4141_2C244D808290",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64, this.camera_037F6585_16F8_6795_41B4_7C52B91060CE); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 63.73,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_1_HS_3_0.png",
      "width": 121,
      "class": "ImageResourceLevel",
      "height": 142
     }
    ]
   },
   "pitch": -1.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.12
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.73,
   "hfov": 8.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -1.44
  }
 ],
 "id": "overlay_329030BE_1225_80FF_41AC_139504F8782C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 72.94,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_1_HS_4_0.png",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "pitch": -1.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.27
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 72.94,
   "hfov": 6.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": -1.32
  }
 ],
 "id": "overlay_0D59C2B1_1224_8085_4172_A597B59FAD2B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 79.22,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_1_HS_5_0.png",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ]
   },
   "pitch": -0.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.71
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.22,
   "hfov": 4.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -0.95
  }
 ],
 "id": "overlay_0D1CA2A0_1223_8084_41B0_A30DBCDD95CE",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64, this.camera_036D7594_16F8_678B_41AE_CB9486F537EE); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 110.65,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_1_HS_6_0.png",
      "width": 117,
      "class": "ImageResourceLevel",
      "height": 130
     }
    ]
   },
   "pitch": -4.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.87
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.65,
   "hfov": 7.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -4.07
  }
 ],
 "id": "overlay_0D5A9BB2_122C_8084_417E_A94FA13A7202",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_0D61F785_1225_808C_41A0_DCA2027278D6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0D61F785_1225_808C_41A0_DCA2027278D6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0D61F785_1225_808C_41A0_DCA2027278D6); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 101.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_1_HS_7_0.png",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 112
     }
    ]
   },
   "pitch": -2.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.81
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 101.51,
   "hfov": 5.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -2.32
  }
 ],
 "id": "overlay_0D5DEC97_122D_808C_41B0_918C55C713AF",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_08F4FCCB_1252_F0DB_41A8_3F3172E1A03F, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_0B07B414_1253_774D_4195_8336D8833EA4, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.59,
   "hfov": 10.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_0_HS_8_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 91
     }
    ]
   },
   "pitch": 8.54
  }
 ],
 "id": "overlay_056F9F4D_1255_91DC_41A0_89E28B07BC07",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "left": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 1,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "99.975%",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "show": "this.MapViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_0151C045_16F8_5C95_41A5_FD5EE3C2FFB0.set('selectedIndex', -1); }, this); this.playList_0151C045_16F8_5C95_41A5_FD5EE3C2FFB0.set('selectedIndex', 0); this.MapViewerVideoPlayer.play()",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_04188788_16F8_639B_4159_C37EA952E04C",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_027E03EF_16F8_6395_4190_A1F491EE2A20",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_051D7343_16F8_5C8D_41B6_0B08D6F68E5F",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_05295333_16F8_5C8D_41A5_355758355E7C",
 "restartMovementOnUserInteraction": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A, this.camera_03DB34F8_16F8_657B_4174_1C58324DB6A3); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C67A6C6_1233_70CC_41AC_E12410C1FFF0",
   "yaw": 48.52,
   "pitch": -28.53,
   "distance": 100,
   "hfov": 13.53
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.52,
   "hfov": 13.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.53
  }
 ],
 "id": "overlay_E2619D60_FDE2_17B1_41DE_266B983662F2",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18, this.camera_03EAB4D9_16F8_65BD_4186_A71662189959); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6516C6_1233_70CC_41B0_136F521D2A0E",
   "yaw": -30.61,
   "pitch": -27.03,
   "distance": 100,
   "hfov": 13.72
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.61,
   "hfov": 13.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.03
  }
 ],
 "id": "overlay_DDB04334_FDE3_F391_41EF_282BD8E3FD3D",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D, this.camera_03E564BA_16F8_65FF_41B1_C779F5934DFB); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C66F6C6_1233_70CC_4198_234EF4929734",
   "yaw": 178.15,
   "pitch": -33.81,
   "distance": 100,
   "hfov": 12.8
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.15,
   "hfov": 12.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.81
  }
 ],
 "id": "overlay_D85D4E04_FDA2_3571_41E7_6F04CA969E3F",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_2B9D9F40_03AD_ECA3_4178_9C658E0216F8).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_2B9D9F40_03AD_ECA3_4178_9C658E0216F8); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_2B9D9F40_03AD_ECA3_4178_9C658E0216F8); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -1.31,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_1_HS_3_0.png",
      "width": 188,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": -1.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.6
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.31,
   "hfov": 12.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": -1.96
  }
 ],
 "id": "overlay_0CBC9267_02BC_956D_416A_96B85D1E1F0A",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_2BDC1D9C_03A3_6FA3_4154_10168C771942).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_2BDC1D9C_03A3_6FA3_4154_10168C771942); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_2BDC1D9C_03A3_6FA3_4154_10168C771942); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A, this.camera_03CB5508_16F8_649B_4153_0F26369435A0); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 43.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_1_HS_4_0.png",
      "width": 141,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ]
   },
   "pitch": -1.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.48
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.26,
   "hfov": 9.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": -1.77
  }
 ],
 "id": "overlay_0DCE837A_02BC_BB64_416C_5E68D653C098",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_0068069E_16F8_65B7_41B3_82EB7EBEFAB1",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_0216A46C_16F8_649B_419C_37DE85F707F0",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_0078068E_16F8_6597_41B6_32EF6D22A915",
 "restartMovementOnUserInteraction": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD, this.camera_03F7449A_16F8_65BF_41B3_4C982DA7567F); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C7D06A7_1233_734C_4199_B030DCFB7203",
   "yaw": 2.95,
   "pitch": -13.87,
   "distance": 100,
   "hfov": 13.72
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.95,
   "hfov": 13.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.87
  }
 ],
 "id": "overlay_01C039BB_11FC_8084_419D_309D9C0B0014",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_00D44621_16F8_648D_41A2_110D7C452D88",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_02C30391_16F8_638D_4197_BDC8DACEE0AA",
 "restartMovementOnUserInteraction": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4, this.camera_0EA6D0D2_16F8_5D8F_41B2_69C3F8913D38); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C7A96B6_1233_734D_4194_3F5C707BBB3C",
   "yaw": 1.44,
   "pitch": -20.9,
   "distance": 100,
   "hfov": 13.2
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.44,
   "hfov": 13.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.9
  }
 ],
 "id": "overlay_077FC8D6_11E4_808C_4199_6BB463F61957",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1D497973_11E5_8184_41AF_226E330DF2EB, this.camera_043DD19D_16F8_5FB5_41B4_2DCD1E3570F0); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C7A76B6_1233_734D_4185_DD60414CC955",
   "yaw": -174.41,
   "pitch": -18.64,
   "distance": 100,
   "hfov": 13.39
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.41,
   "hfov": 13.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.64
  }
 ],
 "id": "overlay_0634B2DF_11E5_80BC_41A5_0318BFD352A0",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8, this.camera_0434418D_16F8_5F95_41B0_4079ACB8EB3E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C7A56B6_1233_734D_41A3_691146CFB8F2",
   "yaw": 160.97,
   "pitch": -14.87,
   "distance": 100,
   "hfov": 13.66
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.97,
   "hfov": 13.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.87
  }
 ],
 "id": "overlay_08CBB5AD_1224_809C_41A4_70A289FABDA9",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64, this.camera_32042B71_1227_8184_4196_2462F060DE1B)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -91.05,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_1_HS_3_0.png",
      "width": 194,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ]
   },
   "pitch": -1.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.04
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.05,
   "hfov": 13.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.53
  }
 ],
 "id": "overlay_0DF5C7C2_1225_8084_41A6_0A1B822D9C91",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4, this.camera_0458A15E_16F8_5CB7_41B4_253B2CEB1CBF); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -35.82,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_1_HS_4_0.png",
      "width": 141,
      "class": "ImageResourceLevel",
      "height": 160
     }
    ]
   },
   "pitch": -1.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.45
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.82,
   "hfov": 9.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -1.3
  }
 ],
 "id": "overlay_0D49CA63_1225_8384_415D_2FFDEB2A2504",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4, this.camera_0446216E_16F8_5C97_4188_FF50FCBBDB5C); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -20,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_1_HS_5_0.png",
      "width": 113,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ]
   },
   "pitch": -1.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.58
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20,
   "hfov": 7.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.22
  }
 ],
 "id": "overlay_0D545714_1224_818C_4151_9C2002397920",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64, this.camera_3233AB81_1227_8084_419D_2027262ECA83)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 93.59,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_1_HS_6_0.png",
      "width": 405,
      "class": "ImageResourceLevel",
      "height": 354
     }
    ]
   },
   "pitch": -11.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.61
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 93.59,
   "hfov": 26.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_1_HS_6_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.52
  }
 ],
 "id": "overlay_0D041195_1223_808C_41A9_052E6D7D4629",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_0D61F785_1225_808C_41A0_DCA2027278D6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0D61F785_1225_808C_41A0_DCA2027278D6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0D61F785_1225_808C_41A0_DCA2027278D6); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4, this.camera_044FB17E_16F8_5F77_41B6_A0D960CBD557); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 20.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_1_HS_7_0.png",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": -2.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.77
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 20.26,
   "hfov": 9.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -2.91
  }
 ],
 "id": "overlay_0D0B0BF4_125C_808C_41A7_7BB2A0348681",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_009BE66F_16F8_6495_41B3_8B2506C597DF",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_00F7C602_16F8_648F_419D_32E5D242013A",
 "restartMovementOnUserInteraction": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F662819B_FDAE_2E97_41D7_1583DFA38698, this.camera_02F70352_16F8_5C8F_4144_7A7F3915266E); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6DB6D6_1233_70CC_419C_386050017142",
   "yaw": 123.52,
   "pitch": 1.53,
   "distance": 100,
   "hfov": 5.28
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.52,
   "hfov": 5.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.53
  }
 ],
 "id": "overlay_1AC210EA_01F2_1867_415C_7515F29FA13B",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1965B780_0192_78A3_4153_B33293D5EF40_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_0416D769_16F8_649D_41A1_F1E886B80C12",
 "restartMovementOnUserInteraction": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D, this.camera_0416C769_16F8_649D_41B5_E22755DA6340); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C7E66A7_1233_734C_4163_CFADBA2A2958",
   "yaw": 179.81,
   "pitch": -17.88,
   "distance": 100,
   "hfov": 13.45
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.81,
   "hfov": 13.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.88
  }
 ],
 "id": "overlay_0149FEFA_11FF_8084_419E_996B76BAC3B5",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3, this.camera_042A175A_16F8_64BF_41B4_E8B4E1702D2F); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C7E46B6_1233_734D_41AC_765BEF6E22F9",
   "yaw": -4.09,
   "pitch": -13.11,
   "distance": 100,
   "hfov": 13.77
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.09,
   "hfov": 13.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.11
  }
 ],
 "id": "overlay_006EC4B3_11FC_8084_4187_89513FC93C9D",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_02DCB381_16F8_638D_41B3_4E22BF347753",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_0423D1BC_16F8_5FFB_4182_4D297608CA4E",
 "restartMovementOnUserInteraction": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F, this.camera_05248324_16F8_5C8A_41A2_F4EA3E485B6A); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C7816B6_1233_734D_41A1_9544D21DDB8C",
   "yaw": 92.13,
   "pitch": -26.17,
   "distance": 100,
   "hfov": 12.69
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.13,
   "hfov": 12.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.17
  }
 ],
 "id": "overlay_0475176C_11ED_819C_41B0_BF02A8E594F0",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8, this.camera_05335314_16F8_5C8B_41B6_1F2C75562A61); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C79F6B6_1233_734D_418F_D20E181D426D",
   "yaw": -178.69,
   "pitch": -32.71,
   "distance": 100,
   "hfov": 11.89
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -178.69,
   "hfov": 11.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.71
  }
 ],
 "id": "overlay_07D6C685_11EC_808C_4174_B5AB384F2F01",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1D497973_11E5_8184_41AF_226E330DF2EB, this.camera_05035343_16F8_5C8D_41A3_E52DFDA6CCDB); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C79D6B6_1233_734D_418A_CFFD2FD116AC",
   "yaw": -105.33,
   "pitch": -24.42,
   "distance": 100,
   "hfov": 12.87
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.33,
   "hfov": 12.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.42
  }
 ],
 "id": "overlay_0769ABD6_11EC_808C_41AD_87147CFC58C6",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C79B6B6_1233_734D_4174_7C4C32517087",
   "yaw": -53.58,
   "pitch": -23.41,
   "distance": 100,
   "hfov": 12.97
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.58,
   "hfov": 12.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.41
  }
 ],
 "id": "overlay_06B9E6F3_11E3_8084_41A3_205C6098AAD5",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_0D61F785_1225_808C_41A0_DCA2027278D6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0D61F785_1225_808C_41A0_DCA2027278D6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0D61F785_1225_808C_41A0_DCA2027278D6); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -10.43,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_4_0.png",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 105
     }
    ]
   },
   "pitch": -4.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.43,
   "hfov": 4.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": -4.41
  }
 ],
 "id": "overlay_0D900967_122C_818C_41A9_DB7AFC6CD027",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1B676FFD_02A3_AB5C_4185_8D1521CD88B6); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -25.39,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_5_0.png",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ]
   },
   "pitch": -1.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.71
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.39,
   "hfov": 4.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -1.5
  }
 ],
 "id": "overlay_0D5C6CB3_122D_8084_4194_0F6F4DA1A857",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0C03C046_1224_BF8C_41A7_AFB9DD9DD3BA); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -30.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_6_0.png",
      "width": 120,
      "class": "ImageResourceLevel",
      "height": 144
     }
    ]
   },
   "pitch": -9.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.96
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.25,
   "hfov": 7.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": -9.02
  }
 ],
 "id": "overlay_0D50C3CB_122F_8084_41A7_10E24E70AE82",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1AE3D00B_02A4_B4A5_4176_D427D390FBE6); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -52.9,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_7_0.png",
      "width": 121,
      "class": "ImageResourceLevel",
      "height": 142
     }
    ]
   },
   "pitch": -1.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.12
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.9,
   "hfov": 8.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -1.85
  }
 ],
 "id": "overlay_0D5CD3CA_122C_8084_41A3_8A7E9B0389CB",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1957831D_02AC_B4DD_4183_6CF1411B69E4); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -35.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_8_0.png",
      "width": 94,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ]
   },
   "pitch": -1.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.31
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.75,
   "hfov": 6.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -1.72
  }
 ],
 "id": "overlay_0D5F6BF9_122C_8084_418F_26D525FDB022",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1E7EB526_029C_9CEF_416D_93BA8BC30DA1).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1E7EB526_029C_9CEF_416D_93BA8BC30DA1); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1E7EB526_029C_9CEF_416D_93BA8BC30DA1); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F, this.camera_05294333_16F8_5C8D_41A3_1D307A71C589); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 97.76,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_9_0.png",
      "width": 166,
      "class": "ImageResourceLevel",
      "height": 210
     }
    ]
   },
   "pitch": -0.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.15
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.76,
   "hfov": 11.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -0.38
  }
 ],
 "id": "overlay_0D4E2A6D_1225_839C_419A_D1A877676320",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F, this.camera_051D5343_16F8_5C8D_41B0_8F8F0D521292); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "rollOver": "if(this.getGlobalAudio(this.audio_1F0E9AD2_029D_75A4_4143_BA068AFA2D22).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1F0E9AD2_029D_75A4_4143_BA068AFA2D22); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1F0E9AD2_029D_75A4_4143_BA068AFA2D22); }"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 32.52,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_10_0.png",
      "width": 126,
      "class": "ImageResourceLevel",
      "height": 189
     }
    ]
   },
   "pitch": -8.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.37
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.52,
   "hfov": 8.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 24
     }
    ]
   },
   "pitch": -8.86
  }
 ],
 "id": "overlay_0D4AC9E2_1225_8084_4182_95C38505158D",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_19106DA8_029F_AFE3_4163_D1D79957A876).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_19106DA8_029F_AFE3_4163_D1D79957A876); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_19106DA8_029F_AFE3_4163_D1D79957A876); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 63.5,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_11_0.png",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ]
   },
   "pitch": -0.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.12
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.5,
   "hfov": 7.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "pitch": -0.23
  }
 ],
 "id": "overlay_0D4B2333_1227_8184_41B1_1D5427E84A21",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1906CADF_029D_955C_4172_0172B5E377D2).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1906CADF_029D_955C_4172_0172B5E377D2); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1906CADF_029D_955C_4172_0172B5E377D2); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 43.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_12_0.png",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ]
   },
   "pitch": -0.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.45
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.51,
   "hfov": 5.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "pitch": -0.08
  }
 ],
 "id": "overlay_0D48DECA_1224_8084_419F_6B1A5D0A746C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "rollOver": "if(this.getGlobalAudio(this.audio_1F0E9AD2_029D_75A4_4143_BA068AFA2D22).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1F0E9AD2_029D_75A4_4143_BA068AFA2D22); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1F0E9AD2_029D_75A4_4143_BA068AFA2D22); }"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 13.89,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0_HS_13_0.png",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ]
   },
   "pitch": -4.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.27
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.89,
   "hfov": 5.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_0_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": -4.16
  }
 ],
 "id": "overlay_3268B011_126D_7F85_419A_C444A8FEC5FE",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8, this.camera_00BA9650_16F8_648B_418F_C9BD2410EEAB); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C63B6C6_1233_70CC_41B1_CBFA6AEF294D",
   "yaw": 143.23,
   "pitch": -24.51,
   "distance": 100,
   "hfov": 13.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 143.23,
   "hfov": 13.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.51
  }
 ],
 "id": "overlay_EBF01D94_FD9E_1690_41D8_DBDE4F2EFEA2",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC, this.camera_00ABE660_16F8_648B_41B1_95A1B351C0C6); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6386C6_1233_70CC_418C_D81BC7C6533C",
   "yaw": -171.55,
   "pitch": -29.66,
   "distance": 100,
   "hfov": 17.75
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.55,
   "hfov": 17.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.66
  }
 ],
 "id": "overlay_EA984735_FDE2_1393_41ED_98EA624198C3",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6356C6_1233_70CC_4172_971EB7D95BFE",
   "yaw": 177.9,
   "pitch": -14.09,
   "distance": 100,
   "hfov": 13.96
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.9,
   "hfov": 13.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.09
  }
 ],
 "id": "overlay_EA366879_FDE2_3D93_41BB_610137D2DF27",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF, this.camera_00E7E611_16F8_648D_4142_0C32923C5F39); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6336C6_1233_70CC_4192_EFB65B2EFD83",
   "yaw": -87.89,
   "pitch": -13.21,
   "distance": 100,
   "hfov": 14.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.89,
   "hfov": 14.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_1_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.21
  }
 ],
 "id": "overlay_E79DF8E5_FDE6_1EB3_41E3_5FA942C45F0A",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1E7EB526_029C_9CEF_416D_93BA8BC30DA1).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1E7EB526_029C_9CEF_416D_93BA8BC30DA1); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1E7EB526_029C_9CEF_416D_93BA8BC30DA1); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F, this.camera_24FFD845_0196_17AD_4174_A4B4F064833B)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 3.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_1_HS_4_0.png",
      "width": 256,
      "class": "ImageResourceLevel",
      "height": 225
     }
    ]
   },
   "pitch": 2.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.17
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.26,
   "hfov": 17.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_1_HS_4_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.06
  }
 ],
 "id": "overlay_23250E7D_0196_085D_417D_B092D2082837",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_19106DA8_029F_AFE3_4163_D1D79957A876).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_19106DA8_029F_AFE3_4163_D1D79957A876); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_19106DA8_029F_AFE3_4163_D1D79957A876); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF, this.camera_00D5B621_16F8_648D_41B3_82590D5E9A0F); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -54.37,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_1_HS_5_0.png",
      "width": 121,
      "class": "ImageResourceLevel",
      "height": 163
     }
    ]
   },
   "pitch": 1.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.13
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.37,
   "hfov": 8.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": 1.38
  }
 ],
 "id": "overlay_236F3149_0192_79A5_4160_C9758738C0DA",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1906CADF_029D_955C_4172_0172B5E377D2).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1906CADF_029D_955C_4172_0172B5E377D2); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1906CADF_029D_955C_4172_0172B5E377D2); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF, this.camera_00C45631_16F8_648D_41A5_A98F1CBE370F); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -70.49,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_1_HS_6_0.png",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ]
   },
   "pitch": 1.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.2
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.49,
   "hfov": 6.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": 1.22
  }
 ],
 "id": "overlay_2363DC69_0192_0865_4165_97B38735E908",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_1F0E9AD2_029D_75A4_4143_BA068AFA2D22).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_1F0E9AD2_029D_75A4_4143_BA068AFA2D22); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_1F0E9AD2_029D_75A4_4143_BA068AFA2D22); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F, this.camera_24EE6855_0196_17AD_4127_A97252BDF0BC)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -113.7,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_1_HS_7_0.png",
      "width": 137,
      "class": "ImageResourceLevel",
      "height": 174
     }
    ]
   },
   "pitch": -4.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.2
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -113.7,
   "hfov": 9.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -4.96
  }
 ],
 "id": "overlay_22C9A7C6_018E_38AF_4170_4C25EA4333D7",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOver": "if(this.getGlobalAudio(this.audio_0418BF47_1236_91CB_41A3_FD629573C667).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_0418BF47_1236_91CB_41A3_FD629573C667); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_0418BF47_1236_91CB_41A3_FD629573C667); }",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF, this.camera_00CAB640_16F8_648B_41AA_93808D09DADD); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -99.82,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0_HS_9_0.png",
      "width": 107,
      "class": "ImageResourceLevel",
      "height": 159
     }
    ]
   },
   "pitch": -1.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.18
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.82,
   "hfov": 7.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_0_HS_9_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "pitch": -1.74
  }
 ],
 "id": "overlay_089E1843_122E_9FCB_4172_12E7AA10BF04",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_008BE67F_16F8_6575_4177_0C011648ED1E",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_0407A1DB_16F8_5FBD_41AC_19612A951F20",
 "restartMovementOnUserInteraction": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759, this.camera_05AF5278_16F8_5D7B_41AF_9DA08DD3F43E); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6EF6D6_1233_70CC_41AC_6AF344ECA7FD",
   "yaw": 123.72,
   "pitch": -0.13,
   "distance": 100,
   "hfov": 5.29
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.72,
   "hfov": 5.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.13
  }
 ],
 "id": "overlay_1C71144E_01F2_1FBF_4169_B4228C41F650",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_02A583B0_16F8_638B_41A1_08B1E45E2150",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PhotoPlayList",
 "id": "album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_AlbumPlayList",
 "items": [
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_to_width",
    "initialPosition": {
     "x": "0.45",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.26"
    }
   },
   "media": "this.album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_6",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.66",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.68"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_to_width",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   },
   "media": "this.photo_382464BA_12F5_F744_419E_BAB4A1A91204",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.71",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.68"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_to_width",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   },
   "media": "this.photo_235C3B9F_12F5_F17B_419A_DD19329A1611",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.35",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.51"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_to_width",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   },
   "media": "this.album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_1",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.46",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.63"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_to_width",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   },
   "media": "this.album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_2",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.72",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.46"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_to_width",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   },
   "media": "this.album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_3",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.32",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.55"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_to_width",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   },
   "media": "this.album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_4",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.46",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.53"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_to_width",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   },
   "media": "this.album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_5",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.40",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.40"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_to_width",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   },
   "media": "this.album_2130F603_12F2_9344_41A7_9EA4ABDA16CC_0",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.53",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.47"
    }
   },
   "media": "this.photo_1BB7442D_1491_961B_41B1_93F866F4EB75",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.57",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.43"
    }
   },
   "media": "this.photo_1BD79BAF_1491_9217_41A5_93340E2C2E43",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.69",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.36"
    }
   },
   "media": "this.photo_1ACE62D3_1491_720F_41B0_10C72A894A4B",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.45",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.53"
    }
   },
   "media": "this.photo_1ACD7AE1_1491_720A_4199_29031A1759FC",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.69",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.48"
    }
   },
   "media": "this.photo_1AD90205_1492_920A_41A0_A51F71BB523C",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.51",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.65"
    }
   },
   "media": "this.photo_1ADD88CC_1492_9E19_41B2_A9C0F78548A4",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.74",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.48"
    }
   },
   "media": "this.photo_1AC48FD0_1492_920A_4172_9BDF31DFB176",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.72",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.70"
    }
   },
   "media": "this.photo_1AC28752_1492_B20E_41A4_5CAC301CBD83",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.36",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.30"
    }
   },
   "media": "this.photo_1AC59EA5_1492_B20A_4191_4EE6A6470493",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.34",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.71"
    }
   },
   "media": "this.photo_1ADA256B_1492_961E_41A4_0F1D991F2D84",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.69",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.54"
    }
   },
   "media": "this.photo_1AC4DC61_1492_960B_4133_D62C638E3DAE",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.52",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.75"
    }
   },
   "media": "this.photo_1AC46365_1492_F20A_41A9_C2B2B8B81BCD",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.30",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.50"
    }
   },
   "media": "this.photo_1ACC8AA9_1492_F21B_419A_79B8484EF696",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.43",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.37"
    }
   },
   "media": "this.photo_1AC271EC_1492_8E1A_41AF_9EFF191CCF40",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.40",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.63"
    }
   },
   "media": "this.photo_1AD8E8D2_1492_9E09_41B4_781009E6C397",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.63",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.49"
    }
   },
   "media": "this.photo_1ACF6073_1492_8E0F_41B2_20219F7D54F9",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.46",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.68"
    }
   },
   "media": "this.photo_1AC7C814_1492_BE09_41A2_471791A13BE4",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.70",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.33"
    }
   },
   "media": "this.photo_1AC9CF67_1492_B217_41AD_B025A0F29909",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.40",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.55"
    }
   },
   "media": "this.photo_1AC0067B_1492_92FE_41AC_EBA977108E89",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.75"
    }
   },
   "media": "this.photo_1AC58D9F_1492_9636_4195_D982C7821850",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.62",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.49"
    }
   },
   "media": "this.photo_1AC384B4_1493_7609_41B0_ACA55612D884",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.69",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.34"
    }
   },
   "media": "this.photo_1AC3EBB9_1493_727B_416A_744941C2538A",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.54",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.72"
    }
   },
   "media": "this.photo_1AD8328E_1493_9216_41A5_654A7A1F285A",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.48",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.35"
    }
   },
   "media": "this.photo_1AC54993_1493_9E0E_41B4_364305FC2C08",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.42",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.73"
    }
   },
   "media": "this.photo_1AC6E079_1493_8EFB_41A6_7111098FAF9A",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.30",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.45"
    }
   },
   "media": "this.photo_1AC2C76E_1493_B216_4177_91526524CDDC",
   "class": "PhotoPlayListItem"
  }
 ]
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_043B919D_16F8_5FB5_41A6_0B0BA3DAE33F",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_03997566_16F8_6497_4187_2D20536D4F75",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_058DC2A7_16F8_5D96_41B2_DC7BE59E63D8",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_05B08258_16F8_5CBB_4169_8680E9A81718",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_02B6B3A0_16F8_638B_418A_FFE2C7CEB98E",
 "restartMovementOnUserInteraction": false
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3",
 "backgroundOpacity": 0,
 "width": 30,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 30,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
 "backgroundOpacity": 0,
 "width": 30,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 30,
 "pressedIconURL": "skin/IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Hs visibility"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6658D838_74AF_8B5A_41D7_154D466041BB",
 "backgroundOpacity": 0,
 "width": 34,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 34,
 "pressedIconURL": "skin/IconButton_6658D838_74AF_8B5A_41D7_154D466041BB_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Gyroscopic"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_6658D838_74AF_8B5A_41D7_154D466041BB.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "cursor": "hand"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_03D544D9_16F8_65BD_4161_367CAF0293F3",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_05BA0268_16F8_5C9B_41A1_DF97EE569501",
 "restartMovementOnUserInteraction": false
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "propagateClick": true,
 "top": "20%",
 "class": "IconButton",
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "bottom": "20%",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "paddingBottom": 0,
 "right": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "propagateClick": true,
 "top": "20%",
 "class": "IconButton",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "bottom": "20%",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "cursor": "hand"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_00E7F611_16F8_648D_41B5_51940BD53652",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_05CF9249_16F8_5C9D_41B2_0A9B2F728FBA",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_004916BD_16F8_65F5_41B0_54E91640E084",
 "restartMovementOnUserInteraction": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759, this.camera_0240D41D_16F8_64B5_41A7_9F36D302F589); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6D46D6_1233_70CC_41A2_0C988536286D",
   "yaw": 124.47,
   "pitch": 2.01,
   "distance": 100,
   "hfov": 5.28
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 124.47,
   "hfov": 5.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.01
  }
 ],
 "id": "overlay_1C5D069F_01F2_18DE_416B_973D073ADD3E",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_03A92546_16F8_6497_4199_FA22D394F600",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_05F077C7_16F8_6395_4188_E023A0177C1E",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_029843CF_16F8_6395_4174_9F7A51801D60",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_040B77B7_16F8_63F5_41AC_42F40D6A98B2",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_03DBC4F8_16F8_657B_4174_1AB7E6E11DB3",
 "restartMovementOnUserInteraction": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F662819B_FDAE_2E97_41D7_1583DFA38698, this.camera_0408E1EB_16F8_5F9D_41AA_3D3F9C6845FE); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6C36D6_1233_70CC_41B1_8CE72358E6D0",
   "yaw": 122.04,
   "pitch": -0.29,
   "distance": 100,
   "hfov": 5.29
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.04,
   "hfov": 5.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.29
  }
 ],
 "id": "overlay_186D1445_018E_1FAD_416D_C2314FE82AF4",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_03CB7508_16F8_649B_412E_58CDAB314840",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_00B54640_16F8_648B_41AF_2EEF2EC6A629",
 "restartMovementOnUserInteraction": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759, this.camera_033325C3_16F8_678D_4196_BF32C00F8746); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C6E76D6_1233_70CC_417E_1A4188341F46",
   "yaw": 123.33,
   "pitch": 2.8,
   "distance": 100,
   "hfov": 5.28
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.33,
   "hfov": 5.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.8
  }
 ],
 "id": "overlay_1F9D1C37_01FE_0FEE_416C_C81D311D2871",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_19544208_0192_FBA3_4174_2268217B47E4_tcap0",
 "distance": 50,
 "inertia": true
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 1,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "show": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_0150E045_16F8_5C95_419A_17C6FC933161.set('selectedIndex', -1); }, this); this.playList_0150E045_16F8_5C95_419A_17C6FC933161.set('selectedIndex', 0)",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ],
 "id": "sequence_042BF1CC_16F8_5F9B_4175_8F9523223768",
 "restartMovementOnUserInteraction": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 66,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "class": "Container",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "id": "Container_6396DD92_74B8_852E_41C7_7F2F88EAB543",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "class": "Container",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false
},
{
 "layout": "horizontal",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "class": "Container",
 "verticalAlign": "middle",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": 110,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "width": "91.304%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "gap": 3,
 "scrollBarMargin": 2,
 "height": "85.959%",
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "backgroundOpacity": 1,
 "width": 366,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": 2,
 "class": "Container",
 "height": 78,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "white block"
 },
 "shadow": true,
 "shadowBlurRadius": 8,
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "backgroundOpacity": 1,
 "width": 366,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0.01
 ],
 "top": 86,
 "class": "Container",
 "height": 46,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "blue block"
 },
 "shadow": true,
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "data": {
  "name": "text 1"
 },
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "backgroundOpacity": 0,
 "width": 391,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "text": "LOREM IPSUM",
 "minHeight": 1,
 "propagateClick": true,
 "top": 0,
 "class": "Label",
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": 75,
 "fontSize": 61,
 "fontColor": "#000000",
 "fontStyle": "italic",
 "paddingTop": 0,
 "visible": false,
 "shadow": false,
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "data": {
  "name": "text 2"
 },
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "left": 12,
 "backgroundOpacity": 0,
 "width": 385,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "textShadowBlurRadius": 10,
 "paddingLeft": 0,
 "borderSize": 0,
 "text": "DOLOR SIT AMET, CONSECTETUR",
 "minHeight": 1,
 "propagateClick": true,
 "top": 90,
 "class": "Label",
 "verticalAlign": "top",
 "textShadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": 44,
 "fontSize": 28,
 "textShadowVerticalLength": 0,
 "fontColor": "#FFFFFF",
 "fontStyle": "italic",
 "textShadowOpacity": 1,
 "paddingTop": 0,
 "visible": false,
 "textShadowColor": "#000000",
 "shadow": false,
 "fontWeight": "normal"
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_BD15ECC8_9478_145B_41CB_7D871BE75B47",
  "this.Container_BD158CC8_9478_145B_41B5_3F260A00D36A"
 ],
 "id": "Container_BD15DCC8_9478_145B_41E1_35766BBBD98F",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "class": "Container",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF"
 ],
 "id": "Container_BD147CC8_9478_145B_41E1_A1505134A3C3",
 "left": "15%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "15%",
 "borderRadius": 0,
 "paddingRight": 20,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 20,
 "visible": false,
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "children": [
  "this.Image_0227FA4F_1491_9216_41A9_466FFF88EABB",
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 20,
 "right": "15%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_BD87BAD4_9478_3C4B_41D2_A8D83FD6CFF3",
  "this.Container_BD875AD4_9478_3C4B_4145_58969FE396D8"
 ],
 "id": "Container_BD878AD4_9478_3C4B_41E0_1542ED46C5EC",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "class": "Container",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1"
 ],
 "id": "Container_BD84CAD4_9478_3C4B_41DB_EAABF4EA300E",
 "left": "15%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "15%",
 "borderRadius": 0,
 "paddingRight": 20,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6076C6_1233_70CC_41A5_8F955289C1BD",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6056C6_1233_70CC_4174_3EF1491D050E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F663BC26_FDAE_35B1_41C7_6BDCA71861AB_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6EB6D6_1233_70CC_41A4_6A0AC574194D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_19647650_0192_1BA3_4172_D0D86AA39F62_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6DF6D6_1233_70CC_41B0_2A42CDD74949",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1954FBD8_0192_08A3_416C_9CBF64F691F4_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C7BB6B6_1233_734D_41AF_01D5D8CE40C8",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C7B66B6_1233_734D_4183_A05BACDBB85F",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CE14D94_11E4_808C_41AF_BDE8773BCDC4_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6D76D6_1233_70CC_419B_D82A1EBB626E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1954F328_0192_19E3_414B_FB5AF50E9250_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C7F96B6_1233_734D_4150_CC8053D37659",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C7F76B6_1233_734D_4186_622C782CE735",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C7F56B6_1233_734D_41B1_F8D0E0CBCB64",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C7F26B6_1233_734D_4190_8B182939A83B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C7E06B6_1233_734D_4197_6D4D677941C9",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1C11A24E_11E4_839C_41A7_2E19A2383BD8_1_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6506C6_1233_70CC_41A6_AC623E7C9ED7",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C66D6C6_1233_70CC_41A6_8EBB6B7B3CD9",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C66B6C6_1233_70CC_417A_F36C5D3932E2",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1200BCA6_01B2_08EF_4167_52EDB2EA9E5D_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6E36D6_1233_70CC_41A6_782F3CF8ADEE",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_214ECF7C_01F2_0862_415E_590BFF465366_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C61C6C6_1233_70CC_41A9_DDBB36674902",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6186C6_1233_70CC_4181_2BDE7CBD7CC4",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F66F0A5A_FDAE_1D91_41ED_67A4CBA597E1_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6C96C6_1233_70CC_41AD_A2C3AD4836FC",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6C76D6_1233_70CC_41A2_8B4D455A4A38",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6C46D6_1233_70CC_4194_F2C2514124F8",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6C26D6_1233_70CC_41A1_49BFE97C1FFC",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6DF6D6_1233_70CC_41A7_C3F234C1069B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6DC6D6_1233_70CC_4153_7A18EB93D80C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F663384F_FDAF_FD8F_41D5_50D8C02CB759_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6E06D6_1233_70CC_4167_7F4A44B1FAC4",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1F96995C_01F2_09A3_4170_AB1C19ABC70A_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6766C6_1233_70CC_4182_757815D3EDD4",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6736C6_1233_70CC_41B1_5EDEAD8FEEBB",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6716C6_1233_70CC_41A3_9F35106A5A18",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C60F6C6_1233_70CC_4195_1403A11507AE",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F65E204F_FDAE_2D8F_41EF_797F16E94A0A_1_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C64B6B6_1233_734D_4190_3A08B647A0E4",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6496B6_1233_734D_4191_AD74F216FABD",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6426B6_1233_734D_41AA_18296E2838B7",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_8_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C65E6B6_1233_734D_41A4_29EACA8275A6",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_10_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C65A6B6_1233_734D_4193_F3AAE9130455",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_12_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6576B6_1233_734D_4175_21857E9CF2B4",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F662819B_FDAE_2E97_41D7_1583DFA38698_1_HS_14_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6286C6_1233_70CC_41A5_D6042954B516",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6266C6_1233_70CC_41B2_1B8988F9ACAE",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F6621D27_FDAE_17BF_414D_D99EED700FEF_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C7E06B6_1233_734D_41A3_B3D663F599FF",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C7FD6B6_1233_734D_418D_C46FD89BF19D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1D2AE7C2_11E5_8084_41AF_79E8343A3ED3_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6676C6_1233_70CC_41AA_A85325513FB0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6646C6_1233_70CC_41B0_34DB440965DD",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6626C6_1233_70CC_4190_9ED801852B86",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C67E6C6_1233_70CC_41A4_141FD21CABFE",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F66FB329_FDAE_73B0_41EC_0A394793AC18_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C7F16B6_1233_734D_417A_98014C338543",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C78F6B6_1233_734D_4147_0EA419D6A714",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C78B6B6_1233_734D_4195_082217C618E8",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1D497973_11E5_8184_41AF_226E330DF2EB_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C67A6C6_1233_70CC_41AC_E12410C1FFF0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6516C6_1233_70CC_41B0_136F521D2A0E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C66F6C6_1233_70CC_4198_234EF4929734",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F6614504_FDAE_1771_41C6_7309CCD9F415_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C7D06A7_1233_734C_4199_B030DCFB7203",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1C71ABD3_11E5_8084_419E_F4033A81C57D_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C7A96B6_1233_734D_4194_3F5C707BBB3C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C7A76B6_1233_734D_4185_DD60414CC955",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C7A56B6_1233_734D_41A3_691146CFB8F2",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1D1C120B_11E4_8384_41A4_4463A5B32C64_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6DB6D6_1233_70CC_419C_386050017142",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1965B780_0192_78A3_4153_B33293D5EF40_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C7E66A7_1233_734C_4163_CFADBA2A2958",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C7E46B6_1233_734D_41AC_765BEF6E22F9",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1D48DB9D_11E5_80BC_419C_3748EFCD83BD_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C7816B6_1233_734D_41A1_9544D21DDB8C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C79F6B6_1233_734D_418F_D20E181D426D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C79D6B6_1233_734D_418A_CFFD2FD116AC",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C79B6B6_1233_734D_4174_7C4C32517087",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CE4F5F5_11E4_808C_41A4_0ACBB1DC80CC_1_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C63B6C6_1233_70CC_41B1_CBFA6AEF294D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6386C6_1233_70CC_418C_D81BC7C6533C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6356C6_1233_70CC_4172_971EB7D95BFE",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6336C6_1233_70CC_4192_EFB65B2EFD83",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F65EF90E_FDAE_FF71_41EF_2590DFBD901F_1_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6EF6D6_1233_70CC_41AC_6AF344ECA7FD",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1954FAC7_0192_08AD_416E_FE63D3DB5AAA_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6D46D6_1233_70CC_41A2_0C988536286D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_19658EC1_0192_08A5_416D_B371FC2F8BAC_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6C36D6_1233_70CC_41B1_8CE72358E6D0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B9E615B_0192_39A5_4153_2594C1C572D3_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6E76D6_1233_70CC_417E_1A4188341F46",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_19544208_0192_FBA3_4174_2268217B47E4_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "layout": "absolute",
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "backgroundOpacity": 0.4,
 "width": 36,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container black"
 },
 "shadow": false,
 "height": "100%"
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "class": "IconButton",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, true, 0, null, null, false)",
 "bottom": "40%",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "cursor": "hand"
},
{
 "layout": "absolute",
 "children": [
  "this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479"
 ],
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "left": "0%",
 "backgroundOpacity": 0.36,
 "width": 300,
 "paddingBottom": 40,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 40,
 "overflow": "scroll",
 "paddingLeft": 40,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#CC3366",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 40,
 "data": {
  "name": "Container"
 },
 "shadow": false,
 "height": "100%"
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "right": 9,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "class": "IconButton",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "bottom": "40%",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "transparencyActive": true,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "cursor": "hand"
},
{
 "layout": "absolute",
 "children": [
  "this.Image_BD15FCC8_9478_145B_41DA_B306F52E3FCF"
 ],
 "id": "Container_BD15ECC8_9478_145B_41CB_7D871BE75B47",
 "backgroundOpacity": 1,
 "width": "85%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "height": "100%"
},
{
 "layout": "vertical",
 "children": [
  "this.Container_BD159CC8_9478_145B_41AA_EFEDE92BF07B",
  "this.Container_BD15ACC8_9478_145B_41C2_6D37AD97A48D",
  "this.Container_BD146CC8_9478_145B_41D1_ED9BAFE44A6B"
 ],
 "id": "Container_BD158CC8_9478_145B_41B5_3F260A00D36A",
 "backgroundOpacity": 1,
 "width": "50%",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 50,
 "overflow": "visible",
 "paddingLeft": 50,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "height": "100%"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF_rollover.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "propagateClick": false,
 "class": "IconButton",
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_BD141CC8_9478_145B_41D4_265F47E47DB6, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedRollOverIconURL": "skin/IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF_pressed_rollover.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF.jpg",
 "cursor": "hand"
},
{
 "layout": "absolute",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "height": 140,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "itemVerticalAlign": "top",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "paddingBottom": 70,
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#666666",
 "selectedItemLabelFontWeight": "bold",
 "width": "100%",
 "borderRadius": 5,
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColorDirection": "vertical",
 "paddingLeft": 70,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "itemPaddingBottom": 3,
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "itemLabelFontStyle": "italic",
 "scrollBarOpacity": 0.5,
 "itemOpacity": 1,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "gap": 26,
 "itemMaxWidth": 1000,
 "itemMode": "normal",
 "height": "92%",
 "itemLabelFontFamily": "Oswald",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemThumbnailWidth": 220,
 "itemMaxHeight": 1000,
 "paddingTop": 10,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "shadow": false,
 "itemHorizontalAlign": "center",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBorderRadius": 0,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadow": true,
 "backgroundOpacity": 0,
 "itemThumbnailShadow": false,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "paddingRight": 70,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "class": "ThumbnailGrid",
 "horizontalAlign": "center",
 "bottom": -0.2,
 "itemThumbnailOpacity": 1,
 "itemMinHeight": 50,
 "itemPaddingRight": 3,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadow": true,
 "itemHeight": 160,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemMinWidth": 50,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "data": {
  "name": "ThumbnailList"
 }
},
{
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_0227FA4F_1491_9216_41A9_466FFF88EABB",
 "backgroundOpacity": 0,
 "width": "115.504%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_0227FA4F_1491_9216_41A9_466FFF88EABB.JPG",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "data": {
  "name": "Image9994"
 },
 "shadow": false,
 "scaleMode": "fill"
},
{
 "insetBorder": false,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "WebFrame",
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "height": "100%",
 "paddingTop": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "propagateClick": false,
 "class": "IconButton",
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "cursor": "hand"
},
{
 "layout": "absolute",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": 140,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "height": "100%"
},
{
 "layout": "absolute",
 "children": [
  "this.Image_BD87AAD4_9478_3C4B_41BE_0345EF6421AD",
  "this.Image_05ECCD9A_1492_9639_41A1_BCEE111163CF",
  "this.Image_06FB424C_1491_721A_41A6_454ACCC84059"
 ],
 "id": "Container_BD87BAD4_9478_3C4B_41D2_A8D83FD6CFF3",
 "backgroundOpacity": 1,
 "width": "55%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "height": "100%"
},
{
 "layout": "vertical",
 "children": [
  "this.Container_BD874AD4_9478_3C4B_41DE_DE522887B2C7",
  "this.Container_BD877AD4_9478_3C4B_41AC_A13D39E1584C",
  "this.Container_BD84DAD4_9478_3C4B_41D9_38F6A3F8328B"
 ],
 "id": "Container_BD875AD4_9478_3C4B_4145_58969FE396D8",
 "backgroundOpacity": 1,
 "width": "45%",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 60,
 "overflow": "visible",
 "paddingLeft": 60,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "height": "100%"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1_rollover.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "propagateClick": false,
 "class": "IconButton",
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_BD84EAD4_9478_3C4B_41C0_BDBA5096F748, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedRollOverIconURL": "skin/IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1_pressed_rollover.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1.jpg",
 "cursor": "hand"
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 30,
 "propagateClick": true,
 "top": "0%",
 "class": "Image",
 "horizontalAlign": "left",
 "minWidth": 40,
 "height": "25%",
 "paddingTop": 0,
 "data": {
  "name": "Image Company"
 },
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "layout": "vertical",
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "class": "Container",
 "verticalAlign": "middle",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "bottom": "25%",
 "gap": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container buttons"
 },
 "shadow": false
},
{
 "layout": "vertical",
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.Container_66588837_74AF_8B56_41CA_E204728E8E6C",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1"
 ],
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "verticalAlign": "bottom",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": 120,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container footer"
 },
 "shadow": false
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_BD15FCC8_9478_145B_41DA_B306F52E3FCF",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_BD15FCC8_9478_145B_41DA_B306F52E3FCF.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "class": "Image",
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "data": {
  "name": "Image"
 },
 "shadow": false,
 "scaleMode": "fit_outside"
},
{
 "layout": "horizontal",
 "id": "Container_BD159CC8_9478_145B_41AA_EFEDE92BF07B",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "height": 50,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.HTMLText_BD15BCC8_9478_145B_41A0_1BDCC9E92EE8",
  "this.Button_BD145CC8_9478_145B_41D6_359CB4C54BCA"
 ],
 "id": "Container_BD15ACC8_9478_145B_41C2_6D37AD97A48D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 300,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "height": "100%"
},
{
 "layout": "horizontal",
 "id": "Container_BD146CC8_9478_145B_41D1_ED9BAFE44A6B",
 "backgroundOpacity": 0.3,
 "width": 370,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "height": 30,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "right": 20,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "propagateClick": false,
 "top": 20,
 "class": "IconButton",
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "right": 20,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "propagateClick": false,
 "top": 20,
 "class": "IconButton",
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "width": "10%",
 "paddingBottom": 0,
 "right": 20,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "propagateClick": true,
 "top": 20,
 "class": "IconButton",
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "minWidth": 50,
 "mode": "push",
 "height": "10%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_BD87AAD4_9478_3C4B_41BE_0345EF6421AD",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_BD87AAD4_9478_3C4B_41BE_0345EF6421AD.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "bottom",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "class": "Image",
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "Image40635"
 },
 "shadow": false,
 "scaleMode": "fit_outside"
},
{
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_05ECCD9A_1492_9639_41A1_BCEE111163CF",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_05ECCD9A_1492_9639_41A1_BCEE111163CF.JPG",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "bottom",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "class": "Image",
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "data": {
  "name": "Image5477"
 },
 "shadow": false,
 "scaleMode": "fill"
},
{
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_06FB424C_1491_721A_41A6_454ACCC84059",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_06FB424C_1491_721A_41A6_454ACCC84059.JPG",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "class": "Image",
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "Image5628"
 },
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "layout": "horizontal",
 "id": "Container_BD874AD4_9478_3C4B_41DE_DE522887B2C7",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 0,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "height": "5%"
},
{
 "layout": "vertical",
 "children": [
  "this.HTMLText_BD876AD4_9478_3C4B_41D6_3C886AE845B6",
  "this.Container_BD870AD4_9478_3C4B_41D4_7C5B5C74D90A"
 ],
 "id": "Container_BD877AD4_9478_3C4B_41AC_A13D39E1584C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 520,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "height": "100%"
},
{
 "layout": "horizontal",
 "id": "Container_BD84DAD4_9478_3C4B_41D9_38F6A3F8328B",
 "backgroundOpacity": 0.3,
 "width": 370,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "height": 40,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "height": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Roboto Medium",
 "layout": "horizontal",
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "class": "Button",
 "rollOverBackgroundColor": [
  "#E23C8D"
 ],
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "About us",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_BD141CC8_9478_145B_41D4_265F47E47DB6, true, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button Tour Info"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "height": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Roboto Medium",
 "layout": "horizontal",
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "class": "Button",
 "rollOverBackgroundColor": [
  "#E23C8D"
 ],
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "Panorama List",
 "gap": 23,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button Panorama List"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "height": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Roboto Medium",
 "layout": "horizontal",
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "class": "Button",
 "rollOverBackgroundColor": [
  "#E23C8D"
 ],
 "pressedLabel": "Location",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "Location",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button Location"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "height": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Roboto Medium",
 "layout": "horizontal",
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "class": "Button",
 "rollOverBackgroundColor": [
  "#E23C8D"
 ],
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "Video",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button Floorplan"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "height": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Roboto Medium",
 "layout": "horizontal",
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "class": "Button",
 "rollOverBackgroundColor": [
  "#E23C8D"
 ],
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "Photoalbum",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false); this.setComponentVisibility(this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C, true, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button Photoalbum"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "height": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Roboto Medium",
 "layout": "horizontal",
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "class": "Button",
 "rollOverBackgroundColor": [
  "#E23C8D"
 ],
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "Contact Information",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_BD84EAD4_9478_3C4B_41C0_BDBA5096F748, true, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button Contact"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "height": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "horizontal",
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "backgroundOpacity": 1,
 "width": 40,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "class": "Container",
 "height": 2,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "blue line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "horizontal",
 "children": [
  "this.IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3",
  "this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
  "this.IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
  "this.IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
  "this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB"
 ],
 "id": "Container_66588837_74AF_8B56_41CA_E204728E8E6C",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": 40,
 "scrollBarVisible": "rollOver",
 "gap": 16,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container settings"
 },
 "shadow": false
},
{
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": 78,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false
},
{
 "id": "HTMLText_BD15BCC8_9478_145B_41A0_1BDCC9E92EE8",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.42vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.3vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.3vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_BD145CC8_9478_145B_41D6_359CB4C54BCA",
 "backgroundOpacity": 0.7,
 "width": 180,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderRadius": 50,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundOpacity": 1,
 "class": "Button",
 "height": 50,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "2.39vh",
 "label": "LOREM IPSUM",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#04A3E1"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button31015"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "id": "HTMLText_BD876AD4_9478_3C4B_41D6_3C886AE845B6",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarOpacity": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "55%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.42vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff66cc;font-size:9.62vh;font-family:'sunglory';\">Spice</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.62vh;font-family:'Oswald';\"><B><I>         </I></B></SPAN><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><B><I>Super Sale</I></B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "layout": "horizontal",
 "children": [
  "this.Image_00B35B68_1491_B21A_41A6_D7FA8381FC28",
  "this.Image_BD873AD4_9478_3C4B_41E1_8CD5E779D6D2",
  "this.HTMLText_BD872AD4_9478_3C4B_41E0_004DEE953DF2"
 ],
 "id": "Container_BD870AD4_9478_3C4B_41D4_7C5B5C74D90A",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "- content"
 },
 "shadow": false,
 "height": "75%"
},
{
 "maxHeight": 863,
 "maxWidth": 677,
 "id": "Image_00B35B68_1491_B21A_41A6_D7FA8381FC28",
 "backgroundOpacity": 0,
 "width": "22.864%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_00B35B68_1491_B21A_41A6_D7FA8381FC28.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": "32.778%",
 "paddingTop": 0,
 "data": {
  "name": "Image8905"
 },
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_BD873AD4_9478_3C4B_41E1_8CD5E779D6D2",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_BD873AD4_9478_3C4B_41E1_8CD5E779D6D2.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "agent photo"
 },
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "id": "HTMLText_BD872AD4_9478_3C4B_41E0_004DEE953DF2",
 "backgroundOpacity": 0,
 "width": "75%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff66cc;font-size:2.3vh;font-family:'Oswald';\"><B><I>SANTOSH SATEJA</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><I>Partner</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>Mob.: +91 98816 66888</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>spicesupersale@gmail.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>ph.: 0231-2536888, 3550675</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
}],
 "class": "Player",
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": [
  "this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "scripts": {
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "existsKey": function(key){  return key in window; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "shadow": false,
 "height": "100%",
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
