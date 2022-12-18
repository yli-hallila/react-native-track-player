export enum Event {
  PlaybackState = 'playback-state',
  PlaybackError = 'playback-error',
  PlaybackQueueEnded = 'playback-queue-ended',
  PlaybackTrackChanged = 'playback-track-changed',
  PlaybackMetadataReceived = 'playback-metadata-received',
  PlaybackProgressUpdated = 'playback-progress-updated',
  RemotePlay = 'remote-play',
  RemotePlayId = 'remote-play-id',
  RemotePlaySearch = 'remote-play-search',
  RemotePause = 'remote-pause',
  RemoteStop = 'remote-stop',
  RemoteSkip = 'remote-skip',
  RemoteNext = 'remote-next',
  RemotePrevious = 'remote-previous',
  RemoteJumpForward = 'remote-jump-forward',
  RemoteJumpBackward = 'remote-jump-backward',
  RemoteSeek = 'remote-seek',
  RemoteSetRating = 'remote-set-rating',
  RemoteDuck = 'remote-duck',
  RemoteLike = 'remote-like',
  RemoteDislike = 'remote-dislike',
  RemoteBookmark = 'remote-bookmark',
}
