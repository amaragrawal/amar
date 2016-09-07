/*
*
*  Push Notifications codelab
*  Copyright 2015 Google Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      https://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License
*
*/

// Version 0.1

'use strict';

console.log('Started', self);

self.addEventListener('install', function(event) {
//  self.skipWaiting();
  var CACHE_NAME = 'push-notif-cache-v1';
  var urls_to_cache = {
	'/amar/static/images/yes.png'
  };
  event.waitUntil(
	caches.open(CACHE_NAME)
	.then(function(cache) {
		console.log("cache opened");
		cache.addAll(urls_to_cache);
	})
  );
  console.log('Installed', event);
});

self.addEventListener('activate', function(event) {
  console.log('Activated', event);
});

self.addEventListener('push', function(event) {
  console.log('Push message received', event);
  // TODO
});
