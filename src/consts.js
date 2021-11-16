//This file contains constants variables used in the program

export const STAGES = {
    INTRO_STAGE: 0,
    CARD_STAGE: 1
};

export const CARS = [
    { brand: "Seat", icon: "assets/car-icon.png", link: 'https://www.seat.es/', 
        models: [
            {
                price: -1, link: 'https://www.seat.es/coches/ibiza-5-puertas/modelo.html', name: 'Ibiza', icon: 'https://www.seat.es/content/countries/es/seat-website/es/modelos/ibiza/_jcr_content.resizedViewPort.scale.rangeMiniature.png'
            
            }, 
            {
                price: 13000, link: 'https://www.seat.es/coches/nuevo-ibiza/modelo.html', name: 'Nuevo Ibiza', icon: 'https://www.seat.es/content/countries/es/seat-website/es/modelos/nuevo-ibiza/_jcr_content.resizedViewPort.scale.rangeMiniature.png'
            
            }, 
            {
                price: -1, link: 'https://www.seat.es/coches/arona/modelo.html', name: 'Arona', icon: 'https://www.seat.es/content/countries/es/seat-website/es/modelos/arona/_jcr_content.resizedViewPort.scale.rangeMiniature.png'
            
            }, 
            {
                price: 16670, link: 'https://www.seat.es/coches/nuevo-arona/modelo.html', name: 'Nuevo Arona', icon: 'https://www.seat.es/content/countries/es/seat-website/es/modelos/nuevo-arona/_jcr_content.resizedViewPort.scale.rangeMiniature.png'
            
            }, 
            {
                price: 18440, link: 'https://www.seat.es/coches/leon-5-puertas/modelo.html', name: 'Leon', icon: 'https://www.seat.es/content/countries/es/seat-website/es/modelos/nuevo-leon-2020/_jcr_content.resizedViewPort.scale.rangeMiniature.png'
            
            }, 
            {
                price: 19780, link: 'https://www.seat.es/coches/leon-sportstourer/modelo.html', name: 'Leon Sportstourer', icon: 'https://www.seat.es/content/countries/es/seat-website/es/modelos/nuevo-leon-sportstourer-2020/_jcr_content.resizedViewPort.scale.rangeMiniature.png'
            
            }, 
            {
                price: 21090, link: 'https://www.seat.es/coches/suv-ateca/modelo.html', name: 'Nuevo Ateca', icon: 'https://www.seat.es/content/countries/es/seat-website/es/modelos/nuevo-ateca/_jcr_content.resizedViewPort.scale.rangeMiniature.png'
            
            }, 
            {
                price: 31280, link: 'https://www.seat.es/coches/tarraco/modelo.html', name: 'Tarraco', icon: 'https://www.seat.es/content/countries/es/seat-website/es/modelos/tarraco/_jcr_content.resizedViewPort.scale.rangeMiniature.png'
            
            },
            {
                price: 38021, link: 'https://www.seat.es/coches/alhambra/modelo.html', name: 'Alhambra', icon: 'https://www.seat.es/content/countries/es/seat-website/es/modelos/alhambra/_jcr_content.resizedViewPort.scale.rangeMiniature.png'
            } 
        ]
    },
    { brand: "Dacia", icon: "assets/car-icon.png" , link: 'https://www.dacia.es/modelos',
        models: [ 
            {
                price: 8960, link: 'https://www.dacia.es/modelos/sandero.html', name: 'Nuevo Sandero', icon: 'https://www.dacia.es/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/d_brandSite_carPicker_1.png?uri=https%3A%2F%2Fes.co.rplug.renault.com%2Fproduct%2Fmodel%2FBI1%2Fnuevo-sandero%2Fc%2FA_-TERQH'
            }, 
            {
                price: 11518, link: 'https://www.dacia.es/modelos-glp/sandero-eco-g.html', name: 'Nuevo Sandero ECO-G', icon: 'https://www.dacia.es/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/d_brandSite_carPicker_1.png?uri=https%3A%2F%2Fes.co.rplug.renault.com%2Fproduct%2Fmodel%2FBI1%2Fnuevo-sandero%2Fc%2FA_-TERQH'
            }, 
            {
                price: 11840, link: 'https://www.dacia.es/modelos/logan.html', name: 'Nuevo Logan', icon: 'https://www.dacia.es/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/d_brandSite_carPicker_1.png?uri=https%3A%2F%2Fes.co.rplug.renault.com%2Fproduct%2Fmodel%2FLI1%2Fnuevo-logan%2Fc%2FA'
            }, 
            {
                price: 11840, link: 'https://www.dacia.es/modelos-glp/logan-eco-g.html', name: 'Nuevo Logan ECO-G', icon: 'https://www.dacia.es/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/d_brandSite_carPicker_1.png?uri=https%3A%2F%2Fes.co.rplug.renault.com%2Fproduct%2Fmodel%2FLI1%2Fnuevo-logan%2Fc%2FA'
            },
            {
                price: 12048, link: 'https://www.dacia.es/modelos/sandero-stepway.html', name: 'Nuevo Sandero Stepway', icon: 'https://www.dacia.es/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/d_brandSite_carPicker_1.png?uri=https%3A%2F%2Fes.co.rplug.renault.com%2Fproduct%2Fmodel%2FBI1%2Fnuevo-sandero%2Fc%2FA-ENS_0MDL2P1SERIELIM3_-TEEPY'
            }, 
            {
                price: 12548, link: 'https://www.dacia.es/modelos-glp/sandero-stepway-eco-g.html', name: 'Nuevo Sandero Stepway ECO-G', icon: 'https://www.dacia.es/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/d_brandSite_carPicker_1.png?uri=https%3A%2F%2Fes.co.rplug.renault.com%2Fproduct%2Fmodel%2FBI1%2Fnuevo-sandero%2Fc%2FA-ENS_0MDL2P1SERIELIM3_-TEEPY'
            }, 
            {
                price: 14200, link: 'https://www.dacia.es/modelos/duster.html', name: 'Nuevo Duster', icon: 'https://www.dacia.es/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/d_brandSite_carPicker_1.png?uri=https%3A%2F%2Fcdn.group.renault.com%2Fpackshots%2Fdacia-duster-xjd-ph2'
            }, 
            {
                price: 14200, link: 'https://www.dacia.es/modelos-glp/duster-eco-g.html', name: 'Nuevo Duster ECO-G', icon: 'https://www.dacia.es/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/d_brandSite_carPicker_1.png?uri=https%3A%2F%2Fcdn.group.renault.com%2Fpackshots%2Fdacia-duster-xjd-ph2'
            }, 
            {
                price: 15473, link: 'https://www.dacia.es/modelos/lodgy-stepway.html', name: 'Lodgy Stepway', icon: 'https://www.dacia.es/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/d_brandSite_carPicker_1.png?uri=https%3A%2F%2Fes.co.rplug.renault.com%2Fproduct%2Fmodel%2F92J%2Flodgy%2Fc%2FA-ENS_0MDL2PSL1SERIESPE4_-TERPL'
            }, 
            {
                price: 16905, link: 'https://www.dacia.es/modelos/spring-electrico.html', name: 'Spring', icon: 'https://www.dacia.es/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/d_brandSite_carPicker_1.png?uri=https%3A%2F%2Fes.co.rplug.renault.com%2Fproduct%2Fmodel%2FS1E%2Fspring%2Fc%2FA-ENS_0MDL2P1SERIELIM4_-TEKQE'
            }
        ]
    },
    { brand: "Kia", icon: "assets/car-icon.png", link: "https://www.kia.com/es/",
        models: [
            {
                price: 9900, link: 'https://www.kia.com/es/modelos/picanto/descubrelo/', name: 'Picanto', icon: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-picanto-jape-my21-gtl-explore-the-range-520x260.png'
            },
            {
                price: 11750, link: 'https://www.kia.com/es/modelos/rio/descubrelo/', name: 'Rio', icon: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-rio-yb-pe-my21-range-explore-268x134.png'
            },
            {
                price: 13600, link: 'https://www.kia.com/es/modelos/stonic/descubrelo/', name: 'Stonic', icon: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-stonic-gls-my22-range-v1-520x260.png'
            },
            {
                price: 14300, link: 'https://www.kia.com/es/modelos/ceed/descubrelo/', name: 'Nuevo Ceed', icon: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-ceed-gtl-my22-range-v1-520x260.png'
            },
            {
                price: 15550, link: 'https://www.kia.com/es/modelos/ceed-sw-ice-pe-my22/discover/', name: 'Nuevo Ceed Tourer ', icon: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-ceed-sportswagon-ice-gtl-my22-range-v1-520x260.png'
            },
            {
                price: 16900, link: 'https://www.kia.com/es/modelos/xceed/descubrelo/', name: 'XCeed', icon: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-xceed-cd-sb-my20-explore_520x260.png'
            },
            {
                price: 18450, link: 'https://www.kia.com/es/modelos/e-Soul/descubrelo/', name: 'e-Soul', icon: 'https://www.kia.com/content/dam/kwcms/kme/es/es/assets/contents/MovesIII/e-Soul/e_Soul_520x260.png'
            },
            {
                price: 19800, link: 'https://www.kia.com/es/modelos/e-niro/descubrelo/', name: 'e-Niro ', icon: 'https://www.kia.com/content/dam/kwcms/kme/es/es/assets/contents/MovesIII/e-niro/kia-niro-de-ev-my19-explore_520x260.png'
            },
            {
                price: 19800, link: 'https://www.kia.com/es/modelos/sportage/descubrelo/', name: 'Sportage', icon: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia_sportage_ql_gtline_my21_explore_520x260.png'
            },
            {
                price: 20800, link: 'https://www.kia.com/es/modelos/niro/descubrelo/', name: 'Niro', icon: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-niro-hev-my22-range-v1-520x260.png'
            },
            {
                price: 21050, link: 'https://www.kia.com/es/modelos/ceed-tourer/descubrelo/', name: 'Nuevo Ceed Tourer PHEV', icon: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-ceed-sportswagon-phev-my22-range-v1-520x260.png'
            },
            {
                price: 21200, link: 'https://www.kia.com/es/modelos/xceed-phev/descubrelo/', name: 'XCeed Hibrido PHEV', icon: 'https://www.kia.com/content/dam/kwcms/kme/es/es/assets/contents/MovesIII/XCeed_PHEV/Xceed_PHEV_520x260.png'
            },
            {
                price: 21399, link: 'https://www.kia.com/es/modelos/niro-phev/descubrelo/', name: 'Niro PHEV', icon: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-niro-phev-my22-range-v1-520x260.png'
            },
            {
                price: 23900, link: 'https://www.kia.com/es/modelos/proceed/descubrelo/', name: 'Nuevo Proceed', icon: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-proceed-gt-my22-range-v1-520x260.png'
            },
            {
                price: 34700, link: 'https://www.kia.com/es/modelos/ev6/descubrelo/', name: 'EV6', icon: 'https://www.kia.com/content/dam/kwcms/kme/es/es/assets/contents/EV6/EV6_520x260etiqueta.png'
            },
            {
                price: 42200, link: 'https://www.kia.com/es/modelos/sorento-hev/descubrelo/', name: 'Nuevo Sorento HEV', icon: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-sorento-hev-my22-range-v1-520x260.png'
            },
            {
                price: 42350, link: 'https://www.kia.com/es/modelos/sorento/descubrelo/', name: 'Nuevo Sorento', icon: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-sorento-mq4-ice-my21-520x260.png'
            },
            {
                price: 43199, link: 'https://www.kia.com/es/modelos/sorento-phev/descubrelo/', name: 'Nuevo Sorento PHEV', icon: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-sorento-phev-gls-my22-range-v1-520x260.png'
            },
            {
                price: 54400, link: 'https://www.kia.com/es/modelos/stinger/descubrelo/', name: 'Stinger', icon: 'https://www.kia.com/content/dam/kwcms/kme/es/es/assets/contents/pips/kia-stinger-gt-my22-range-v1-520x260.png'
            }
        ]
    },
    {
        brand: "Citroen", icon: "assets/car-icon.png", link: "https://www.citroen.es/",
        models: [
            {
                price: 12370, link: 'https://www.citroen.es/vehiculos/citroen/nuevo-c3.html', name: 'Nuevo C3', icon: 'https://visuel3d-secure.citroen.com/V3DImage.ashx?ratio=1&version=1CB6A5HNMJB0B450&quality=100&width=373&format=png&height=209&view=2&client=CPPv2&trim=0P230RFR&color=0MP00NWP'
            },
            {
                price: 18520, link: 'https://www.citroen.es/vehiculos/citroen/nuevo-suv-c3-aircross.html', name: 'Nuevo Suv C3 Aircross', icon: 'https://visuel3d-secure.citroen.com/V3DImage.ashx?ratio=1&version=1CW8AFHNNKB0A052&quality=100&width=373&format=png&height=209&view=2&client=CPPv2&trim=0P4Y0RFT&color=0MP00NWP'
            },
            {
                price: 20470, link: 'https://www.citroen.es/vehiculos/citroen/nuevo-c4.html', name: 'Nuevo C4', icon: 'https://visuel3d-secure.citroen.com/V3DImage.ashx?ratio=1&version=1CLEA5HPXKB0A020&quality=100&width=373&format=png&height=209&view=2&client=CPPv2&trim=0PS00RFY&color=0MP00NWP'
            }
        ]
    },
    {
        brand: "Ford", icon: "assets/car-icon.png", link: "https://www.ford.es/",
        models: [
            {
                price: 13460, link: 'https://www.ford.es/turismos/fiesta', name: 'Fiesta', icon: 'https://www.gpas-cache.ford.com/guid/6bfe6342-d7bd-314b-b78d-28d078f5c42b.png'
            },
            {
                price: 16560, link: 'https://www.ford.es/turismos/focus', name: 'Focus', icon: 'https://www.gpas-cache.ford.com/guid/df718500-43b2-3a49-b02d-3f3560f00c51.png'
            }
        ]
    },
    {
        brand: "Renault", icon: "assets/car-icon.png", link: "https://www.renault.es/",
        models: [
            {
                price: 10377, link: 'https://www.renault.es/turismos/clio.html', name: 'Clio', icon: 'https://www.renault.es/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Fes.co.rplug.renault.com%2Fproduct%2Fmodel%2FCL5%2Fnuevo-clio%2Fc%2FA-TEEQB'
            },
            {
                price: 16000, link: 'https://www.renault.es/turismos/captur.html', name: 'Captur', icon: 'https://www.renault.es/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Fes.co.rplug.renault.com%2Fproduct%2Fmodel%2FCP1%2Fnuevo-captur%2Fc%2FA-BIXWB'
            },
            {
                price: 16142, link: 'https://renault.es/turismos/megane.html', name: 'Megane', icon: 'https://www.renault.es/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Fes.co.rplug.renault.com%2Fproduct%2Fmodel%2FMB4%2Fmegane%2Fc%2FA-TEKQA'
            }
        ]
    },
    {
        brand: "Fiat", icon: "assets/car-icon.png", link: "https://www.fiat.es/",
        models: [
            {
                price: 9919, link: 'https://www.fiat.es/panda/panda-city-life', name: 'Panda City Life', icon: 'https://www.fiat.es/content/dam/fiat/cross/models/panda-2020/Fiat-panda-city-life_247x116.png'
            },
            {
                price: 13049, link: 'https://www.fiat.es/fiat-500l/500l-connect', name: '500L Connect', icon: 'https://www.fiat.es/content/dam/fiat/cross/models/cross/ourcars/1200/500L-connect-247x116.png'
            },
            {
                price: 13248, link: 'https://www.fiat.es/tipo/tipo-life-hatchback', name: 'Tipo Hatchback', icon: 'https://www.fiat.es/content/dam/fiat/cross/models/tipo_2020/Fiat-Tipo-life-hb_247x116.png'
            },
            {
                price: 13769, link: 'https://www.fiat.es/fiat-500x/500x-urban-cult', name: '500X Urban Cult', icon: 'https://lb.assets.fiat.com/vl-picker-service/assets/00/500x-s5-wccf/images/thumbnail/equipment/500X_CULT_562_404_tmb.png?width=482'
            }
        ]
    },
    {
        brand: "Nissan", icon: "assets/car-icon.png", link: "https://www.nissan.es/",
        models: [
            {
                price: 14150, link: 'https://www.nissan.es/vehiculos/nuevos-vehiculos/micra.html', name: 'Micra', icon: 'https://www-europe.nissan-cdn.net/content/dam/Nissan/es/vehicles/Nuevo_Micra/Desktop_Nuevo_Micra.png.ximg.l_3_m.smart.png'
            }, 
            {
                price: 18471, link: 'https://www.nissan.es/vehiculos/nuevos-vehiculos/juke.html', name: 'Juke', icon: 'https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/2019_NEW_NISSAN_JUKE/packshot-new-juke.JPG.ximg.l_3_m.smart.jpg'
            }, 
            {
                price: 21000, link: 'https://www.nissan.es/vehiculos/nuevos-vehiculos/leaf.html', name: 'LEAF', icon: 'https://www-europe.nissan-cdn.net/content/dam/Nissan/es/vehicles/Nuevo%20LEAF/LEAF-3000x1160_logo.jpg.ximg.l_3_m.smart.jpg'
            }, 
            {
                price: 25203, link: 'https://www.nissan.es/vehiculos/nuevos-vehiculos/navara.html', name: 'NAVARA', icon: 'https://www-europe.nissan-cdn.net/content/dam/Nissan/es/vehicles/NAVARA/d23/Desktop_Navara.jpg.ximg.l_3_m.smart.jpg'
            },
            {
                price: 25775, link: 'https://www.nissan.es/vehiculos/nuevos-vehiculos/qashqai.html', name: 'Nuevo Qashqai', icon: 'https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/2020_Qashqai_Full_PES/GRADES/20TDIEULHD_NEW_QASHQAI_PS_003.png.ximg.l_3_m.smart.png'
            }, 
            {
                price: 30450, link: 'https://www.nissan.es/vehiculos/nuevos-vehiculos/x-trail.html', name: 'X-Trail', icon: 'https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/x-trail/2_minor_change/eulhd/packshot/876125a-F77-17TDIEULHD_X-TRAIL_TEKNA_AMBER_003.jpg.ximg.l_3_m.smart.jpg'
            }, 
            {
                price: 38500, link: 'https://www.nissan.es/vehiculos/nuevos-vehiculos/e-nv200-evalia.html', name: 'E-NV200 EVALIA', icon: 'https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/e-nv200-evalia/me0/version/packshot/Desktop_e-NV200_Evalia_zero_emission.png.ximg.l_3_m.smart.png'
            }
        ]
    },
    {
        brand: "Peugeot", icon: "assets/car-icon.png", link: "https://www.peugeot.es/",
        models: [
            
        ]
    }
];
