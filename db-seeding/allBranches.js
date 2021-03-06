"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.allBranches = void 0;
exports.allBranches = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.218683, 25.765501]
            },
            properties: {
                storeNumber: '7408',
                storeType: 'FREESTANDING',
                address: '1400 SW 8TH ST',
                city: 'MIAMI',
                state: 'FL',
                zip: '33135',
                phone: '(305)285-0974',
                playplace: 'Y',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/7408'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.185108, 25.849872]
            },
            properties: {
                storeNumber: '11511',
                storeType: 'FREESTANDING',
                address: '8116 BISCAYNE BLVD',
                city: 'MIAMI',
                state: 'FL',
                zip: '33138',
                phone: '(305)756-0400',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/11511'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.37197, 25.550894]
            },
            properties: {
                storeNumber: '34014',
                storeType: 'FREESTANDING',
                address: '23351 SW 112TH AVE',
                city: 'HOMESTEAD',
                state: 'FL',
                zip: '33032',
                phone: '(305)258-7837',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'N',
                freeWifi: 'Y'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.36734, 25.579132]
            },
            properties: {
                storeNumber: '12215',
                storeType: 'FREESTANDING',
                address: '10855 CARIBBEAN BLVD',
                city: 'MIAMI',
                state: 'FL',
                zip: '33157',
                phone: '(305)254-3487',
                playplace: 'Y',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/12215'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.206753, 25.83273]
            },
            properties: {
                storeNumber: '7205',
                storeType: 'FREESTANDING',
                address: '599 NW 62ND ST',
                city: 'MIAMI',
                state: 'FL',
                zip: '33150',
                phone: '(305)751-5636',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/7205'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.292742, 25.701277]
            },
            properties: {
                storeNumber: '792',
                storeType: 'FREESTANDING',
                address: '6150 S DIXIE HWY',
                city: 'MIAMI',
                state: 'FL',
                zip: '33143-5003',
                phone: '(305)661-7131',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/792'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.162258, 25.895759]
            },
            properties: {
                storeNumber: '5944',
                storeType: 'FREESTANDING',
                address: '13000 BISCAYNE BLVD.',
                city: 'MIAMI',
                state: 'FL',
                zip: '33181-2011',
                phone: '(305)899-9578',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/5944'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.274593, 25.715959]
            },
            properties: {
                storeNumber: '14782',
                storeType: 'FREESTANDING',
                address: '1148 DIXIE HWY',
                city: 'CORAL GABLES',
                state: 'FL',
                zip: '33141',
                phone: '(305)666-9919',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/14782'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.248185, 25.749746]
            },
            properties: {
                storeNumber: '1789',
                storeType: 'FREESTANDING',
                address: '3280 CORAL WAY',
                city: 'MIAMI',
                state: 'FL',
                zip: '33145-2234',
                phone: '(305)444-5466',
                playplace: 'Y',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/1789'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.241236, 25.764843]
            },
            properties: {
                storeNumber: '7296',
                storeType: 'FREESTANDING',
                address: '2940 SW 8TH ST',
                city: 'MIAMI',
                state: 'FL',
                zip: '33135',
                phone: '(305)541-4768',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/7296'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.246245, 25.736552]
            },
            properties: {
                storeNumber: '7147',
                storeType: 'FREESTANDING',
                address: '3200 S DIXIE HWY',
                city: 'MIAMI',
                state: 'FL',
                zip: '33133-3609',
                phone: '(305)448-0531',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/7147'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.121811, 25.940145]
            },
            properties: {
                storeNumber: '12111',
                storeType: 'FREESTANDING',
                address: '17730 COLLINS',
                city: 'SUNNY ISLES BEACH',
                state: 'FL',
                zip: '33160',
                phone: '(305)937-4944',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/12111'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.232268, 25.809094]
            },
            properties: {
                storeNumber: '6589',
                storeType: 'FREESTANDING',
                address: '2200 NW 36TH ST',
                city: 'MIAMI',
                state: 'FL',
                zip: '33142',
                phone: '(305)633-1385',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/6589'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.336198, 25.636053]
            },
            properties: {
                storeNumber: '18735',
                storeType: 'SHARED BLDNG',
                address: '14401 S DIXIE HWY',
                city: 'MIAMI',
                state: 'FL',
                zip: '33176',
                phone: '(305)238-2615',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/18735'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.155511, 25.926693]
            },
            properties: {
                storeNumber: '18490',
                storeType: 'GAS STATION',
                address: '2201 NE 163RD ST',
                city: 'NORTH MIAMI',
                state: 'FL',
                zip: '33160',
                phone: '(305)948-9081',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/18490'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.352483, 25.60092]
            },
            properties: {
                storeNumber: '1856',
                storeType: 'FREESTANDING',
                address: '18295 S DIXIE HWY',
                city: 'PERRINE',
                state: 'FL',
                zip: '33157',
                phone: '(305)238-7129',
                playplace: 'Y',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/1856'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.336189, 25.578119]
            },
            properties: {
                storeNumber: '16795',
                storeType: 'FREESTANDING',
                address: '20315 OLD CUTLER',
                city: 'MIAMI',
                state: 'FL',
                zip: '33189',
                phone: '(305)235-5600',
                playplace: 'Y',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/16795'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.210668, 25.791846]
            },
            properties: {
                storeNumber: '7294',
                storeType: 'HOSPITAL',
                address: '901 NW 17 ST STE A',
                city: 'MIAMI',
                state: 'FL',
                zip: '33136-1135',
                phone: '(305)326-0044',
                playplace: 'N',
                driveThru: 'N',
                archCard: 'Y',
                freeWifi: 'N',
                storeUrl: 'http://www.mcflorida.com/7294'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.189163, 25.809965]
            },
            properties: {
                storeNumber: '7166',
                storeType: 'FREESTANDING',
                address: '3501 BISCAYNE BLVD',
                city: 'MIAMI',
                state: 'FL',
                zip: '33181',
                phone: '(305)573-6064',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/7166'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.211831, 25.773374]
            },
            properties: {
                storeNumber: '1819',
                storeType: 'FREESTANDING',
                address: '1016 W FLAGLER ST',
                city: 'MIAMI',
                state: 'FL',
                zip: '33130',
                phone: '(305)545-7788',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/1819'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.190172, 25.778003]
            },
            properties: {
                storeNumber: '12932',
                storeType: 'FREESTANDING',
                address: '345 NE 2ND AVE',
                city: 'MIAMI',
                state: 'FL',
                zip: '33132',
                phone: '(305)371-8161',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/12932'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.198866, 25.766632]
            },
            properties: {
                storeNumber: '20598',
                storeType: 'FREESTANDING',
                address: '299 S.W. 8TH STREET',
                city: 'MIAMI',
                state: 'FL',
                zip: '33130',
                phone: '(305)856-6770',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/20598'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.522609, 25.004612]
            },
            properties: {
                storeNumber: '5090',
                storeType: 'FREESTANDING',
                address: '91400 OVERSEAS HWY',
                city: 'TAVENIER',
                state: 'FL',
                zip: '33070',
                phone: '(305)852-2463',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/5090'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.132056, 25.790393]
            },
            properties: {
                storeNumber: '10664',
                storeType: 'STOREFRONT',
                address: '1650 WASHINGTON AVE',
                city: 'MIAMI BEACH',
                state: 'FL',
                zip: '33139',
                phone: '(305)672-8031',
                playplace: 'N',
                driveThru: 'N',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/10664'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.186104, 25.889943]
            },
            properties: {
                storeNumber: '14164',
                storeType: 'FREESTANDING',
                address: '610 NE 125TH ST',
                city: 'MIAMI',
                state: 'FL',
                zip: '33181',
                phone: '(305)899-2882',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/14164'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.26286, 25.763235]
            },
            properties: {
                storeNumber: '2287',
                storeType: 'FREESTANDING',
                address: '4180 SW 9TH ST',
                city: 'MIAMI',
                state: 'FL',
                zip: '33134',
                phone: '(305)443-9366',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/2287'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.434625, 25.477004]
            },
            properties: {
                storeNumber: '31341',
                storeType: 'FREESTANDING',
                address: '2880 NE 8TH ST',
                city: 'HOMESTEAD',
                state: 'FL',
                zip: '33033',
                phone: '(305)242-9774',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/31341'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.329566, 25.652864]
            },
            properties: {
                storeNumber: '1167',
                storeType: 'FREESTANDING',
                address: '12647 S DIXIE HWY',
                city: 'PINE CREST',
                state: 'FL',
                zip: '33156',
                phone: '(305)233-0058',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/1167'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-72.548571, 42.359058]
            },
            properties: {
                storeNumber: '35391',
                storeType: 'FREESTANDING',
                address: '374 RUSSELL ST',
                city: 'HADLEY',
                state: 'MA',
                zip: '1035',
                phone: '(413)582-0176',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.210077, 25.859774]
            },
            properties: {
                storeNumber: '5112',
                storeType: 'FREESTANDING',
                address: '9250 NW 7TH AVE',
                city: 'MIAMI',
                state: 'FL',
                zip: '33150',
                phone: '(305)759-1042',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcflorida.com/5112'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.171653, 25.927849]
            },
            properties: {
                storeNumber: '28899',
                storeType: 'WAL*MART',
                address: '1425 NE 163RD STREET (WM#3235)',
                city: 'NORTH MIAMI BEACH',
                state: 'FL',
                zip: '33162',
                phone: '(305)945-5287',
                playplace: 'N',
                driveThru: 'N',
                archCard: 'Y',
                freeWifi: 'N',
                storeUrl: 'http://www.mcflorida.com/28899'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-72.63304, 42.059766]
            },
            properties: {
                storeNumber: '34251',
                storeType: 'FREESTANDING',
                address: '868 SUFFIELD STREET',
                city: 'AGAWAM',
                state: 'MA',
                zip: '1001',
                phone: '(413)786-6863',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcmassachusetts.com/34251'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-72.623996, 42.115792]
            },
            properties: {
                storeNumber: '356',
                storeType: 'FREESTANDING',
                address: '352 RIVERDALE RD',
                city: 'WEST SPRINGFIELD',
                state: 'MA',
                zip: '1089',
                phone: '(413)737-5153',
                playplace: 'N',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcmassachusetts.com/356'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-72.585335, 42.024178]
            },
            properties: {
                storeNumber: '22257',
                storeType: 'FREESTANDING',
                address: '34 ENDFIELD ST',
                city: 'ENFIELD',
                state: 'CT',
                zip: '6082',
                phone: '(860)745-4314',
                playplace: 'Y',
                driveThru: 'Y',
                archCard: 'Y',
                freeWifi: 'Y',
                storeUrl: 'http://www.mcconnecticut.com/22257'
            }
        },
    ]
};
var https = require('https');
function postAll(allBranches) {
    return __awaiter(this, void 0, void 0, function () {
        var options, promises, _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = {
                        hostname: 'project1-hasura.hasura.app',
                        port: 443,
                        path: '/api/rest/Location',
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'x-hasura-admin-secret': 'ZUq7zvOLLCxLpGATGeQPTBjxtfrOjnFpofJlfQbvtldmZSyJm72bOvzjDzM2PPLJ'
                        }
                    };
                    promises = [];
                    _loop_1 = function (i) {
                        options.headers['Content-Length'] = JSON.stringify(allBranches[i]).length;
                        var req = new Promise(function (resolve) {
                            var req = https
                                .request(options, function (res) {
                                var response = '';
                                res.on('data', function (buffer) { return (response += buffer); });
                                res.on('end', function () {
                                    resolve({
                                        statusCode: res.statusCode,
                                        body: JSON.stringify(response)
                                    });
                                    console.log(response);
                                });
                            })
                                .on('error', function (err) { return console.log(err); });
                            req.write(JSON.stringify(allBranches[i]));
                            req.end();
                        });
                        promises.push(req);
                    };
                    for (i = 0; i < allBranches.length; i++) {
                        _loop_1(i);
                    }
                    console.log(promises);
                    return [4 /*yield*/, Promise.all(promises)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
postAll(exports.allBranches.features);
console.log(Array.isArray(exports.allBranches.features));
