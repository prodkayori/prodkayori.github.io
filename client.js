$(document).ready(function() {
    var links = [
		{
            name: 'ALONE THIS WINTER MUSIC VID',
            link: 'https://www.youtube.com/watch?v=e6OBX-nX510&ab_channel=kayori'
        },
		{
            name: 'STREAM "NEVERLAND" HERE',
            link: 'https://songwhip.com/vlx/neverland'
        },
		{
            name: 'IW4 All or Nothing (Open Source)',
            link: 'https://github.com/EMlLlYA/IW4-All-or-Nothing-Mod'
        },
    ];

    for(var i in links) {
        var link = links[i];

        $('#marquee').append('<a href="' + link.link + '" target="_blank">' + link.name + '</a>');

        var link = $('#marquee').children('a').last();

        if(i != links.length - 1) {
            $('#marquee').append(' · ');
        }
    }

    $('#marquee').marquee({
        duration: 20000,
        gap: 400,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    });
});
