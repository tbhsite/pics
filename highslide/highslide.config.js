hs.graphicsDir = 'highslide/graphics/';
hs.showCredits = false;
hs.outlineType = 'custom';
hs.dimmingOpacity = 0.75;
hs.fadeInOut = true;
hs.align = 'center';
hs.marginBottom = 65;
hs.allowMultipleInstances = false;
hs.blockRightClick = true;
hs.captionEval = 'this.a.title';
hs.stripItemFormatter = function (a) {
    if (a.children.length == 1)
        return a.innerHTML
    else {
        var img = a.children[0];
        var jqimg = $(img);
        jqimg.attr('src', jqimg.data('original'));
        img.loaded = true;
        return img.outerHTML;
    }
}


var baseConfig = {
	interval: 5000,
	repeat: false,
	useControls: true,
	fixedControls: false,
	overlayOptions: {
		className: 'large-dark',
		opacity: 1,
		position: 'bottom center',
		offsetX: 0,
		offsetY: -10,
		hideOnMouseOut: true
	},
	thumbstrip: {
		mode: 'horizontal',
		position: 'bottom center',
		relativeTo: 'viewport'
	}
};

var baseConfig2 = {
	numberPosition: null,
	transitions: ['expand', 'crossfade']
};

function new_cfg(m1, group) {
    var m2 = {};
    for(x in m1)
        m2[x] = m1[x];
    m2['slideshowGroup'] = group;
    return m2;
}
