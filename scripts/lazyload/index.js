'use strict';

hexo.extend.filter.register('after_post_render', (data) => {
    const config = hexo.config.lazyload;

    if (!config || config.enable !== true) {
        return;
    }

    const loadingImage = 'https://cdn.isteed.cc/img/svg/loading.svg';

    data.content = data.content.replace(/<img(.*?)src="(.*?)"(.*?)>/gi, (str, p1, p2) => {
        if (/data-srcset/gi.test(str)) {
            return str;
        }
        if (/src="data:image(.*?)/gi.test(str)) {
            return str;
        }
        if (/no-lazy/gi.test(str)) {
            return str;
        }

        return str.replace(p2, `${p2}" class="lazy" data-srcset="${p2}" srcset="${loadingImage}`);
    });
});
