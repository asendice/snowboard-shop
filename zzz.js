const DUMMY_DATA = [

  //Clothes ///
  // {
  //   "title": "Billabong Delta STX Snowboard Jacket",
  //   "brand": "Billabong",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/billabong-delta-stx-jacket-dark-forest-22-zoom.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Medium", "Large", "X-Large"],
  //   "color": "Dark Forest", 
  //   "price": "319.95",
  //   "type": "Insulated",
  //   "waterproof": "15,000mm",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "Billabong Expedition Snowboard Jacket",
  //   "brand": "Billabong",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/billabong-expedition-jacket-black-reflective-camo-21-zoom.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Medium", "Large", "Small"],
  //   "color": "Black Reflective Camo", 
  //   "price": "160.95",
  //   "type": "Insulated",
  //   "waterproof": "14,000mm",
  //   "material": "100% Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "yes, stretch",
  //   "hood": "Hooded, Fully Adjustable"
  // },
  // {
  //   "title": "Billabong Prism Shell Snowboard Jacket",
  //   "brand": "Billabong",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/billabong-prism-shell-jacket-magma-19-zoom.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Small"],
  //   "color": "Magma", 
  //   "price": "148.95",
  //   "type": "Technical Shell",
  //   "waterproof": "Not Specified",
  //   "material": "Sympatex",
  //   "fit": "Regular",
  //   "powder_skirt": "yes, removeable",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "Billabong Arcade Snowboard Jacket",
  //   "brand": "Billabong",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/billabong-arcade-jacket-desert-camo-22-prod.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Small", "Medium", "Large"],
  //   "color": "Desert Camo", 
  //   "price": "199.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Sympatex",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "Burton Covert Slim Jacket",
  //   "brand": "Burton",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/burton-covert-slim-snowboard-jacket-bog-heather-20.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large"],
  //   "color": "Denim", 
  //   "price": "219.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Recycled Fibers",
  //   "fit": "Slim Fit",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": true
  // },
  // {
  //   "title": "Burton AK LZ Down Gore-Tex Snowboard Jacket",
  //   "brand": "Burton",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/burton-ak-lz-down-gore-tex-snowboard-jacket-true-black-20-zoom.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Large", "X-Large"],
  //   "color": "True Black", 
  //   "price": "629.95",
  //   "type": "Down, Insulated",
  //   "waterproof": "Gore-Tex 2L",
  //   "material": "GORE-TEX",
  //   "fit": "Slim Fit",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "Burton Gore-Tex Edgecomb 3-in-1 Snowboard Jacket",
  //   "brand": "Burton",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/burton-ak-lz-down-gore-tex-snowboard-jacket-true-black-20-zoom.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Medium"],
  //   "color": "Keef/True Black", 
  //   "price": "262.95",
  //   "type": "Down, Insulated",
  //   "waterproof": "Gore-Tex 2L",
  //   "material": "GORE-TEX",
  //   "fit": "Regular",
  //   "powder_skirt": "no",
  //   "hood": "Hooded",
  //   "venting": "no",
  //   "featured": false
  // },
  // {
  //   "title": "Chamonix Monty Coaches Snowboard Jacket",
  //   "brand": "Chamonix",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/chamonix-monty-coaches-jkt-army-20.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large"],
  //   "color": "Army Green", 
  //   "price": "55.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Nylon",
  //   "fit": "Slim Fit",
  //   "powder_skirt": "no",
  //   "hood": "Hooded",
  //   "venting": "no",
  //   "featured": false
  // },
  // {
  //   "title": "Chamonix Stirling Snowboard Jacket",
  //   "brand": "Chamonix",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/chamonix-stirling-snowboard-jacket-iron-19-zoom.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Large"],
  //   "color": "Iron Grey", 
  //   "price": "120.00",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "75D Polyester",
  //   "fit": "Slim Fit",
  //   "powder_skirt": "no",
  //   "hood": "Hooded, Removeable",
  //   "venting": "no",
  //   "featured": false
  // },
  // {
  //   "title": "The North Face Brigandine FutureLight Snowboard Jacket",
  //   "brand": "The North Face",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/tnf-brigandine-futurelight-jacket-vivid-orange-rosin-green-22.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Medium", "Large"],
  //   "color": "Vivid Orange", 
  //   "price": "749.95",
  //   "type": "Technical Shell",
  //   "waterproof": "DWR",
  //   "material": "FUTURELIGHT",
  //   "fit": "Regular",
  //   "powder_skirt": "no",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "The North Face Chakal Snowboard Jacket",
  //   "brand": "The North Face",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/tnf-chakal-jacket-blue-wing-teal-aviator-navy-21-zoom.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Medium", "Large", "X-Large", "XX-Large"],
  //   "color": "Blue Wing Teal", 
  //   "price": "225.95",
  //   "type": "Insulated",
  //   "waterproof": "Not Specified",
  //   "material": "FUTURELIGHT",
  //   "fit": "Regular",
  //   "powder_skirt": "no",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "The North Face Balfron Snowboard Jacket",
  //   "brand": "The North Face",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/tnf-balfron-jacket-tnf-black-binary-half-dome-print-22.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Medium", "Large", "X-Large",],
  //   "color": "Black Print", 
  //   "price": "198.95",
  //   "type": "Insulated",
  //   "waterproof": "Not Specified",
  //   "material": "Nylon",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "The North Face Balfron Snowboard Jacket",
  //   "brand": "The North Face",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/tnf-balfron-jacket-tnf-black-night-green-22.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Medium", "Large", "X-Large",],
  //   "color": "Night Green", 
  //   "price": "198.95",
  //   "type": "Insulated",
  //   "waterproof": "Not Specified",
  //   "material": "Nylon",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "The North Face Dragline Snowboard Jacket",
  //   "brand": "The North Face",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/tnf-dragline-jacket-night-green-22.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Small","Medium", "Large", "X-Large"],
  //   "color": "Night Green", 
  //   "price": "429.95",
  //   "type": "Technical Shell",
  //   "waterproof": "Not Specified",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "Quiksilver Black Alder 2L Gore-Tex Snowboard Jacket",
  //   "brand": "Quiksilver",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/quiksilver-black-alder-2l-gore-tex-jacket-grape-leaf-20.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Small","Medium", "Large", "X-Large"],
  //   "color": "Otter", 
  //   "price": "399.95",
  //   "type": "Gore-Tex",
  //   "waterproof": "Gore-Tex 2L",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "yes, snap-away",
  //   "hood": "Hooded, Adjustable",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "Quiksilver Mamatus 3L Gore-Tex Snowboard Jacket",
  //   "brand": "Quiksilver",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/quiksilver-mamatus-3l-gore-tex-jacket-black-20.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Small","Medium", "Large"],
  //   "color": "Black", 
  //   "price": "549.95",
  //   "type": "Gore-Tex",
  //   "waterproof": "Gore-Tex 3L",
  //   "material": "Nylon Polymide",
  //   "fit": "Slim Fit",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "Quiksilver Mission 3 In 1 Snowboard Jacket",
  //   "brand": "Quiksilver",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/quiksilver-mission-3-in-1-jacket-pureed-pumpkin-21.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Small","Medium", "Large", "X-Large"],
  //   "color": "Pureed Pumpkin", 
  //   "price": "449.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Slim Fit",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "DC Cadet Snowboard Jacket",
  //   "brand": "DC",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/dc-cadet-jacket-woodland-camo-castlerock-22.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Medium", "Large", "X-Large"],
  //   "color": "Camo", 
  //   "price": "179.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "DC Propaganda Snowboard Jacket",
  //   "brand": "DC",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/dc-propaganda-jacket-black-21.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["X-Small","Small","Medium", "Large", "X-Large"],
  //   "color": "Black", 
  //   "price": "189.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": true
  // },
  // {
  //   "title": "DC Command Snowboard Jacket",
  //   "brand": "DC",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/dc-command-jacket-black-22.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Medium", "Large", "X-Large" , "XX-Large"],
  //   "color": "Black", 
  //   "price": "299.95",
  //   "type": "Technical Shell",
  //   "waterproof": "30,000mm",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "DC Anchor Snowboard Jacket",
  //   "brand": "DC",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/dc-anchor-jacket-olive-night-22.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Small","Medium", "Large", "X-Large" , "XX-Large"],
  //   "color": "Olive Night", 
  //   "price": "189.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "DC Servo Snowboard Jacket",
  //   "brand": "DC",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/dc-servo-jacket-tarmac-21.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Small","Medium", "Large", "X-Large" , "XX-Large"],
  //   "color": "Tarmac", 
  //   "price": "199.95",
  //   "type": "Insulated",
  //   "waterproof": "15,000mm",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": true
  // },
  // {
  //   "title": "DC Defy Snowboard Jacket",
  //   "brand": "DC",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/dc-defy-jacket-castlerock-22.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Small","Medium", "Large", "X-Large" , "XX-Large"],
  //   "color": "Black", 
  //   "price": "199.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "Volcom Deadly Stones Insulated Snowboard Jacket",
  //   "brand": "Volcom",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/volcom-deadly-stones-insulated-jacket-dark-teak-22.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Small","Medium", "Large", "X-Large" , "XX-Large"],
  //   "color": "Dark Teak", 
  //   "price": "210.00",
  //   "type": "Insulated",
  //   "waterproof": "15,000mm",
  //   "material": "V-Science",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "Volcom Brighton Anorak Snowboard Jacket",
  //   "brand": "Volcom",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/volcom-brighton-anorak-jacket-dark-grey-22.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Small","Medium", "Large", "X-Large"],
  //   "color": "Dark Grey", 
  //   "price": "280.00",
  //   "type": "Anorak",
  //   "waterproof": "15,000mm",
  //   "material": "V-Science",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "Volcom Longo Anorak Snowboard Jacket",
  //   "brand": "Volcom",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/volcom-longo-anorak-jacket-jade-22.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Small","Medium", "Large", "X-Large"],
  //   "color": "Jade", 
  //   "price": "210.00",
  //   "type": "Anorak",
  //   "waterproof": "10,000mm",
  //   "material": "V-Science",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "Volcom 17Forty Insulated Snowboard Jacket",
  //   "brand": "Volcom",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/volcom-17forty-insulated-jacket-gold-22.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Small","Medium", "Large", "X-Large"],
  //   "color": "Gold", 
  //   "price": "175.00",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "V-Science",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "Volcom L Gore-Tex Snowboard Jacket",
  //   "brand": "Volcom",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/volcom-l-gore-tex-jacket-army-21.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Small","Medium", "Large", "XX-Large"],
  //   "color": "Army Camo", 
  //   "price": "159.95",
  //   "type": "Gore-Tex",
  //   "waterproof": "Gore-Tex 2L",
  //   "material": "Nylon",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": false
  // },
  // {
  //   "title": "Volcom Puff Puff Give Snowboard Jacket",
  //   "brand": "Volcom",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/volcom-puff-puff-give-jacket-black-on-black-20.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Small","Medium", "Large", "X-Large"],
  //   "color": "Black", 
  //   "price": "146.95",
  //   "type": "Insulated",
  //   "waterproof": "Not Specified",
  //   "material": "Nylon",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Non Hooded",
  //   "venting": "no",
  //   "featured": false
  // },
  // {
  //   "title": "Volcom L Gore-Tex Insulated Snowboard Jacket",
  //   "brand": "Volcom",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/volcom-l-gore-tex-insulated-jacket-red-22.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Large", "X-Large", "XX-Large"],
  //   "color": "Red", 
  //   "price": "295.00",
  //   "type": "Gore-Tex",
  //   "waterproof": "Gore-Tex 2L",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Non Hooded",
  //   "venting": "no",
  //   "featured": false
  // },
  // {
  //   "title": "Volcom Longo Gore-Tex Snowboard Jacket",
  //   "brand": "Volcom",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/volcom-longo-gore-tex-jacket-faded-lemon-22.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["Large", "X-Large", "XX-Large"],
  //   "color": "Faded Lemon", 
  //   "price": "350.00",
  //   "type": "Gore-Tex",
  //   "waterproof": "Gore-Tex 2L",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "yes",
  //   "hood": "Non Hooded",
  //   "venting": "no",
  //   "featured": true
  // },
  // {
  //   "title": "Columbia Bugaboo II Fleece Interchange Extended SZ Ski Jacket",
  //   "brand": "Columbia",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/columbia-bugaboo-ii-fleece-interchange-extended-sz-ski-jacket-rd-element-dark-mtn-buff-camo-graphite-19-zoom.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": ["XX-Large"],
  //   "color": "Red", 
  //   "price": "140.95",
  //   "type": "Insulated",
  //   "waterproof": "Not Specified",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "no",
  //   "hood": "Hooded, removeable, adjustable",
  //   "venting": "no",
  //   "featured": false
  // },
  // {
  //   "title": "Columbia Last Tracks Snowboard Jacket",
  //   "brand": "Columbia",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/columbia-last-tracks-jacket-black-21.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": [ "Medium", "Large", "X-Large",],
  //   "color": "Black", 
  //   "price": "175.00",
  //   "type": "Insulated",
  //   "waterproof": "Not Specified",
  //   "material": "Nylon",
  //   "fit": "Regular",
  //   "powder_skirt": "no",
  //   "hood": "Hooded",
  //   "venting": "no",
  //   "featured": false
  // },
  // {
  //   "title": "Columbia Powder Lite Anorak Snowboard Jacket",
  //   "brand": "Columbia",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/columbia-powder-lite-anorak-jacket-shark-harvester-22.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": [ "Medium", "Large", "X-Large"],
  //   "color": "Orange", 
  //   "price": "175.00",
  //   "type": "Anorak",
  //   "waterproof": "Not Specified",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "no",
  //   "hood": "Hooded",
  //   "venting": "no",
  //   "featured": true
  // },
  // {
  //   "title": "Columbia Snow Country Hooded Snowboard Jacket",
  //   "brand": "Columbia",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/columbia-snow-country-hooded-ski-jacket-black-20.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": [ "Medium", "Large", "X-Large",],
  //   "color": "Black", 
  //   "price": "175.00",
  //   "type": "Insulated",
  //   "waterproof": "Not Specified",
  //   "material": "Nylon",
  //   "fit": "Regular",
  //   "powder_skirt": "no",
  //   "hood": "Hooded",
  //   "venting": "no",
  //   "featured": true
  // },
  // {
  //   "title": "Columbia Pike Lake Snowboard Jacket",
  //   "brand": "Columbia",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/columbia-snow-country-hooded-ski-jacket-black-20.jpeg"
  //   ],
  //   "gender": "mens",
  //   "size": [ "Medium", "Large", "X-Large"],
  //   "color": "Black", 
  //   "price": "180.00",
  //   "type": "Insulated",
  //   "waterproof": "Not Specified",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "no",
  //   "hood": "Non Hooded",
  //   "venting": "no",
  //   "featured": false
  // },
  // {
  //   "title": "DC Savvy Anorak Snowboard Jacket - Womens",
  //   "brand": "DC",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/dc-savvy-anorak-jacket-wmns-multi-bandana-22.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "X-Small","Small","Medium", "Large", "X-Large",],
  //   "color": "Multi Bandana", 
  //   "price": "189.95",
  //   "type": "Anorak",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Slim Fit",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "yes",
  //   "featured": true
  // },
  // {
  //   "title": "DC DCSC Snowboard Jacket - Womens",
  //   "brand": "DC",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/dc-dcsc-jacket-wmns-grey-morn-21.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "X-Small","Small","Medium", "Large", "X-Large",],
  //   "color": "Grey", 
  //   "price": "142.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": false
  // },
  // {
  //   "title": "DC Liberate Snowboard Jacket - Womens",
  //   "brand": "DC",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/dc-liberate-jacket-wmns-andora-22.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "X-Small","Small","Medium", "Large"],
  //   "color": "Andora", 
  //   "price": "239.95",
  //   "type": "Insulated",
  //   "waterproof": "15,000mm",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": true
  // },
  // {
  //   "title": "DC Cruiser Snowboard Jacket - Womens",
  //   "brand": "DC",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/dc-cruiser-jacket-wmns-watercolor-tie-dye-22.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "Small","Medium", "Large"],
  //   "color": "Watercolor", 
  //   "price": "199.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Slim Fit",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": false
  // },
  // {
  //   "title": "DC Cruiser Snowboard Jacket - Womens",
  //   "brand": "DC",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/dc-cruiser-jacket-wmns-black-21.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "Small","Medium", "Large"],
  //   "color": "Black", 
  //   "price": "199.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Slim Fit",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": true
  // },
  // {
  //   "title": "Billabong Eclipse Snowboard Jacket - Womens",
  //   "brand": "Billabong",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/billabong-eclipse-jacket-wmns-vintage-gold-22-zoom.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "Small", "Medium", "Large"],
  //   "color": "Gold", 
  //   "price": "219.95",
  //   "type": "Insulated",
  //   "waterproof": "15,000mm",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": false
  // },
  // {
  //   "title": "Billabong Good Life Snowboard Jacket - Womens",
  //   "brand": "Billabong",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/billabong-good-life-jacket-wmns-floral-22.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "Small", "Medium", "Large"],
  //   "color": "Floral", 
  //   "price": "199.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": false
  // },
  // {
  //   "title": "Billabong Sula Snowboard Jacket - Womens",
  //   "brand": "Billabong",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/billabong-sula-jacket-wmns-black-22.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "Small", "Medium", "Large"],
  //   "color": "Black", 
  //   "price": "179.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Slim Fit",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": true
  // },
  // {
  //   "title": "The North Face Descendit Snowboard Jacket - Womens",
  //   "brand": "The North Face",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/billabong-sula-jacket-wmns-black-22.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "Small", "Medium"],
  //   "color": "Floral", 
  //   "price": "269.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Slim Fit",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": false
  // },
  // {
  //   "title": "The North Face Clementine Triclimate Snowboard Jacket - Womens",
  //   "brand": "The North Face",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/tnf-clementine-triclimate-jacket-wmns-tnf-black-tnf-medium-grey-heather-21.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "Small", "Medium"],
  //   "color": "Black", 
  //   "price": "299.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": true
  // },
  // {
  //   "title": "The North Face Garner Triclimate Snowboard Jacket - Womens",
  //   "brand": "The North Face",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/tnf-garner-triclimate-jacket-wmns-silver-blue-balsam-green-balsam-green-22.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "Small", "Medium"],
  //   "color": "Blue", 
  //   "price": "289.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": false
  // },
  // {
  //   "title": "Burton Keelan Blem Snowboard Jacket - Womens",
  //   "brand": "Burton",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/burton-keelan-jacket-wmns-stout-white-stylus-stout-white-20.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "Small"],
  //   "color": "White", 
  //   "price": "239.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": false
  // },
  // {
  //   "title": "Burton Evergreen Long Down Snowboard Jacket - Womens",
  //   "brand": "Burton",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/burton-evergreen-long-down-jacket-wmns-dress-blue-stylus-green-blue-slate-20.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "Small"],
  //   "color": "Blue", 
  //   "price": "279.95",
  //   "type": "Down",
  //   "waterproof": "DWR",
  //   "material": "DRYRIDE",
  //   "fit": "Regular",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "No",
  //   "featured": false
  // },
  // {
  //   "title": "Burton AK Gore-Tex 3L Kimmy Stretch Snowboard Jacket - Womens",
  //   "brand": "Burton",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/burton-evergreen-long-down-jacket-wmns-dress-blue-stylus-green-blue-slate-20.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "X-Small"],
  //   "color": "Black", 
  //   "price": "574.95",
  //   "type": "Gore-Tex",
  //   "waterproof": "Gore-Tex 3L",
  //   "material": "Gore-Tex",
  //   "fit": "Regular",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "No",
  //   "featured": false
  // },
  // {
  //   "title": "Burton Kaylo Gore-Tex Snowboard Jacket - Womens",
  //   "brand": "Burton",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/burton-kaylo-gore-tex-jacket-wmns-true-black-21-zoom.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "X-Small", "Small", "Medium"],
  //   "color": "Black", 
  //   "price": "269.95",
  //   "type": "Gore-Tex",
  //   "waterproof": "Gore-Tex 2L",
  //   "material": "Gore-Tex",
  //   "fit": "Regular",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "No",
  //   "featured": false
  // },
  // {
  //   "title": "Roxy Jet Ski Premium Snowboard Jacket - Womens",
  //   "brand": "Roxy",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/roxy-jet-ski-premium-jacket-wmns-true-black-blooming-party-21.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "X-Small", "Small", "Medium"],
  //   "color": "Floral", 
  //   "price": "299.95",
  //   "type": "Gore-Tex",
  //   "waterproof": "15,000mm",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": false
  // },
  // {
  //   "title": "Roxy Jetty Snowboard Jacket - Womens",
  //   "brand": "Roxy",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/roxy-jetty-jacket-wmns-bright-white-macha-22.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "X-Small", "Small", "Medium"],
  //   "color": "White", 
  //   "price": "199.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Regular",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": false
  // },
  // {
  //   "title": "Roxy Torah Bright Summit Snowboard Jacket - Womens",
  //   "brand": "Roxy",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/roxy-torah-bright-summit-wmns-snowboard-jkt-true-black-magnolia-20.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "X-Small", "Small", "Medium"],
  //   "color": "Floral", 
  //   "price": "319.95",
  //   "type": "Insulated",
  //   "waterproof": "15,000mm",
  //   "material": "Polyester",
  //   "fit": "Slim Fit",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded, removeable",
  //   "venting": "Yes",
  //   "featured": false
  // },
  // {
  //   "title": "Roxy Billie Snowboard Jacket - Womens",
  //   "brand": "Roxy",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/roxy-billie-jacket-wmns-ocean-depths-21.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "X-Small", "Small", "Medium", "Large"],
  //   "color": "Blue", 
  //   "price": "189.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Slim Fit",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded, removeable",
  //   "venting": "Yes",
  //   "featured": false
  // },
  // {
  //   "title": "Roxy Quinn Snowboard Jacket - Womens",
  //   "brand": "Roxy",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/roxy-quinn-jacket-wmns-true-black-21.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "X-Small", "Small", "Medium", "Large"],
  //   "color": "Black", 
  //   "price": "279.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Slim Fit",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": true
  // },
  // {
  //   "title": "Roxy Jet Ski Snowboard Jacket - Womens",
  //   "brand": "Roxy",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/roxy-jet-ski-wmns-snowboard-jkt-bright-white-aquarel-flowers-20.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "X-Small", "Small", "Medium", "Large"],
  //   "color": "Floral", 
  //   "price": "199.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Polyester",
  //   "fit": "Slim Fit",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded, removeable",
  //   "venting": "Yes",
  //   "featured": true
  // },
  // {
  //   "title": "Roxy Premiere Snowboard Jacket - Womens",
  //   "brand": "Roxy",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/roxy-premiere-snowboard-jacket-true-black-20.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "X-Small", "Small", "Medium", "Large", "X-Large"],
  //   "color": "Black", 
  //   "price": "329.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Nylon",
  //   "fit": "Regular",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded, adjustable",
  //   "venting": "Yes",
  //   "featured": false
  // },
  // {
  //   "title": "Roxy Jetty Block Snowboard Jacket - Womens",
  //   "brand": "Roxy",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/roxy-jetty-block-jacket-wmns-silver-pink-tie-dye-21.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "X-Small", "Small", "Medium", "Large", "X-Large"],
  //   "color": "Pink", 
  //   "price": "199.95",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Nylon",
  //   "fit": "Regular",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": false
  // },
  // {
  //   "title": "Volcom Mirror Anorak Snowboard Jacket - Womens",
  //   "brand": "Volcom",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/volcom-mirror-anorak-jacket-wmns-coffee-22.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "X-Small", "Small", "Medium", "Large"],
  //   "color": "Coffee", 
  //   "price": "200.00",
  //   "type": "Anorak",
  //   "waterproof": "10,000mm",
  //   "material": "V-Science",
  //   "fit": "Regular",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": false
  // },
  // {
  //   "title": "Volcom Fawn Insulated Snowboard Jacket - Womens",
  //   "brand": "Volcom",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/volcom-fawn-insulated-jacket-wmns-acid-merlot-22.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "X-Small", "Small", "Medium", "Large"],
  //   "color": "Red", 
  //   "price": "220.00",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "V-Science",
  //   "fit": "Long",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": false
  // },
  // {
  //   "title": "Volcom Bolt Insulated Snowboard Jacket - Womens",
  //   "brand": "Volcom",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/volcom-bolt-insulated-jacket-wmns-bright-pink-21.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "X-Small", "Small", "Medium", "Large"],
  //   "color": "Pink", 
  //   "price": "175.00",
  //   "type": "Insulated",
  //   "waterproof": "10,000mm",
  //   "material": "Nylon",
  //   "fit": "Slim Fit",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": false
  // },
  // {
  //   "title": "Volcom Leda Gore-Tex Snowboard Jacket - Womens",
  //   "brand": "Volcom",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/volcom-leda-gore-tex-jacket-wmns-black-red-21.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "X-Small", "Small", "Medium", "Large"],
  //   "color": "Black", 
  //   "price": "340.00",
  //   "type": "Gore-Tex",
  //   "waterproof": "Gore-Tex 2L",
  //   "material": "Nylon",
  //   "fit": "Regular",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": false
  // },
  // {
  //   "title": "Volcom Fern Insulated Gore-Tex Anorak Snowboard Jacket - Womens",
  //   "brand": "Volcom",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/clothing-img/volcom-fern-insulated-gore-tex-anorak-jacket-wmns-hazey-pink-22.jpeg"
  //   ],
  //   "gender": "womens",
  //   "size": [ "X-Small", "Small", "Medium", "Large"],
  //   "color": "Pink", 
  //   "price": "285.00",
  //   "type": "Gore-Tex",
  //   "waterproof": "Gore-Tex 2L",
  //   "material": "Nylon",
  //   "fit": "Regular",
  //   "powder_skirt": "Yes",
  //   "hood": "Hooded",
  //   "venting": "Yes",
  //   "featured": false



  /// SNOWBOARDS ///
  // {
  //   "title": "GNU Ravish Snowboard - Womens 2022",
  //   "brand": "GNU",
  //   "gender": "womens",
  //   "size": ["152"],
  //   "price": "459.99",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/gnu-ravish-snowboard-wmns-22-zoom.jpeg"
  //   ],
  //   "type": ["Freeride", "All Mountain"],
  //   "shape": "Directional",
  //   "camber": ["Hybrid", "Rocker/Camber"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Rossignol After Hours Snowboard - Womens 2022",
  //   "brand": "Rossignol",
  //   "gender": "womens",
  //   "size": ["145"],
  //   "price": "459.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/rossignol-after-hours-snowboard-wmns-all-21-zoom.jpeg"
  //   ],
  //   "type": ["Powder", "Freeride", "All Mountain"],
  //   "shape": "Directional",
  //   "camber": ["Hybrid", "Rocker/Camber"],
  //   "flex": "Medium/Stiff",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Roxy Banana Smoothie Snowboard - Womens 2022",
  //   "brand": "Roxy",
  //   "gender": "womens",
  //   "size": ["143", "146"],
  //   "price": "459.99",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/roxy-banana-smoothie-snowboard-wmns-22-zoom.jpeg"
  //   ],
  //   "type": ["Freeride", "All Mountain"],
  //   "shape": "Directional",
  //   "camber": ["Camber", "Rocker/Camber"],
  //   "flex": "Medium/Stiff",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "CAPiTA The Equalizer Snowboard - Womens 2022",
  //   "brand": "CAPiTA",
  //   "gender": "womens",
  //   "size": ["142", "146"],
  //   "price": "529.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/capita-the-equalizer-snowboard-wmns-22-zoom.jpeg"
  //   ],
  //   "type": ["Freeride", "Freestyle", "All Mountain"],
  //   "shape": "Directional",
  //   "camber": ["Hybrid", "Camber/Flat(in tail)", "Rocker"],
  //   "flex": "Medium/Stiff",
  //   "width": "Regular",
  //   "featured": true,
  // },
  // {
  //   "title": "Rome Royal Snowboard - Womens 2022",
  //   "brand": "Rome Royal",
  //   "gender": "womens",
  //   "size": ["141", "144", "147"],
  //   "price": "389.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/rome-royal-snowboard-wmns-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain"],
  //   "shape": "Twin",
  //   "camber": ["Hybrid"],
  //   "flex": "Soft",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Roxy XOXO Snowboard - Womens 2022",
  //   "brand": "Roxy",
  //   "gender": "womens",
  //   "size": ["139", "145", "149"],
  //   "price": "429.99",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/roxy-xoxo-snowboard-wmns-22-zoom.jpeg"
  //   ],
  //   "type": ["Freestyle", "All Mountain"],
  //   "shape": "Twin",
  //   "camber": ["Camber"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": true,
  // },
  // {
  //   "title": "K2 Lime Lite Snowboard - Womens 2022",
  //   "brand": "K2",
  //   "gender": "womens",
  //   "size": ["153"],
  //   "price": "399.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/k2-lime-lite-snowboard-wmns-22-zoom.jpeg"
  //   ],
  //   "type": ["Freestyle", "Park"],
  //   "shape": "Twin",
  //   "camber": ["Camber", "Camber/Rocker"],
  //   "flex": "Soft/Medium",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Jones Flagship Snowboard - Womens 2022",
  //   "brand": "Jones",
  //   "gender": "womens",
  //   "size": ["146", "159"],
  //   "price": "649.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/jones-flagship-snowboard-wmns-22-zoom.jpeg"
  //   ],
  //   "type": ["Freedride"],
  //   "shape": "Directional",
  //   "camber": ["Hybrid", "Camber/Rocker"],
  //   "flex": "Medium/Stiff",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "GNU Barrett Snowboard - Womens 2022",
  //   "brand": "GNU",
  //   "gender": "womens",
  //   "size": ["146", "159"],
  //   "price": "499.99",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/gnu-barrett-snowboard-wmns-22-zoom.jpeg"
  //   ],
  //   "type": ["Freedride", "All Mountain"],
  //   "shape": "Directional",
  //   "camber": ["Camber"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Rossignol Airis Snowboard - Womens 2022",
  //   "brand": "Rossignol",
  //   "gender": "womens",
  //   "size": ["143", "146", "149", "152"],
  //   "price": "499.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/rossignol-airis-snowboard-wmns-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain"],
  //   "shape": "Directional",
  //   "camber": ["Hybrid", "Camber/Rocker"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": true,
  // },
  // {
  //   "title": "Burton Rewind Snowboard - Womens 2022",
  //   "brand": "Burton",
  //   "gender": "womens",
  //   "size": ["152"],
  //   "price": "499.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/burton-rewind-snowboard-wmns-22-zoom.jpeg"
  //   ],
  //   "type": ["Park"],
  //   "shape": "Twin",
  //   "camber": ["Camber", "Camber/Flat"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Burton Talent Scout Snowboard - Womens 2022",
  //   "brand": "Burton",
  //   "gender": "womens",
  //   "size": ["152"],
  //   "price": "529.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/burton-talent-scout-snowboard-wmns-22-zoom.jpeg"
  //   ],
  //   "type": ["Park"],
  //   "shape": "Twin",
  //   "camber": ["Camber", "Camber/Flat"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Burton Genie Snowboard - Womens",
  //   "brand": "Burton",
  //   "gender": "womens",
  //   "size": ["152"],
  //   "price": "287.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/burton-genie-snowboard-wmns-19-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain"],
  //   "shape": "Twin",
  //   "camber": ["Flat", "Flat/Rocker"],
  //   "flex": "Soft",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Roxy Raina Snowboard - Womens 2022",
  //   "brand": "Roxy",
  //   "gender": "womens",
  //   "size": ["143", "147", "151"],
  //   "price": "349.99",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/roxy-raina-snowboard-wmns-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain"],
  //   "shape": "Directional Twin",
  //   "camber": ["Camber", "Camber/Rocker"],
  //   "flex": "Soft/Medium",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Rossignol Diva LF Snowboard - Womens",
  //   "brand": "Rossignol",
  //   "gender": "womens",
  //   "size": ["144", "148"],
  //   "price": "363.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/rossignol-diva-lf-snowboard-wmns-all-21-zoom.jpeg"
  //   ],
  //   "type": ["Park", "All Mountain"],
  //   "shape": "Twin",
  //   "camber": ["Hybrid", "Camber/Rocker"],
  //   "flex": "Medium/Stiff",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "GNU Pro Choice Snowboard - Womens 2022",
  //   "brand": "GNU",
  //   "gender": "womens",
  //   "size": ["145.5"],
  //   "price": "579.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/gnu-pro-choice-asym-snowboard-wmns-22-zoom.jpeg"
  //   ],
  //   "type": ["Freestyle", "All Mountain"],
  //   "shape": "Twin, Asymmetrical",
  //   "camber": ["Camber"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Jones Mind Expander Snowboard - Womens 2022",
  //   "brand": "Jones",
  //   "gender": "womens",
  //   "size": ["146"],
  //   "price": "599.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/jones-mind-expander-snowboard-wmns-22-zoom.jpeg"
  //   ],
  //   "type": ["Powder"],
  //   "shape": "Directional",
  //   "camber": ["Rocker", "Surf/Rocker"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Rossignol Myth Snowboard - Womens",
  //   "brand": "Jones",
  //   "gender": "womens",
  //   "size": ["139"],
  //   "price": "230.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/rossignol-myth-snowboard-wmns-all-21-zoom.jpeg"
  //   ],
  //   "type": ["Park", "All Mountain"],
  //   "shape": "Twin",
  //   "camber": ["Hybrid", "Camber/Rocker"],
  //   "flex": "Soft/Medium",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Roxy XOXO Banana Snowboard - Womens",
  //   "brand": "Roxy",
  //   "gender": "womens",
  //   "size": ["145", "152"],
  //   "price": "324.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/roxy-xox-banana-wmns-snowboard-all-sizes-dark-20-zoom.jpeg"
  //   ],
  //   "type": ["Freestyle", "All Mountain"],
  //   "shape": "Twin",
  //   "camber": ["Rocker/Camber"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Roxy Breeze Snowboard - Womens 2022",
  //   "brand": "Roxy",
  //   "gender": "womens",
  //   "size": ["145", "152"],
  //   "price": "299.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/roxy-breeze-snowboard-wmns-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain"],
  //   "shape": "Directional",
  //   "camber": ["Camber", "Rocker/Camber"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Roxy Dawn Snowboard - Womens 2022",
  //   "brand": "Roxy",
  //   "gender": "womens",
  //   "size": ["142", "146", "149", "152"],
  //   "price": "299.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/roxy-dawn-snowboard-wmns-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain"],
  //   "shape": "Twin",
  //   "camber": ["Flat", "Flat/Rocker"],
  //   "flex": "Soft",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Burton Custom Flying V Snowboard 2022",
  //   "brand": "Burton",
  //   "gender": "mens",
  //   "size": ["150", "156", "158"],
  //   "price": "629.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/burton-custom-flying-v-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain"],
  //   "shape": "Directional",
  //   "camber": ["Hybrid", "Rocker/Camber"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": true,
  // },
  // {
  //   "title": "Burton Family Tree 3D Daily Driver Snowboard 2022",
  //   "brand": "Burton",
  //   "gender": "mens",
  //   "size": ["155", "159"],
  //   "price": "629.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/burton-family-tree-3d-daily-driver-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain"],
  //   "shape": "Directional",
  //   "camber": ["Hybrid", "Rocker/Camber In Nose"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Burton Flight Attendant Wide Snowboard 2022",
  //   "brand": "Burton",
  //   "gender": "mens",
  //   "size": ["156", "159", "162"],
  //   "price": "579.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/burton-flight-attendant-wide-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain", "Freeride"],
  //   "shape": "Directional",
  //   "camber": ["Hybrid", "Rocker/Camber In Nose"],
  //   "flex": "Medium/Stiff",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Burton Free Thinker Wide Snowboard 2022",
  //   "brand": "Burton",
  //   "gender": "mens",
  //   "size": ["157", "160"],
  //   "price": "599.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/burton-free-thinker-wide-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain", "Park"],
  //   "shape": "Twin",
  //   "camber": ["Camber"],
  //   "flex": "Medium/Stiff",
  //   "width": "Wide",
  //   "featured": false,
  // },
  // {
  //   "title": "Burton Instigator Flat Top Wide Snowboard 2022",
  //   "brand": "Burton",
  //   "gender": "mens",
  //   "size": ["155", "165"],
  //   "price": "419.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/burton-instigator-flat-top-wide-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain", "Park"],
  //   "shape": "Directional",
  //   "camber": ["Flat", "Flat/Rocker"],
  //   "flex": "Medium/Stiff",
  //   "width": "Wide",
  //   "featured": true,
  // },
  // {
  //   "title": "CAPiTA Indoor Survival Snowboard 2022",
  //   "brand": "CAPiTA",
  //   "gender": "mens",
  //   "size": ["152"],
  //   "price": "549.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/capita-indoor-survival-snowboard-152-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain", "Freestyle"],
  //   "shape": "Directional Twin",
  //   "camber": ["Hybrid", "Camber/Flat"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "CAPiTA Spring Break Powder Snowboard",
  //   "brand": "CAPiTA",
  //   "gender": "mens",
  //   "size": ["166"],
  //   "price": "618.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/capita-spring-break-powder-snowboard-166cm-21-zoom.jpeg"
  //   ],
  //   "type": ["Powder"],
  //   "shape": "Directional",
  //   "camber": ["Rocker", "Flat/Rocker"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "CAPiTA Navigator Snowboard 2022",
  //   "brand": "CAPiTA",
  //   "gender": "mens",
  //   "size": ["147", "155"],
  //   "price": "479.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/capita-spring-break-powder-snowboard-166cm-21-zoom.jpeg"
  //   ],
  //   "type": ["Powder", "Freeride"],
  //   "shape": "Directional",
  //   "camber": ["Hybrid"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Arbor Crosscut Camber Midwide Snowboard 2022",
  //   "brand": "Arbor",
  //   "gender": "mens",
  //   "size": ["165"],
  //   "price": "499.99",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/arbor-crosscut-camber-midwide-snowboard-all-21-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain", "Freeride"],
  //   "shape": "Directional",
  //   "camber": ["Camber"],
  //   "flex": "Medium/Stiff",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Arbor Bryan Iguchi Pro Camber Wide Snowboard 2022",
  //   "brand": "Arbor",
  //   "gender": "mens",
  //   "size": ["167"],
  //   "price": "599.99",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/arbor-bryan-iguchi-pro-camber-wide-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain", "Freeride"],
  //   "shape": "Directional",
  //   "camber": ["Camber"],
  //   "flex": "Medium/Stiff",
  //   "width": "Wide",
  //   "featured": true,
  // },
  // {
  //   "title": "Arbor Foundation Midwide Snowboard 2022",
  //   "brand": "Arbor",
  //   "gender": "mens",
  //   "size": ["156", "159", "162"],
  //   "price": "329.99",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/arbor-foundation-midwide-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain", "Freestyle"],
  //   "shape": "Twin",
  //   "camber": ["Rocker"],
  //   "flex": "Soft/Medium",
  //   "width": "Midwide",
  //   "featured": false,
  // },
  // {
  //   "title": "Arbor Formula Rocker Midwide Snowboard 2022",
  //   "brand": "Arbor",
  //   "gender": "mens",
  //   "size": ["156", "159", "162"],
  //   "price": "379.99",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/arbor-formula-rocker-midwide-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain", "Freestyle"],
  //   "shape": "Twin",
  //   "camber": ["Rocker"],
  //   "flex": "Medium",
  //   "width": "Midwide",
  //   "featured": false,
  // },
  // {
  //   "title": "Arbor Annex Snowboard 2022",
  //   "brand": "Arbor",
  //   "gender": "mens",
  //   "size": ["156", "162"],
  //   "price": "699.99",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/arbor-annex-snowboard-all-21-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain", "Freestyle"],
  //   "shape": "Directional",
  //   "camber": ["Camber"],
  //   "flex": "Stiff",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Arbor Shiloh Camber Midwide Snowboard 2022",
  //   "brand": "Arbor",
  //   "gender": "mens",
  //   "size": ["160"],
  //   "price": "499.99",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/arbor-shiloh-camber-midwide-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain", "Freestyle", "Freeride"],
  //   "shape": "Twin",
  //   "camber": ["Camber"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Arbor Coda Rocker Midwide Snowboard 2022",
  //   "brand": "Arbor",
  //   "gender": "mens",
  //   "size": ["157"],
  //   "price": "549.99",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/arbor-coda-rocker-midwide-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain", "Freestyle"],
  //   "shape": "Twin",
  //   "camber": ["Rocker"],
  //   "flex": "Medium/Stiff",
  //   "width": "Midwide",
  //   "featured": false,
  // },
  // {
  //   "title": "Rossignol Jibsaw Wide Snowboard 2022",
  //   "brand": "Rossignol",
  //   "gender": "mens",
  //   "size": ["162"],
  //   "price": "499.99",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/rossignol-jibsaw-wide-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain", "Park"],
  //   "shape": "Twin",
  //   "camber": ["Hybrid", "Camber/Rocker"],
  //   "flex": "Medium",
  //   "width": "Wide",
  //   "featured": true,
  // },
  // {
  //   "title": "Rossignol Revenant Snowboard 2022",
  //   "brand": "Rossignol",
  //   "gender": "mens",
  //   "size": ["162", "154"],
  //   "price": "499.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/rossignol-revenant-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain"],
  //   "shape": "Twin",
  //   "camber": ["Hybrid", "Camber/Rocker"],
  //   "flex": "Medium/Stiff",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Rossignol District Black Wide Snowboard",
  //   "brand": "Rossignol",
  //   "gender": "mens",
  //   "size": ["161"],
  //   "price": "221.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/rossignol-district-black-wide-snowboard-21-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain", "Freestyle"],
  //   "shape": "Twin",
  //   "camber": ["Hybrid", "Camber/Rocker"],
  //   "flex": "Soft/Medium",
  //   "width": "Wide",
  //   "featured": false,
  // },
  // {
  //   "title": "Rossignol Juggernaut Wide Snowboard 2022",
  //   "brand": "Rossignol",
  //   "gender": "mens",
  //   "size": ["158", "161"],
  //   "price": "549.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/rossignol-juggernaut-wide-snowboard-all-21-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain", "Freestyle", "Park"],
  //   "shape": "Twin",
  //   "camber": ["Hybrid", "Camber/Rocker"],
  //   "flex": "Stiff",
  //   "width": "Wide",
  //   "featured": false,
  // },
  // {
  //   "title": "Rossignol Resurgence Wide Snowboard 2022",
  //   "brand": "Rossignol",
  //   "gender": "mens",
  //   "size": ["155", "159", "163"],
  //   "price": "449.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/rossignol-resurgence-wide-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain"],
  //   "shape": "Directional",
  //   "camber": ["Hybrid", "Camber/Rocker"],
  //   "flex": "Medium",
  //   "width": "Wide",
  //   "featured": true,
  // },
  // {
  //   "title": "Rossignol One LF Wide Snowboard",
  //   "brand": "Rossignol",
  //   "gender": "mens",
  //   "size": ["155", "159", "163"],
  //   "price": "400.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/rossignol-one-lf-wide-snowboard-all-21-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain"],
  //   "shape": "Directional Twin",
  //   "camber": ["Hybrid", "Camber/Rocker"],
  //   "flex": "Medium",
  //   "width": "Wide",
  //   "featured": false,
  // },
  // {
  //   "title": "Rossignol One Wide Snowboard 2022",
  //   "brand": "Rossignol",
  //   "gender": "mens",
  //   "size": ["155", "159", "163"],
  //   "price": "549.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/rossignol-one-wide-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain"],
  //   "shape": "Directional Twin",
  //   "camber": ["Hybrid", "Camber/Rocker"],
  //   "flex": "Medium",
  //   "width": "Wide",
  //   "featured": false,
  // },
  // {
  //   "title": "Chamonix Savoy Snowboard 2022",
  //   "brand": "Chamonix",
  //   "gender": "mens",
  //   "size": ["155", "159", "163"],
  //   "price": "259.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/chamonix-savoy-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["Park", "Freestyle"],
  //   "shape": "Twin",
  //   "camber": ["Camber"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": true,
  // },
  // {
  //   "title": "Chamonix Caden Snowboard 2022",
  //   "brand": "Chamonix",
  //   "gender": "mens",
  //   "size": ["155", "159"],
  //   "price": "259.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/chamonix-caden-snowbaord-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain", "Freestyle"],
  //   "shape": "Directional Twin",
  //   "camber": ["Flat"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Chamonix Cornu Snowboard 2022",
  //   "brand": "Chamonix",
  //   "gender": "mens",
  //   "size": ["155", "159"],
  //   "price": "319.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/chamonix-cornu-snowbaord-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain", "Freestyle"],
  //   "shape": "Twin",
  //   "camber": ["Hybrid", "Rocker/Camber"],
  //   "flex": "Medium",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Nitro Slash Snowboard 2022",
  //   "brand": "Nitro",
  //   "gender": "mens",
  //   "size": ["156"],
  //   "price": "519.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/nitro-slash-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["Powder", "Freeride"],
  //   "shape": "Directional",
  //   "camber": ["Camber"],
  //   "flex": "Medium/Stiff",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Nitro Cheap Thrills Snowboard 2022",
  //   "brand": "Nitro",
  //   "gender": "mens",
  //   "size": ["157"],
  //   "price": "399.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/nitro-cheap-thrills-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["Park"],
  //   "shape": "Twin",
  //   "camber": ["Flat"],
  //   "flex": "Soft/Medium",
  //   "width": "Regular",
  //   "featured": true,
  // },
  // {
  //   "title": "Nitro Team Snowboard 2022",
  //   "brand": "Nitro",
  //   "gender": "mens",
  //   "size": ["152", "155", "162"],
  //   "price": "499.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/nitro-team-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain"],
  //   "shape": "Directional Twin",
  //   "camber": ["Camber"],
  //   "flex": "Medium/Stiff",
  //   "width": "Regular",
  //   "featured": false,
  // },
  // {
  //   "title": "Nitro Pantera Wide Snowboard 2022",
  //   "brand": "Nitro",
  //   "gender": "mens",
  //   "size": ["163", "166"],
  //   "price": "599.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/nitro-pantera-wide-snowboard-21-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain", "Freeride"],
  //   "shape": "Directional",
  //   "camber": ["Camber"],
  //   "flex": "Stiff",
  //   "width": "Wide",
  //   "featured": false,
  // },
  // {
  //   "title": "Nitro Team Blurry Face Snowboard 2022",
  //   "brand": "Nitro",
  //   "gender": "mens",
  //   "size": ["163", "166"],
  //   "price": "549.95",
  //   "images": [
  //     "https://snowboard-shop.s3.us-west-1.amazonaws.com/snowboard-img/nitro-team-pro-wide-snowboard-22-zoom.jpeg"
  //   ],
  //   "type": ["All Mountain", "Freeride"],
  //   "shape": "Directional",
  //   "camber": ["Camber"],
  //   "flex": "Stiff",
  //   "width": "Wide",
  //   "featured": true,
  // },
  // {},
  // {},
  // {},
  // {},
  // {},
  // {},
  // {},
];
