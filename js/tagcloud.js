$( document ).ready( function() {

    var entries = [ 

        { image: './img/skills/html.png', width: '50', height: '50', url: '#', target: '_top',  tooltip: 'HTML' },
        { image: './img/skills/css.png', width: '50', height: '50', url: '#', target: '_top' ,  tooltip: 'CSS'},
        { image: './img/skills/js.png', width: '50', height: '50', url: '#', target: '_top' ,  tooltip: 'JAVASCRIPT'},
        { image: './img/skills/jquery.png', width: '50', height: '50', url: '#', target: '_top' ,  tooltip: 'JQUERY'},
        { image: './img/skills/bootstrap.png', width: '50', height: '50', url: '#', target: '_top' ,  tooltip: 'BOOTSTRAP'},
        { image: './img/skills/java.png', width: '50', height: '50', url: '#', target: '_top' ,  tooltip: 'JAVA'},
        { image: './img/skills/c++.png', width: '50', height: '50', url: '#', target: '_top' ,  tooltip: 'C++'},
        { image: './img/skills/c_sharp.png', width: '50', height: '50', url: '#', target: '_top' ,  tooltip: 'C#'},
        { image: './img/skills/python.png', width: '50', height: '50', url: '#', target: '_top',  tooltip: 'PYTHON' },
        { image: './img/skills/matlab.png', width: '50', height: '50', url: '#', target: '_top',  tooltip: 'MATLAB' },
        { image: './img/skills/sas.png', width: '50', height: '50', url: '#', target: '_top',  tooltip: 'SAS' },
        { image: './img/skills/spss.png', width: '50', height: '50', url: '#', target: '_top',  tooltip: 'SPSS' },
        { image: './img/skills/assembly.png', width: '50', height: '50', url: '#', target: '_top',  tooltip: 'ASSEMBLY' },
        { image: './img/skills/php.png', width: '50', height: '50', url: '#', target: '_top' ,  tooltip: 'PHP'},
        { image: './img/skills/sql.png', width: '50', height: '50', url: '#', target: '_top',  tooltip: 'SQL' },
        { image: './img/skills/mongo.png', width: '50', height: '50', url: '#', target: '_top' ,  tooltip: 'MONGODB'},
        { image: './img/skills/node.png', width: '50', height: '50', url: '#', target: '_top',  tooltip: 'NODEJS' },
        { image: './img/skills/git.png', width: '50', height: '50', url: '#', target: '_top' ,  tooltip: 'GIT'},
        { image: './img/skills/bitbucket.png', width: '50', height: '50', url: '#', target: '_top' ,  tooltip: 'BITBUCKET'},
        { image: './img/skills/ps.png', width: '50', height: '50', url: '#', target: '_top' ,  tooltip: 'PHOTOSHOP'},
        { image: './img/skills/ae.png', width: '50', height: '50', url: '#', target: '_top' ,  tooltip: 'AFTER EFFECTS'},
        { image: './img/skills/blockchain.png', width: '50', height: '50', url: '#', target: '_top',  tooltip: 'BLOCKCHAIN' },
        { image: './img/skills/solidity.png', width: '50', height: '50', url: '#', target: '_top',  tooltip: 'SOLIDITY' },
        { image: './img/skills/bitcoin.png', width: '50', height: '50', url: '#', target: '_top' ,  tooltip: 'BITCOIN'}
    ];

    var settings = {

        entries: entries,
        width: 600,
        height: 600,
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: '#2a2b30',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 1,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#fff',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $( '#holder' ).svg3DTagCloud( settings );

} );