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

hs.addSlideshow(new_cfg(baseConfig, 'moab'));
hs.addSlideshow(new_cfg(baseConfig, 'shasta'));
hs.addSlideshow(new_cfg(baseConfig, 'whitney'));
hs.addSlideshow(new_cfg(baseConfig, 'tuolumne'));
hs.addSlideshow(new_cfg(baseConfig, 'tallac'));
hs.addSlideshow(new_cfg(baseConfig, 'royal_arches'));
hs.addSlideshow(new_cfg(baseConfig, 'cathedral_peak'));
hs.addSlideshow(new_cfg(baseConfig, 'pinnacles'));
hs.addSlideshow(new_cfg(baseConfig, 'quatre_tetes'));
hs.addSlideshow(new_cfg(baseConfig, 'machete'));
hs.addSlideshow(new_cfg(baseConfig, 'mickey'));
hs.addSlideshow(new_cfg(baseConfig, 'grotto'));
hs.addSlideshow(new_cfg(baseConfig, 'yosemite'));
hs.addSlideshow(new_cfg(baseConfig, 'pinnacles2'));
hs.addSlideshow(new_cfg(baseConfig, 'eastbuttress'));
hs.addSlideshow(new_cfg(baseConfig, 'russell'));
hs.addSlideshow(new_cfg(baseConfig, 'tahoe'));
hs.addSlideshow(new_cfg(baseConfig, 'fairview'));
hs.addSlideshow(new_cfg(baseConfig, 'rouges'));
hs.addSlideshow(new_cfg(baseConfig, 'marion'));
hs.addSlideshow(new_cfg(baseConfig, 'shuteye'));
hs.addSlideshow(new_cfg(baseConfig, 'sierra'));
hs.addSlideshow(new_cfg(baseConfig, 'marion2'));
hs.addSlideshow(new_cfg(baseConfig, 'bostan'));
hs.addSlideshow(new_cfg(baseConfig, 'hpointe'));

var config_moab = new_cfg(baseConfig2, 'moab');
var config_shasta = new_cfg(baseConfig2, 'shasta');
var config_whitney = new_cfg(baseConfig2, 'whitney');
var config_tuolumne = new_cfg(baseConfig2, 'tuolumne');
var config_tallac = new_cfg(baseConfig2, 'tallac');
var config_royal_arches = new_cfg(baseConfig2, 'royal_arches');
var config_cathedral_peak = new_cfg(baseConfig2, 'cathedral_peak');
var config_pinnacles = new_cfg(baseConfig2, 'pinnacles');
var config_quatre_tetes = new_cfg(baseConfig2, 'quatre_tetes');
var config_machete = new_cfg(baseConfig2, 'machete');
var config_mickey = new_cfg(baseConfig2, 'mickey');
var config_grotto = new_cfg(baseConfig2, 'grotto');
var config_yosemite = new_cfg(baseConfig2, 'yosemite');
var config_pinnacles2 = new_cfg(baseConfig2, 'pinnacles2');
var config_eastbuttress = new_cfg(baseConfig2, 'eastbuttress');
var config_russell = new_cfg(baseConfig2, 'russell');
var config_tahoe = new_cfg(baseConfig2, 'tahoe');
var config_fairview = new_cfg(baseConfig2, 'fairview');
var config_rouges = new_cfg(baseConfig2, 'rouges');
var config_marion = new_cfg(baseConfig2, 'marion');
var config_shuteye = new_cfg(baseConfig2, 'shuteye');
var config_sierra = new_cfg(baseConfig2, 'sierra');
var config_marion2 = new_cfg(baseConfig2, 'marion2');
var config_bostan = new_cfg(baseConfig2, 'bostan');
var config_hpointe = new_cfg(baseConfig2, 'hpointe');


