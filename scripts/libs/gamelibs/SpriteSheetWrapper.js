/*
* Atari Arcade SDK
* Developed by gskinner.com in partnership with Atari
* Visit http://atari.com/arcade/developers for documentation, updates and examples.
*
* ©Atari Interactive, Inc. All Rights Reserved. Atari and the Atari logo are trademarks owned by Atari Interactive, Inc.
*
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/

(function(scope) {

	/**
	 * The SpriteSheet wrapper provides an easy way to use spriteSheets generated by Zoe
	 * which don't include path information, with a system that requires images to be in a
	 * subfolder. Simply use SpriteSheetWrapper instead of SpriteSheet, and pass in
	 * a relative path reference, and the image paths will be adjusted.
	 * @class SpriteSheetWrapper
	 * @param {Object} data SpriteSheet data
	 * @param {String} suffix The path relative to the game source. Something like "images/".
	 * @return {SpriteSheet} A SpriteSheet with adjusted paths.
	 * @constructor
	 */
	function SpriteSheetWrapper(data, suffix) {
		if (data == null) {
			Atari.trace("Error: Null object passed to SpriteSheetWrapper.");
			return null;
		}
		if (data.affected) { return new SpriteSheet(data); }
		suffix = suffix || "";
		var baseUrl = Atari.GameBootstrap.baseUrl + Atari.GameBootstrap.manifest.base + "src/" + suffix;
		var images = data.images;
		for (var i= 0, l=images.length; i<l; i++) {
			images[i] = baseUrl + images[i];
		}
		data.affected = true;
		return new createjs.SpriteSheet(data);
	}

	scope.SpriteSheetWrapper = SpriteSheetWrapper;

}(window.GameLibs))