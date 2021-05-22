import _get from 'lodash/get';

export const carouselResponsive = params => {
  return {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: _get(params, 'superLargeDesktop') || 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: _get(params, 'desktop') || 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: _get(params, 'tablet') || 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: _get(params, 'mobile') || 1,
    },
  };
};

export const countriesData = [
  {
    name: 'United States',
    code: 'US',
    pay_per_stream: 0.003526648541,
  },
  {
    name: 'Afghanistan',
    code: 'AF',
  },
  {
    name: 'Åland Islands',
    code: 'AX',
  },
  {
    name: 'Albania',
    code: 'AL',
  },
  {
    name: 'Algeria',
    code: 'DZ',
    pay_per_stream: 0.000704575968,
  },
  {
    name: 'American Samoa',
    code: 'AS',
  },
  {
    name: 'Andorra',
    code: 'AD',
    pay_per_stream: 0.00359489703,
  },
  {
    name: 'Angola',
    code: 'AO',
  },
  {
    name: 'Anguilla',
    code: 'AI',
  },
  {
    name: 'Antarctica',
    code: 'AQ',
  },
  {
    name: 'Antigua and Barbuda',
    code: 'AG',
  },
  {
    name: 'Argentina',
    code: 'AR',
    pay_per_stream: 0.000850040231,
  },
  {
    name: 'Armenia',
    code: 'AM',
  },
  {
    name: 'Aruba',
    code: 'AW',
  },
  {
    name: 'Australia',
    code: 'AU',
    pay_per_stream: 0.003964816365,
  },
  {
    name: 'Austria',
    code: 'AT',
    pay_per_stream: 0.004417701959,
  },
  {
    name: 'Azerbaijan',
    code: 'AZ',
  },
  {
    name: 'Bahamas',
    code: 'BS',
  },
  {
    name: 'Bahrain',
    code: 'BH',
    pay_per_stream: 0.001767711843,
  },
  {
    name: 'Bangladesh',
    code: 'BD',
  },
  {
    name: 'Barbados',
    code: 'BB',
  },
  {
    name: 'Belarus',
    code: 'BY',
  },
  {
    name: 'Belgium',
    code: 'BE',
    pay_per_stream: 0.003244712078,
  },
  {
    name: 'Belize',
    code: 'BZ',
  },
  {
    name: 'Benin',
    code: 'BJ',
  },
  {
    name: 'Bermuda',
    code: 'BM',
  },
  {
    name: 'Bhutan',
    code: 'BT',
  },
  {
    name: 'Bolivia',
    code: 'BO',
    pay_per_stream: 0.000994451986,
  },
  {
    name: 'Bosnia and Herzegovina',
    code: 'BA',
  },
  {
    name: 'Botswana',
    code: 'BW',
  },
  {
    name: 'Bouvet Island',
    code: 'BV',
  },
  {
    name: 'Brazil',
    code: 'BR',
    pay_per_stream: 0.001294613594,
  },
  {
    name: 'British Indian Ocean Territory',
    code: 'IO',
  },
  {
    name: 'Brunei Darussalam',
    code: 'BN',
  },
  {
    name: 'Bulgaria',
    code: 'BG',
    pay_per_stream: 0.001599616501,
  },
  {
    name: 'Burkina Faso',
    code: 'BF',
  },
  {
    name: 'Burundi',
    code: 'BI',
  },
  {
    name: 'Cambodia',
    code: 'KH',
  },
  {
    name: 'Cameroon',
    code: 'CM',
  },
  {
    name: 'Canada',
    code: 'CA',
    pay_per_stream: 0.002738648734,
  },
  {
    name: 'Cape Verde',
    code: 'CV',
  },
  {
    name: 'Cayman Islands',
    code: 'KY',
  },
  {
    name: 'Central African Republic',
    code: 'CF',
  },
  {
    name: 'Chad',
    code: 'TD',
  },
  {
    name: 'Chile',
    code: 'CL',
    pay_per_stream: 0.001261957647,
  },
  {
    name: 'China',
    code: 'CN',
  },
  {
    name: 'Christmas Island',
    code: 'CX',
  },
  {
    name: 'Cocos (Keeling) Islands',
    code: 'CC',
  },
  {
    name: 'Colombia',
    code: 'CO',
    pay_per_stream: 0.001049730797,
  },
  {
    name: 'Comoros',
    code: 'KM',
  },
  {
    name: 'Congo',
    code: 'CG',
  },
  {
    name: 'Congo, The Democratic Republic of the',
    code: 'CD',
  },
  {
    name: 'Cook Islands',
    code: 'CK',
  },
  {
    name: 'Costa Rica',
    code: 'CR',
    pay_per_stream: 0.001975841924,
  },
  {
    name: 'Cote D"Ivoire',
    code: 'CI',
  },
  {
    name: 'Croatia',
    code: 'HR',
  },
  {
    name: 'Cuba',
    code: 'CU',
  },
  {
    name: 'Cyprus',
    code: 'CY',
    pay_per_stream: 0.00304038596,
  },
  {
    name: 'Czech Republic',
    code: 'CZ',
    pay_per_stream: 0.00210658108,
  },
  {
    name: 'Denmark',
    code: 'DK',
    pay_per_stream: 0.005159208727,
  },
  {
    name: 'Djibouti',
    code: 'DJ',
  },
  {
    name: 'Dominica',
    code: 'DM',
  },
  {
    name: 'Dominican Republic',
    code: 'DO',
    pay_per_stream: 0.001890129557,
  },
  {
    name: 'Ecuador',
    code: 'EC',
    pay_per_stream: 0.001639485203,
  },
  {
    name: 'Egypt',
    code: 'EG',
    pay_per_stream: 0.000969265739,
  },
  {
    name: 'El Salvador',
    code: 'SV',
    pay_per_stream: 0.00146884924,
  },
  {
    name: 'Equatorial Guinea',
    code: 'GQ',
  },
  {
    name: 'Eritrea',
    code: 'ER',
  },
  {
    name: 'Estonia',
    code: 'EE',
    pay_per_stream: 0.00268836584,
  },
  {
    name: 'Ethiopia',
    code: 'ET',
  },
  {
    name: 'Falkland Islands (Malvinas)',
    code: 'FK',
  },
  {
    name: 'Faroe Islands',
    code: 'FO',
  },
  {
    name: 'Fiji',
    code: 'FJ',
  },
  {
    name: 'Finland',
    code: 'FI',
    pay_per_stream: 0.004445058121,
  },
  {
    name: 'France',
    code: 'FR',
    pay_per_stream: 0.00316515614,
  },
  {
    name: 'French Guiana',
    code: 'GF',
  },
  {
    name: 'French Polynesia',
    code: 'PF',
  },
  {
    name: 'French Southern Territories',
    code: 'TF',
  },
  {
    name: 'Gabon',
    code: 'GA',
  },
  {
    name: 'Gambia',
    code: 'GM',
  },
  {
    name: 'Georgia',
    code: 'GE',
  },
  {
    name: 'Germany',
    code: 'DE',
    pay_per_stream: 0.00336739311,
  },
  {
    name: 'Ghana',
    code: 'GH',
  },
  {
    name: 'Gibraltar',
    code: 'GI',
  },
  {
    name: 'Greece',
    code: 'GR',
    pay_per_stream: 0.001769688968,
  },
  {
    name: 'Greenland',
    code: 'GL',
  },
  {
    name: 'Grenada',
    code: 'GD',
  },
  {
    name: 'Guadeloupe',
    code: 'GP',
  },
  {
    name: 'Guam',
    code: 'GU',
  },
  {
    name: 'Guatemala',
    code: 'GT',
    pay_per_stream: 0.001170695015,
  },
  {
    name: 'Guernsey',
    code: 'GG',
  },
  {
    name: 'Guinea',
    code: 'GN',
  },
  {
    name: 'Guinea-Bissau',
    code: 'GW',
  },
  {
    name: 'Guyana',
    code: 'GY',
  },
  {
    name: 'Haiti',
    code: 'HT',
  },
  {
    name: 'Heard Island and Mcdonald Islands',
    code: 'HM',
  },
  {
    name: 'Holy See (Vatican City State)',
    code: 'VA',
  },
  {
    name: 'Honduras',
    code: 'HN',
    pay_per_stream: 0.001720584382,
  },
  {
    name: 'Hong Kong',
    code: 'HK',
    pay_per_stream: 0.002743411246,
  },
  {
    name: 'Hungary',
    code: 'HU',
    pay_per_stream: 0.001904352082,
  },
  {
    name: 'Iceland',
    code: 'IS',
    pay_per_stream: 0.006182899879,
  },
  {
    name: 'India',
    code: 'IN',
    pay_per_stream: 0.001408341455,
  },
  {
    name: 'Indonesia',
    code: 'ID',
    pay_per_stream: 0.000963832186,
  },
  {
    name: 'Iran, Islamic Republic Of',
    code: 'IR',
  },
  {
    name: 'Iraq',
    code: 'IQ',
  },
  {
    name: 'Ireland',
    code: 'IE',
    pay_per_stream: 0.004571974336,
  },
  {
    name: 'Isle of Man',
    code: 'IM',
  },
  {
    name: 'Israel',
    code: 'IL',
    pay_per_stream: 0.003282940262,
  },
  {
    name: 'Italy',
    code: 'IT',
    pay_per_stream: 0.001993518049,
  },
  {
    name: 'Jamaica',
    code: 'JM',
  },
  {
    name: 'Japan',
    code: 'JP',
    pay_per_stream: 0.003549137869,
  },
  {
    name: 'Jersey',
    code: 'JE',
  },
  {
    name: 'Jordan',
    code: 'JO',
    pay_per_stream: 0.000993879631,
  },
  {
    name: 'Kazakhstan',
    code: 'KZ',
  },
  {
    name: 'Kenya',
    code: 'KE',
  },
  {
    name: 'Kiribati',
    code: 'KI',
  },
  {
    name: 'Korea, Democratic People"S Republic of',
    code: 'KP',
  },
  {
    name: 'Korea, Republic of',
    code: 'KR',
  },
  {
    name: 'Kuwait',
    code: 'KW',
    pay_per_stream: 0.00144792955,
  },
  {
    name: 'Kyrgyzstan',
    code: 'KG',
  },
  {
    name: 'Lao People"S Democratic Republic',
    code: 'LA',
  },
  {
    name: 'Latvia',
    code: 'LV',
    pay_per_stream: 0.001773364992,
  },
  {
    name: 'Lebanon',
    code: 'LB',
    pay_per_stream: 0.002031134201,
  },
  {
    name: 'Lesotho',
    code: 'LS',
  },
  {
    name: 'Liberia',
    code: 'LR',
  },
  {
    name: 'Libyan Arab Jamahiriya',
    code: 'LY',
  },
  {
    name: 'Liechtenstein',
    code: 'LI',
    pay_per_stream: 0.004723724363,
  },
  {
    name: 'Lithuania',
    code: 'LT',
    pay_per_stream: 0.002069668615,
  },
  {
    name: 'Luxembourg',
    code: 'LU',
    pay_per_stream: 0.004159510972,
  },
  {
    name: 'Macao',
    code: 'MO',
  },
  {
    name: 'Macedonia, The Former Yugoslav Republic of',
    code: 'MK',
  },
  {
    name: 'Madagascar',
    code: 'MG',
  },
  {
    name: 'Malawi',
    code: 'MW',
  },
  {
    name: 'Malaysia',
    code: 'MY',
    pay_per_stream: 0.001553142523,
  },
  {
    name: 'Maldives',
    code: 'MV',
  },
  {
    name: 'Mali',
    code: 'ML',
  },
  {
    name: 'Malta',
    code: 'MT',
    pay_per_stream: 0.002762723432,
  },
  {
    name: 'Marshall Islands',
    code: 'MH',
  },
  {
    name: 'Martinique',
    code: 'MQ',
  },
  {
    name: 'Mauritania',
    code: 'MR',
  },
  {
    name: 'Mauritius',
    code: 'MU',
  },
  {
    name: 'Mayotte',
    code: 'YT',
  },
  {
    name: 'Mexico',
    code: 'MX',
    pay_per_stream: 0.001441136576,
  },
  {
    name: 'Micronesia, Federated States of',
    code: 'FM',
  },
  {
    name: 'Moldova, Republic of',
    code: 'MD',
  },
  {
    name: 'Monaco',
    code: 'MC',
    pay_per_stream: 0.005215133259,
  },
  {
    name: 'Mongolia',
    code: 'MN',
  },
  {
    name: 'Montserrat',
    code: 'MS',
  },
  {
    name: 'Morocco',
    code: 'MA',
    pay_per_stream: 0.000800311538,
  },
  {
    name: 'Mozambique',
    code: 'MZ',
  },
  {
    name: 'Myanmar',
    code: 'MM',
  },
  {
    name: 'Namibia',
    code: 'NA',
  },
  {
    name: 'Nauru',
    code: 'NR',
  },
  {
    name: 'Nepal',
    code: 'NP',
  },
  {
    name: 'Netherlands',
    code: 'NL',
    pay_per_stream: 0.003627001999,
  },
  {
    name: 'Netherlands Antilles',
    code: 'AN',
    pay_per_stream: 0.003627001999,
  },
  {
    name: 'New Caledonia',
    code: 'NC',
  },
  {
    name: 'New Zealand',
    code: 'NZ',
    pay_per_stream: 0.004977847651,
  },
  {
    name: 'Nicaragua',
    code: 'NI',
    pay_per_stream: 0.001225763737,
  },
  {
    name: 'Niger',
    code: 'NE',
  },
  {
    name: 'Nigeria',
    code: 'NG',
  },
  {
    name: 'Niue',
    code: 'NU',
  },
  {
    name: 'Norfolk Island',
    code: 'NF',
  },
  {
    name: 'Northern Mariana Islands',
    code: 'MP',
  },
  {
    name: 'Norway',
    code: 'NO',
    pay_per_stream: 0.005479273262,
  },
  {
    name: 'Oman',
    code: 'OM',
    pay_per_stream: 0.00185698677,
  },
  {
    name: 'Pakistan',
    code: 'PK',
  },
  {
    name: 'Palau',
    code: 'PW',
  },
  {
    name: 'Palestinian Territory, Occupied',
    code: 'PS',
    pay_per_stream: 0.000977329294,
  },
  {
    name: 'Panama',
    code: 'PA',
    pay_per_stream: 0.002905183839,
  },
  {
    name: 'Papua New Guinea',
    code: 'PG',
  },
  {
    name: 'Paraguay',
    code: 'PY',
    pay_per_stream: 0.001538342862,
  },
  {
    name: 'Peru',
    code: 'PE',
    pay_per_stream: 0.001461335494,
  },
  {
    name: 'Philippines',
    code: 'PH',
    pay_per_stream: 0.000814010469,
  },
  {
    name: 'Pitcairn',
    code: 'PN',
  },
  {
    name: 'Poland',
    code: 'PL',
    pay_per_stream: 0.001405193741,
  },
  {
    name: 'Portugal',
    code: 'PT',
    pay_per_stream: 0.001625945294,
  },
  {
    name: 'Puerto Rico',
    code: 'PR',
  },
  {
    name: 'Qatar',
    code: 'QA',
    pay_per_stream: 0.001453785019,
  },
  {
    name: 'Reunion',
    code: 'RE',
  },
  {
    name: 'Romania',
    code: 'RO',
    pay_per_stream: 0.001515289377,
  },
  {
    name: 'Russian Federation',
    code: 'RU',
  },
  {
    name: 'RWANDA',
    code: 'RW',
  },
  {
    name: 'Saint Helena',
    code: 'SH',
  },
  {
    name: 'Saint Kitts and Nevis',
    code: 'KN',
  },
  {
    name: 'Saint Lucia',
    code: 'LC',
  },
  {
    name: 'Saint Pierre and Miquelon',
    code: 'PM',
  },
  {
    name: 'Saint Vincent and the Grenadines',
    code: 'VC',
  },
  {
    name: 'Samoa',
    code: 'WS',
  },
  {
    name: 'San Marino',
    code: 'SM',
  },
  {
    name: 'Sao Tome and Principe',
    code: 'ST',
  },
  {
    name: 'Saudi Arabia',
    code: 'SA',
    pay_per_stream: 0.00102902659,
  },
  {
    name: 'Senegal',
    code: 'SN',
  },
  {
    name: 'Serbia and Montenegro',
    code: 'CS',
  },
  {
    name: 'Seychelles',
    code: 'SC',
  },
  {
    name: 'Sierra Leone',
    code: 'SL',
  },
  {
    name: 'Singapore',
    code: 'SG',
    pay_per_stream: 0.002916649931,
  },
  {
    name: 'Slovakia',
    code: 'SK',
    pay_per_stream: 0.001928921895,
  },
  {
    name: 'Slovenia',
    code: 'SI',
  },
  {
    name: 'Solomon Islands',
    code: 'SB',
  },
  {
    name: 'Somalia',
    code: 'SO',
  },
  {
    name: 'South Africa',
    code: 'ZA',
    pay_per_stream: 0.001568961293,
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    code: 'GS',
  },
  {
    name: 'Spain',
    code: 'ES',
    pay_per_stream: 0.00235129493,
  },
  {
    name: 'Sri Lanka',
    code: 'LK',
  },
  {
    name: 'Sudan',
    code: 'SD',
  },
  {
    name: 'Suriname',
    code: 'SR',
  },
  {
    name: 'Svalbard and Jan Mayen',
    code: 'SJ',
  },
  {
    name: 'Swaziland',
    code: 'SZ',
  },
  {
    name: 'Sweden',
    code: 'SE',
    pay_per_stream: 0.004440795157,
  },
  {
    name: 'Switzerland',
    code: 'CH',
    pay_per_stream: 0.004735907468,
  },
  {
    name: 'Syrian Arab Republic',
    code: 'SY',
  },
  {
    name: 'Taiwan, Province of China',
    code: 'TW',
    pay_per_stream: 0.001515917479,
  },
  {
    name: 'Tajikistan',
    code: 'TJ',
  },
  {
    name: 'Tanzania, United Republic of',
    code: 'TZ',
  },
  {
    name: 'Thailand',
    code: 'TH',
    pay_per_stream: 0.001162023478,
  },
  {
    name: 'Timor-Leste',
    code: 'TL',
  },
  {
    name: 'Togo',
    code: 'TG',
  },
  {
    name: 'Tokelau',
    code: 'TK',
  },
  {
    name: 'Tonga',
    code: 'TO',
  },
  {
    name: 'Trinidad and Tobago',
    code: 'TT',
  },
  {
    name: 'Tunisia',
    code: 'TN',
    pay_per_stream: 0.000702533348,
  },
  {
    name: 'Turkey',
    code: 'TR',
    pay_per_stream: 0.000841734325,
  },
  {
    name: 'Turkmenistan',
    code: 'TM',
  },
  {
    name: 'Turks and Caicos Islands',
    code: 'TC',
  },
  {
    name: 'Tuvalu',
    code: 'TV',
  },
  {
    name: 'Uganda',
    code: 'UG',
  },
  {
    name: 'Ukraine',
    code: 'UA',
  },
  {
    name: 'United Arab Emirates',
    code: 'UAE',
    pay_per_stream: 0.002527096653,
  },
  {
    name: 'United Kingdom',
    code: 'UK',
    pay_per_stream: 0.004912438819,
  },
  {
    name: 'United States Minor Outlying Islands',
    code: 'UM',
  },
  {
    name: 'Uruguay',
    code: 'UY',
    pay_per_stream: 0.002488829214,
  },
  {
    name: 'Uzbekistan',
    code: 'UZ',
  },
  {
    name: 'Vanuatu',
    code: 'VU',
  },
  {
    name: 'Venezuela',
    code: 'VE',
  },
  {
    name: 'Vietnam',
    code: 'VN',
    pay_per_stream: 0.00163277575,
  },
  {
    name: 'Virgin Islands, British',
    code: 'VG',
  },
  {
    name: 'Virgin Islands, U.S.',
    code: 'VI',
  },
  {
    name: 'Wallis and Futuna',
    code: 'WF',
  },
  {
    name: 'Western Sahara',
    code: 'EH',
  },
  {
    name: 'Yemen',
    code: 'YE',
  },
  {
    name: 'Zambia',
    code: 'ZM',
  },
  {
    name: 'Zimbabwe',
    code: 'ZW',
  },
];
