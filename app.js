// Mock Database of Destinations
// In a real app, this would come from an API.
const DATABASE = {
    // Mapping Regions/Countries to specific Cities/Airports
    mappings: {
        regions: {
            'east coast': ['new york', 'washington dc', 'atlanta', 'miami', 'orlando', 'fort lauderdale', 'boston', 'philadelphia', 'san juan'],
            'east': ['new york', 'washington dc', 'atlanta', 'miami', 'orlando', 'fort lauderdale', 'boston', 'philadelphia', 'san juan'],

            'europe': ['london', 'paris', 'madrid', 'barcelona', 'mykonos', 'amsterdam', 'berlin'],
            'eur': ['london', 'paris', 'madrid', 'barcelona', 'mykonos', 'amsterdam', 'berlin'],

            'asia': ['tokyo', 'bangkok', 'taipei'],

            'africa': ['cape town'],
            'afr': ['cape town'],

            'australia': ['sydney', 'melbourne'],
            'aus': ['sydney', 'melbourne'],

            'americas': ['puerto vallarta', 'mexico city', 'rio de janeiro', 'sao paulo', 'buenos aires', 'bogota', 'curacao'],
            'mexico': ['puerto vallarta', 'mexico city'],
            'central america': ['puerto vallarta', 'mexico city', 'curacao'], // Loose grouping per request context
            'south america': ['rio de janeiro', 'sao paulo', 'buenos aires', 'bogota', 'curacao'],
            'caribbean': ['curacao', 'san juan'],

            'central': ['chicago', 'new orleans', 'minneapolis', 'houston', 'columbus'],
            'cen': ['chicago', 'new orleans', 'minneapolis', 'houston', 'columbus'],

            'west coast': ['las vegas', 'palm springs', 'san francisco', 'los angeles', 'denver', 'aspen', 'honolulu'],
            'west': ['las vegas', 'palm springs', 'san francisco', 'los angeles', 'denver', 'aspen', 'honolulu']
        },
        countries: {
            // Preserving explicit country logical lookups in addition to region aliases
            'australia': ['sydney', 'melbourne'],
            'uk': ['london'],
            'united kingdom': ['london'],
            'france': ['paris'],
            'spain': ['madrid', 'barcelona'],
            'greece': ['mykonos'],
            'japan': ['tokyo'],
            'thailand': ['bangkok'],
            'taiwan': ['taipei'],
            'mexico': ['puerto vallarta', 'mexico city'],
            'usa': ['new york', 'washington dc', 'atlanta', 'miami', 'orlando', 'fort lauderdale', 'boston', 'philadelphia', 'chicago', 'new orleans', 'minneapolis', 'houston', 'columbus', 'las vegas', 'palm springs', 'san francisco', 'los angeles', 'denver', 'aspen', 'honolulu'],
            'united states': ['new york', 'washington dc', 'atlanta', 'miami', 'orlando', 'fort lauderdale', 'boston', 'philadelphia', 'chicago', 'new orleans', 'minneapolis', 'houston', 'columbus', 'las vegas', 'palm springs', 'san francisco', 'los angeles', 'denver', 'aspen', 'honolulu'],
            'brazil': ['rio de janeiro', 'sao paulo'],
            'argentina': ['buenos aires'],
            'colombia': ['bogota'],
            'south africa': ['cape town'],
            'curacao': ['curacao']
        },
        cities: {
            'new york': ['jfk', 'lga', 'ewr'],
            'nyc': ['jfk', 'lga', 'ewr'],
            'lga': ['lga'],
            'jfk': ['jfk'],
            'ewr': ['ewr'],
            'washington dc': ['washington dc'],
            'iad': ['washington dc'],
            'dca': ['washington dc'],
            'atlanta': ['atlanta'],
            'atl': ['atlanta'],
            'atlanta, ga': ['atlanta'],
            'miami': ['miami'],
            'mia': ['miami'],
            'miami, fl': ['miami'],
            'orlando': ['orlando'],
            'mco': ['orlando'],
            'orlando, fl': ['orlando'],
            'fort lauderdale': ['fort lauderdale'],
            'fll': ['fort lauderdale'],
            'fort lauderdale, fl': ['fort lauderdale'],
            'boston': ['boston'],
            'bos': ['boston'],
            'boston, ma': ['boston'],
            'philadelphia': ['philadelphia'],
            'phl': ['philadelphia'],
            'philadelphia, pa': ['philadelphia'],
            'san juan': ['san juan'],
            'sju': ['san juan'],
            'san juan, pr': ['san juan'],
            'san juan, puerto rico': ['san juan'],

            'london': ['lhr', 'lgw'],
            'paris': ['cdg', 'ory'],
            'madrid': ['madrid'],
            'mad': ['madrid'],
            'barcelona': ['barcelona'],
            'bcn': ['barcelona'],
            'mykonos': ['mykonos'],
            'jmk': ['mykonos'],
            'amsterdam': ['ams'], // Placeholder if ams key doesn't exist in Details, might default
            'berlin': ['ber'], // Placeholder

            'tokyo': ['tokyo'],
            'nrt': ['tokyo'],
            'hnd': ['tokyo'],
            'bangkok': ['bangkok'],
            'bkk': ['bangkok'],
            'taipei': ['taipei'],
            'tpe': ['taipei'],

            'cape town': ['cape town'],
            'cpt': ['cape town'],

            'sydney': ['syd'], // Placeholder
            'melbourne': ['mel'], // Placeholder

            'puerto vallarta': ['puerto vallarta'],
            'pvr': ['puerto vallarta'],
            'mexico city': ['mexico city'],
            'mex': ['mexico city'],
            'rio de janeiro': ['rio de janeiro'],
            'gig': ['rio de janeiro'],
            'sao paulo': ['sao paulo'],
            'gru': ['sao paulo'],
            'buenos aires': ['buenos aires'],
            'eze': ['buenos aires'],
            'bogota': ['bogota'],
            'bog': ['bogota'],
            'curacao': ['curacao'],
            'cur': ['curacao'],
            'ba': ['buenos aires'],

            'chicago': ['chicago'],
            'ord': ['chicago'],
            'mdw': ['chicago'],
            'new orleans': ['new orleans'],
            'msy': ['new orleans'],
            'minneapolis': ['minneapolis'],
            'mpls': ['minneapolis'],
            'msp': ['minneapolis'],
            'minneapolis, mn': ['minneapolis'],
            'houston': ['houston'],
            'iah': ['houston'],
            'hou': ['houston'],
            'houston, tx': ['houston'],
            'columbus': ['columbus'],
            'cmh': ['columbus'],
            'columbus, oh': ['columbus'],

            'las vegas': ['las vegas'],
            'las': ['las vegas'],
            'las vegas, nv': ['las vegas'],
            'palm springs': ['palm springs'],
            'psp': ['palm springs'],
            'palm springs, ca': ['palm springs'],
            'san francisco': ['san francisco'],
            'sfo': ['san francisco'],
            'san francisco, ca': ['san francisco'],
            'los angeles': ['los angeles'],
            'lax': ['los angeles'],
            'los angeles, ca': ['los angeles'],
            'denver': ['denver'],
            'den': ['denver'],
            'denver, co': ['denver'],
            'aspen': ['aspen'],
            'ase': ['aspen'],
            'aspen, co': ['aspen'],
            'honolulu': ['honolulu'],
            'hnl': ['honolulu'],
            'honolulu, hi': ['honolulu']
        }
    },

    // Rich Data for each specific destination key
    details: {
        // EUROPE
        'london': {
            name: 'London, UK', iata: 'LHR', image: '🇬🇧', weather: 'Partly Cloudy, 59°F',
            baseFare: [450, 800],
            lgbtqSafety: 'United Kingdom: Very Safe. Strong legal protections.', lgbtqDistrict: 'Soho & Vauxhall',
            hotels: [
                { name: 'The Standard London', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'W London Leicester Square', type: 'Luxury', tags: ['LGBTQ Hotel'] },
                { name: 'Ham Yard Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Soho Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Hazlitt\'s', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'The Z Hotel Soho', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Mandarin Oriental Hyde Park', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Ace Hotel London', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'The Hoxton Holborn', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'CitizenM London Bankside', type: 'Moderate', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'G-A-Y Bar', type: 'Bar', tags: ['Pop music'] },
                { name: 'Heaven', type: 'Club', tags: ['Legendary'] },
                { name: 'Royal Vauxhall Tavern', type: 'Bar', tags: ['Cabaret'] },
                { name: 'Ku Bar', type: 'Bar', tags: ['Video Bar'] },
                { name: 'The Yard', type: 'Bar', tags: ['Courtyard'] },
                { name: 'Friendly Society', type: 'Bar', tags: ['Unique Decor'] },
                { name: 'She Soho', type: 'Bar', tags: ['Lesbian Bar'] },
                { name: 'Circa', type: 'Club', tags: ['DJs'] },
                { name: 'Freedom Bar', type: 'Club', tags: ['Showtunes'] },
                { name: 'Pleasuredrome', type: 'Sauna', tags: ['Bathhouse'] }
            ],
            tours: ['Soho History Walk', 'West End Musical', 'British Museum LGBTQ Tour', 'Tower of London', 'London Eye', 'Thames River Cruise', 'Harry Potter Tour']
        },
        'lhr': {
            name: 'London Heathrow (LHR)', iata: 'LHR', image: '🇬🇧', weather: 'Partly Cloudy, 59°F',
            baseFare: [450, 800],
            lgbtqSafety: 'Very Safe.', lgbtqDistrict: 'Soho',
            hotels: [
                { name: 'Sofitel Heathrow', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'The Standard London', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'W London', type: 'Luxury', tags: ['LGBTQ Hotel'] },
                { name: 'Soho Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Ham Yard', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Hazlitt\'s', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'Z Hotel', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Mandarin Oriental', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Ace Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Hoxton', type: 'Moderate', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'G-A-Y', type: 'Bar', tags: ['Pop'] },
                { name: 'Heaven', type: 'Club', tags: ['Club'] },
                { name: 'RVT', type: 'Bar', tags: ['Cabaret'] },
                { name: 'Ku Bar', type: 'Bar', tags: ['Bar'] },
                { name: 'The Yard', type: 'Bar', tags: ['Bar'] },
                { name: 'Pleasuredrome', type: 'Sauna', tags: ['Bathhouse'] },
                { name: 'She Soho', type: 'Bar', tags: ['Lesbian'] },
                { name: 'Circa', type: 'Club', tags: ['Club'] },
                { name: 'Freedom', type: 'Club', tags: ['Club'] },
                { name: 'Two Brewers', type: 'Bar', tags: ['Bar'] }
            ],
            tours: ['Windsor Castle', 'London Eye', 'Tower of London']
        },
        'lgw': {
            name: 'London Gatwick (LGW)', iata: 'LGW', image: '🇬🇧', weather: 'Partly Cloudy, 61°F',
            baseFare: [420, 750],
            lgbtqSafety: 'Very Safe.', lgbtqDistrict: 'Brighton (Nearby)',
            hotels: [
                { name: 'Bloc Hotel', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'The Grand Brighton', type: 'Luxury', tags: ['LGBTQ Hotel'] },
                { name: 'Hilton Gatwick', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Sofitel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Hampton by Hilton', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Premier Inn', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'YOTEL', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Courtyard by Marriott', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Sandman Signature', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Holiday Inn', type: 'Budget', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Revenge Brighton', type: 'Club', tags: ['Club'] },
                { name: 'Legends', type: 'Bar', tags: ['Hotel Bar'] },
                { name: 'Bulldog', type: 'Bar', tags: ['Pub'] },
                { name: 'Charles Street Tap', type: 'Bar', tags: ['Bar'] },
                { name: 'Bar 7', type: 'Bar', tags: ['Bar'] },
                { name: 'The Marlborough', type: 'Bar', tags: ['Pub'] },
                { name: 'Velvet', type: 'Bar', tags: ['Bar'] },
                { name: 'Brighton Sauna', type: 'Sauna', tags: ['Bathhouse'] },
                { name: 'Camelford Arms', type: 'Bar', tags: ['Pub'] },
                { name: 'Zone', type: 'Bar', tags: ['Bar'] }
            ],
            tours: ['Brighton Pier', 'Royal Pavilion', 'British Airways i360']
        },

        'paris': {
            name: 'Paris, France', iata: 'CDG', image: '🇫🇷', weather: 'Sunny, 64°F',
            baseFare: [500, 900],
            lgbtqSafety: 'France: Very Safe. Strong legal protections.', lgbtqDistrict: 'Le Marais',
            hotels: [
                { name: 'Hotel Jules & Jim', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'Sinner Paris', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Hotel Duuo', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Les Bains', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Hotel Original', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Hidden Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Vice Versa', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Hotel Emile', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'D\'Aubusson', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'L\'Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'RAIDD Bar', type: 'Bar', tags: ['Shower Shows'] },
                { name: 'Le Bears Den', type: 'Bar', tags: ['Bears'] },
                { name: 'CUD Bar', type: 'Club', tags: ['Late Night'] },
                { name: 'Open Cafe', type: 'Bar', tags: ['Cafe'] },
                { name: 'Banana Cafe', type: 'Bar', tags: ['Drag'] },
                { name: 'Sun City', type: 'Sauna', tags: ['Bathhouse'] },
                { name: 'Les Souffleurs', type: 'Bar', tags: ['Relaxed'] },
                { name: 'Yestoday', type: 'Bar', tags: ['Mini'] },
                { name: 'Le Duplex', type: 'Bar', tags: ['Bar'] },
                { name: 'Gibus', type: 'Club', tags: ['Club'] }
            ],
            tours: ['Louvre Museum', 'Eiffel Tower Picnic', 'Marais Walking Tour', 'Seine Cruise', 'Versailles Palace', 'Catacombs', 'Moulin Rouge']
        },
        'cdg': {
            name: 'Paris Charles de Gaulle (CDG)', iata: 'CDG', image: '🇫🇷', weather: 'Sunny, 64°F',
            baseFare: [500, 900],
            lgbtqSafety: 'Safe.', lgbtqDistrict: 'Le Marais',
            hotels: [
                { name: 'Pullman CDG', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Sinner Paris', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Jules & Jim', type: 'Moderate', tags: ['LGBTQ Itel'] },
                { name: 'Le Marais Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'CitizenM CDG', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'YOTELAir', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Novotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Ibis Styles', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Mercure', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Sheraton CDG', type: 'Luxury', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'RAIDD Bar', type: 'Bar', tags: ['Bar'] },
                { name: 'Le Bears Den', type: 'Bar', tags: ['Bar'] },
                { name: 'CUD Bar', type: 'Club', tags: ['Club'] },
                { name: 'Open Cafe', type: 'Bar', tags: ['Cafe'] },
                { name: 'Banana Cafe', type: 'Bar', tags: ['Bar'] },
                { name: 'IDM Sauna', type: 'Sauna', tags: ['Bathhouse'] },
                { name: 'Les Souffleurs', type: 'Bar', tags: ['Bar'] },
                { name: 'Yestoday', type: 'Bar', tags: ['Bar'] },
                { name: 'Le Duplex', type: 'Bar', tags: ['Bar'] },
                { name: 'Gibus', type: 'Club', tags: ['Club'] }
            ],
            tours: ['Seine Cruise', 'Louvre', 'Eiffel Tower']
        },
        'ory': {
            name: 'Paris Orly (ORY)', iata: 'ORY', image: '🇫🇷', weather: 'Sunny, 66°F',
            baseFare: [480, 850],
            lgbtqSafety: 'Safe.', lgbtqDistrict: 'Le Marais',
            hotels: [
                { name: 'Novotel Orly', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Kyriad', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Mercure', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Ibis', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Hilton Garden Inn', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Best Western', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Howard Johnson', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'All Suites', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Grand Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Adagio', type: 'Moderate', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Le Bears Den', type: 'Bar', tags: ['Bar'] },
                { name: 'RAIDD', type: 'Bar', tags: ['Bar'] },
                { name: 'Open Cafe', type: 'Bar', tags: ['Cafe'] }
            ],
            tours: ['Versailles', 'Orsay Museum', 'Montmartre']
        },

        'amsterdam': {
            name: 'Amsterdam, Netherlands', iata: 'AMS', image: '🇳🇱', weather: 'Rainy, 57°F',
            baseFare: [550, 950],
            lgbtqSafety: 'Netherlands: Very Safe. Progressive protections.', lgbtqDistrict: 'Reguliersdwarsstraat',
            hotels: [
                { name: 'W Amsterdam', type: 'Luxury', tags: ['LGBTQ Hotel'] },
                { name: 'Ink Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Andaz Amsterdam', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Pulitzer', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'The Hoxton', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Conservatorium', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Room Mate Aitana', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Hotel V', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Lloyd Hotel', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Volkshotel', type: 'Budget', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Club NYX', type: 'Club', tags: ['Club'] },
                { name: 'Prik', type: 'Bar', tags: ['Bar'] },
                { name: 'Taboo', type: 'Bar', tags: ['Bar'] },
                { name: 'Soho', type: 'Bar', tags: ['Bar'] },
                { name: 'Eagle Amsterdam', type: 'Bar', tags: ['Leather'] },
                { name: 'Church', type: 'Club', tags: ['Cruising'] },
                { name: 'Spijker', type: 'Bar', tags: ['Bar'] },
                { name: 'Nieuwezijds Sauna', type: 'Sauna', tags: ['Bathhouse'] },
                { name: 'Queen\'s Head', type: 'Bar', tags: ['Drag'] },
                { name: 'Exit', type: 'Club', tags: ['Club'] }
            ],
            tours: ['Canal Cruise', 'Anne Frank House', 'Homomonument', 'Van Gogh Museum', 'Rijksmuseum', 'Heineken Experience', 'Red Light District Tour']
        },
        'berlin': {
            name: 'Berlin, Germany', iata: 'BER', image: '🇩🇪', weather: 'Cloudy, 54°F',
            baseFare: [520, 880],
            lgbtqSafety: 'Germany: Very Safe. Strong legal protections.', lgbtqDistrict: 'Schöneberg',
            hotels: [
                { name: 'Axel Hotel Berlin', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: '25hours Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Michelberger', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Soho House', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Nhow Berlin', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Art\'otel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Vienna House', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Motel One', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Grimm\'s Hotel', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Provocateur', type: 'Luxury', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Berghain', type: 'Club', tags: ['Techno'] },
                { name: 'Schwuz', type: 'Club', tags: ['Club'] },
                { name: 'Grosse Freiheit', type: 'Bar', tags: ['Bar'] },
                { name: 'KitKatClub', type: 'Club', tags: ['Fetish'] },
                { name: 'Tom\'s Bar', type: 'Bar', tags: ['Cruising'] },
                { name: 'Prinzknecht', type: 'Bar', tags: ['Bar'] },
                { name: 'Der Boiler', type: 'Sauna', tags: ['Bathhouse'] },
                { name: 'Möbel Olfe', type: 'Bar', tags: ['Bar'] },
                { name: 'Roses', type: 'Bar', tags: ['Kitsch'] },
                { name: 'Connection', type: 'Club', tags: ['Club'] }
            ],
            tours: ['Berlin Wall', 'Brandenburg Gate', 'Reichstag', 'Museum Island', 'TV Tower', 'East Side Gallery', 'Sachsenhausen Memorial']
        },

        // AUSTRALIA
        'sydney': {
            name: 'Sydney, Australia', iata: 'SYD', image: '🇦🇺', weather: 'Sunny, 77°F',
            baseFare: [1100, 1800],
            lgbtqSafety: 'Australia: Very Safe. Strong legal protections.', lgbtqDistrict: 'Oxford Street (Darlinghurst)',
            hotels: [
                { name: 'The Sentinel', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Ovolo Woolloomooloo', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'QT Sydney', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Pullman Hyde Park', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Cambridge Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Arts Hotel', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Medusa Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Vibe Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Kirketon Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Adina Apartment', type: 'Moderate', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'The Stonewall Hotel', type: 'Bar', tags: ['Drag'] },
                { name: 'Universal', type: 'Club', tags: ['Club'] },
                { name: 'ARQ', type: 'Club', tags: ['Club'] },
                { name: 'The Oxford Hotel', type: 'Bar', tags: ['Pub'] },
                { name: 'Palms on Oxford', type: 'Bar', tags: ['Retro'] },
                { name: 'Ching-a-Lings', type: 'Bar', tags: ['Intimate'] },
                { name: 'Sydney Sauna', type: 'Sauna', tags: ['Bathhouse'] },
                { name: 'Imperial Hotel', type: 'Bar', tags: ['Drag'] },
                { name: 'Colombian Hotel', type: 'Bar', tags: ['Pub'] },
                { name: 'Midnight Shift', type: 'Club', tags: ['Legacy'] }
            ],
            tours: ['Opera House', 'Bondi Beach Walk', 'Bridge Climb', 'Taronga Zoo', 'Blue Mountains', 'Darling Harbour', 'The Rocks']
        },
        'melbourne': {
            name: 'Melbourne, Australia', iata: 'MEL', image: '🇦🇺', weather: 'Variable, 68°F',
            baseFare: [1050, 1750],
            lgbtqSafety: 'Australia: Very Safe. Strong legal protections.', lgbtqDistrict: 'Collingwood & Prahran',
            hotels: [
                { name: 'The Cullen', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Adelphi Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'QT Melbourne', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Ovolo Laneways', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'The Prince', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'Tolarno Hotel', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Coppersmith', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Zagame\'s House', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Jazz Corner Hotel', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Brady Hotels', type: 'Budget', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Sircuit', type: 'Bar', tags: ['Drag'] },
                { name: 'The Laird', type: 'Bar', tags: ['Men Only'] },
                { name: 'Poof Doof', type: 'Club', tags: ['Club'] },
                { name: 'DT\'s Hotel', type: 'Bar', tags: ['Pub'] },
                { name: 'The Peel', type: 'Club', tags: ['Club'] },
                { name: 'Evie\'s', type: 'Bar', tags: ['Disco Diner'] },
                { name: 'Rainbow Hotel', type: 'Bar', tags: ['Pub'] },
                { name: 'Pride of our Footscray', type: 'Bar', tags: ['Community'] },
                { name: 'Wet on Wellington', type: 'Sauna', tags: ['Bathhouse'] },
                { name: 'Yah Yah\'s', type: 'Club', tags: ['Late Night'] }
            ],
            tours: ['Street Art Laneways', 'Yarra Valley Wine Tour', 'Great Ocean Road', 'Phillip Island Penguins', 'Eureka Skydeck', 'Melbourne Cricket Ground', 'Royal Botanic Gardens']
        },

        // USA - NYC Airports
        'jfk': {
            name: 'New York (JFK)', iata: 'JFK', image: '🇺🇸', weather: 'Sunny, 72°F',
            baseFare: [200, 450],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'Hell\'s Kitchen & Chelsea',
            hotels: [
                { name: 'The TWA Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Room Mate Grace', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'The Standard High Line', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Ace Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Arlo NoMad', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Moxy Chelsea', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Kimpton Eventi', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Dream Downtown', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Gansevoort', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Ink 48', type: 'Luxury', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Industry', type: 'Bar', tags: ['Shows'] },
                { name: 'The Ritz', type: 'Bar', tags: ['Dance'] },
                { name: 'Barracuda', type: 'Bar', tags: ['Drag'] },
                { name: 'Rise', type: 'Bar', tags: ['Neighborhood'] },
                { name: 'Hardware', type: 'Bar', tags: ['Dance'] },
                { name: 'Boxers', type: 'Bar', tags: ['Sports'] },
                { name: 'Flaming Saddles', type: 'Bar', tags: ['Country'] },
                { name: 'Therapy', type: 'Bar', tags: ['Lounge'] },
                { name: 'East Side Club', type: 'Sauna', tags: ['Bathhouse'] },
                { name: 'Gym Bar', type: 'Bar', tags: ['Sports'] }
            ],
            tours: ['Statue of Liberty', 'Broadway Show', 'Empire State Building', '9/11 Memorial', 'High Line', 'Central Park', 'MoMA']
        },
        'lga': {
            name: 'New York (LaGuardia)', iata: 'LGA', image: '🇺🇸', weather: 'Sunny, 72°F',
            baseFare: [200, 450],
            lgbtqSafety: 'Safe.', lgbtqDistrict: 'Hell\'s Kitchen',
            hotels: [
                { name: 'Box House Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Paper Factory Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Ravel Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Collective Paper Factory', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'The William Vale', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Wythe Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Hoxton Williamsburg', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'McCarren Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Pod Brooklyn', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Henry Norman', type: 'Moderate', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Hardware', type: 'Bar', tags: ['Dance'] },
                { name: 'Rise', type: 'Bar', tags: ['Bar'] },
                { name: 'Industry', type: 'Bar', tags: ['Shows'] },
                { name: 'Therapy', type: 'Bar', tags: ['Lounge'] },
                { name: 'Ritz', type: 'Bar', tags: ['Dance'] },
                { name: 'Barracuda', type: 'Bar', tags: ['Drag'] },
                { name: 'Boxers', type: 'Bar', tags: ['Sports'] },
                { name: 'Flaming Saddles', type: 'Bar', tags: ['Country'] },
                { name: 'Gym Bar', type: 'Bar', tags: ['Sports'] },
                { name: 'Rebar', type: 'Bar', tags: ['Pub'] }
            ],
            tours: ['Central Park Bike Tour', 'Met Museum', 'Times Square']
        },
        'ewr': {
            name: 'Newark (EWR)', iata: 'EWR', image: '🇺🇸', weather: 'Sunny, 73°F',
            baseFare: [200, 450],
            lgbtqSafety: 'Safe.', lgbtqDistrict: 'Jersey City / NYC',
            hotels: [
                { name: 'W Hoboken', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Hyatt Regency', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Westin Jersey City', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'DoubleTree', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Courtyard', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Residence Inn', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Element Harrison', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'TRYP by Wyndham', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Robert Treat', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Hotel Indigo', type: 'Moderate', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Pint', type: 'Bar', tags: ['Pub'] },
                { name: 'Six26', type: 'Club', tags: ['Club'] },
                { name: 'Paradise', type: 'Club', tags: ['Club'] },
                { name: 'Georgie\'s', type: 'Bar', tags: ['Local'] },
                { name: 'Club Feathers', type: 'Club', tags: ['Club'] },
                { name: 'Olive\'s', type: 'Bar', tags: ['Bistro'] },
                { name: 'Porta', type: 'Club', tags: ['Late Night'] },
                { name: 'Miss Wong\'s', type: 'Bar', tags: ['Lounge'] },
                { name: 'House of Que', type: 'Bar', tags: ['Bar'] },
                { name: 'Lutze', type: 'Bar', tags: ['Outdoor'] }
            ],
            tours: ['Liberty State Park', 'Ellis Island', 'Prudential Center']
        },

        // US WEST & MOUNTAIN
        'san francisco': {
            name: 'San Francisco, CA', iata: 'SFO', image: '🇺🇸', weather: 'Foggy/Sunny, 65°F',
            baseFare: [250, 500],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'The Castro',
            hotels: [
                { name: 'Beck\'s Motor Lodge', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Parker Guest House', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'W San Francisco', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Hotel Zelos', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Twin Peaks Hotel', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Hotel Whitcomb', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'The Proper', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Phoenix Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Noe\'s Nest', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'St. Regis', type: 'Luxury', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'The Midnight Sun', type: 'Bar', tags: ['Video Bar'] },
                { name: 'Toad Hall', type: 'Bar', tags: ['Bar'] },
                { name: 'Twin Peaks', type: 'Bar', tags: ['Historic'] },
                { name: 'The Cafe', type: 'Club', tags: ['Club'] },
                { name: '440 Castro', type: 'Bar', tags: ['Bears'] },
                { name: 'Beaux', type: 'Club', tags: ['Club'] },
                { name: 'The Mix', type: 'Bar', tags: ['Patio'] },
                { name: 'Moby Dick', type: 'Bar', tags: ['Pool Table'] },
                { name: 'Steamworks', type: 'Sauna', tags: ['Bathhouse'] },
                { name: 'Oasis', type: 'Club', tags: ['Drag'] }
            ],
            tours: ['Castro History Walk', 'Golden Gate Bridge', 'Alcatraz']
        },
        'los angeles': {
            name: 'Los Angeles, CA', iata: 'LAX', image: '🇺🇸', weather: 'Sunny, 75°F',
            baseFare: [250, 500],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'West Hollywood (WeHo)',
            hotels: [
                { name: 'The Abbey Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Andaz West Hollywood', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Ramada WeHo', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Petit Ermitage', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Mondrian', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Le Parc Suite', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Chamberlain', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Montrose', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: '1 Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Standard Hollywood', type: 'Moderate', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'The Abbey', type: 'Bar', tags: ['Famous'] },
                { name: 'Micky\'s', type: 'Club', tags: ['Club'] },
                { name: 'Hi Tops', type: 'Bar', tags: ['Sports'] },
                { name: 'Beaches WeHo', type: 'Bar', tags: ['Lounge'] },
                { name: 'Rocco\'s', type: 'Bar', tags: ['Lively'] },
                { name: 'Akbar', type: 'Bar', tags: ['Alternative'] },
                { name: 'Precinct', type: 'Club', tags: ['Drag'] },
                { name: 'Eagle LA', type: 'Bar', tags: ['Leather'] },
                { name: 'Faultline', type: 'Bar', tags: ['Bears'] },
                { name: 'Flex', type: 'Sauna', tags: ['Bathhouse'] }
            ],
            tours: ['Hollywood Walk of Fame', 'Universal Studios', 'Griffith Observatory']
        },
        'palm springs': {
            name: 'Palm Springs, CA', iata: 'PSP', image: '🇺🇸', weather: 'Hot/Sunny, 90°F',
            baseFare: [300, 600],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'Arenas Road',
            hotels: [
                { name: 'Santiago Resort', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'Triangle Inn', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'Canyon Club', type: 'moderate', tags: ['LGBTQ Hotel'] },
                { name: 'CCBC Resort', type: 'Details', tags: ['LGBTQ Hotel'] },
                { name: 'La Dolce Vita', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'Ace Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Saguaro', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Tuscany Manor', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Kimpton Rowan', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Parker Palm Springs', type: 'Luxury', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Hunters', type: 'Club', tags: ['Dance'] },
                { name: 'Streetbar', type: 'Bar', tags: ['Karaoke'] },
                { name: 'Chill Bar', type: 'Bar', tags: ['Lounge'] },
                { name: 'Blackbook', type: 'Bar', tags: ['Food'] },
                { name: 'Eagle 501', type: 'Bar', tags: ['Leather'] },
                { name: 'Quadz', type: 'Bar', tags: ['Video'] },
                { name: 'Stacy\'s', type: 'Bar', tags: ['Piano'] },
                { name: 'Toucan\'s', type: 'Club', tags: ['Drag'] },
                { name: 'One Eleven', type: 'Bar', tags: ['Cocktails'] },
                { name: 'Tool Shed', type: 'Bar', tags: ['Leather'] }
            ],
            tours: ['Aerial Tramway', 'Joshua Tree', 'Mid-Century Home Tour']
        },
        'las vegas': {
            name: 'Las Vegas, NV', iata: 'LAS', image: '🇺🇸', weather: 'Hot/Dry, 85°F',
            baseFare: [150, 400],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'Fruit Loop (off strip)',
            hotels: [
                { name: 'Blue Moon Resort', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'Luxor', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Cosmopolitan', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Wynn', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Virgin Hotels', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Paris Las Vegas', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'MGM Grand', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Park MGM', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Flamingo', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'ARIA', type: 'Luxury', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Piranha', type: 'Club', tags: ['Club'] },
                { name: 'FreeZone', type: 'Bar', tags: ['Casual'] },
                { name: 'QuadZ', type: 'Bar', tags: ['Video'] },
                { name: 'The Garden', type: 'Bar', tags: ['Drag'] },
                { name: 'Flex', type: 'Bar', tags: ['Dive'] },
                { name: 'Phoenix', type: 'Bar', tags: ['Local'] },
                { name: 'Badlands', type: 'Bar', tags: ['Country'] },
                { name: 'Fun Hog Ranch', type: 'Bar', tags: ['Dive'] },
                { name: 'Garage', type: 'Bar', tags: ['Cheap Drinks'] },
                { name: 'Entourage', type: 'Sauna', tags: ['Bathhouse'] }
            ],
            tours: ['The Strip', 'Fremont Street', 'Grand Canyon Helicopter']
        },
        'denver': {
            name: 'Denver, CO', iata: 'DEN', image: '🇺🇸', weather: 'Sunny, 60°F',
            baseFare: [200, 450],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'Capitol Hill (Colfax)',
            hotels: [
                { name: 'The Art Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Warwick Denver', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Catbird', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Moxy Cherry Creek', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Hotel Born', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Halcyon', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Source Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Hostel Fish', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Maven', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Crawford', type: 'Luxury', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Tracks', type: 'Club', tags: ['Omaha'] },
                { name: 'X Bar', type: 'Bar', tags: ['Patio'] },
                { name: 'Charlie\'s', type: 'Bar', tags: ['Country'] },
                { name: 'The Triangle', type: 'Bar', tags: ['Cocktails'] },
                { name: 'Tight End', type: 'Bar', tags: ['Sports'] },
                { name: 'Trade', type: 'Bar', tags: ['Leather'] },
                { name: 'Sweet', type: 'Bar', tags: ['Bear'] },
                { name: 'Boyztown', type: 'Club', tags: ['Dancers'] },
                { name: 'Li\'l Devils', type: 'Bar', tags: ['Lounge'] },
                { name: 'Denver Sweet', type: 'Bar', tags: ['Bear'] }
            ],
            tours: ['Red Rocks', 'Rocky Mountain Park', 'Coors Brewery']
        },
        'aspen': {
            name: 'Aspen, CO', iata: 'ASE', image: '🇺🇸', weather: 'Snow/Cool, 35°F',
            baseFare: [400, 900],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'Downtown',
            hotels: [
                { name: 'Limelight', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'The Little Nell', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'W Aspen', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Hotel Jerome', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'St. Regis', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Aspen Mountain Lodge', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Molly Gibson', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Mountain Chalet', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'The Gant', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Tyrolean Lodge', type: 'Budget', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Eric\'s Bar', type: 'Bar', tags: ['Social'] },
                { name: 'Escobar', type: 'Club', tags: ['Dance'] },
                { name: 'Hooch', type: 'Bar', tags: ['Cocktails'] },
                { name: 'J-Bar', type: 'Bar', tags: ['Classic'] },
                { name: 'Silver City', type: 'Bar', tags: ['Saloon'] },
                { name: 'Belly Up', type: 'Club', tags: ['Music'] },
                { name: 'Caribou Club', type: 'Club', tags: ['Exclusive'] },
                { name: 'Mi Chola', type: 'Bar', tags: ['Fun'] },
                { name: 'Red Onion', type: 'Bar', tags: ['Historic'] },
                { name: '39 Degrees', type: 'Bar', tags: ['Lounge'] }
            ],
            tours: ['Skiing', 'Maroon Bells', 'Gondola Ride']
        },
        'honolulu': {
            name: 'Honolulu, HI', iata: 'HNL', image: '🇺🇸', weather: 'Tropical, 82°F',
            baseFare: [600, 1200],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'Waikiki (Hula\'s)',
            hotels: [
                { name: 'Surfjack', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Queen Kapiolani', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Laylow', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Shoreline', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Royal Hawaiian', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Sheraton Waikiki', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Renew', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Vive Hotel', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Hyatt Centric', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Alohilani', type: 'Luxury', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Hula\'s Bar', type: 'Bar', tags: ['Legendary'] },
                { name: 'Bacchus', type: 'Bar', tags: ['Lounge'] },
                { name: 'Scarlet', type: 'Club', tags: ['Drag'] },
                { name: 'Wang Chung\'s', type: 'Bar', tags: ['Karaoke'] },
                { name: 'Tapas', type: 'Bar', tags: ['Patio'] },
                { name: 'In Between', type: 'Bar', tags: ['Karaoke'] },
                { name: 'Max\'s Gym', type: 'Sauna', tags: ['Bathhouse'] },
                { name: 'Chiko\'s', type: 'Bar', tags: ['Local'] },
                { name: 'Hideaway', type: 'Bar', tags: ['Casual'] },
                { name: 'Smith\'s Union', type: 'Bar', tags: ['Dive'] }
            ],
            tours: ['Diamond Head', 'Catamaran Sail', 'Pearl Harbor']
        },

        // US MIDWEST & SOUTH
        'chicago': {
            name: 'Chicago, IL', iata: 'ORD', image: '🇺🇸', weather: 'Windy, 60°F',
            baseFare: [200, 450],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'Northalsted (Boystown)',
            hotels: [
                { name: 'Hotel Zachary', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'The Best Western Hawthorne', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'City Suites Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Viceroy Chicago', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Virgin Hotels', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Thompson Chicago', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'The Robey', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Freehand', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Chicago Getaway Hostel', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Soho House', type: 'Luxury', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Sidetrack', type: 'Bar', tags: ['Video Bar'] },
                { name: 'Roscoe\'s', type: 'Bar', tags: ['Drag'] },
                { name: 'Scarlet', type: 'Club', tags: ['Dance'] },
                { name: 'Hydrate', type: 'Club', tags: ['Late Night'] },
                { name: 'Berlin', type: 'Club', tags: ['Alternative'] },
                { name: 'Big Chicks', type: 'Bar', tags: ['Food'] },
                { name: 'Jeffery Pub', type: 'Bar', tags: ['Historic'] },
                { name: 'The closet', type: 'Bar', tags: ['Intimate'] },
                { name: 'Steamworks', type: 'Sauna', tags: ['Bathhouse'] },
                { name: 'Charlie\'s', type: 'Bar', tags: ['Country'] }
            ],
            tours: ['Architecture River Cruise', 'Art Institute', 'Millennium Park']
        },
        'columbus': {
            name: 'Columbus, OH', iata: 'CMH', image: '🇺🇸', weather: 'Nice, 65°F',
            baseFare: [250, 500],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'Short North',
            hotels: [
                { name: 'Le Meridien The Joseph', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Graduate Columbus', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Moxy Columbus', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Hilton Downtown', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'The Junta', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'AC Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Hotel LeVeque', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Sonesta', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Canopy by Hilton', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Drury Inn', type: 'Budget', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Axis', type: 'Club', tags: ['Drag'] },
                { name: 'Union Cafe', type: 'Bar', tags: ['Patio'] },
                { name: 'Slammers', type: 'Bar', tags: ['Pizza'] },
                { name: 'Tremont Lounge', type: 'Bar', tags: ['Dive'] },
                { name: 'Boscoe\'s', type: 'Bar', tags: ['Shows'] },
                { name: 'District West', type: 'Club', tags: ['Drag'] },
                { name: 'Southbend', type: 'Bar', tags: ['Dive'] },
                { name: 'AWOL', type: 'Bar', tags: ['Patio'] },
                { name: 'Club Diversity', type: 'Bar', tags: ['Piano'] },
                { name: 'Cavan Irish Pub', type: 'Bar', tags: ['Pub'] }
            ],
            tours: ['Short North Arts', 'German Village', 'Scioto Mile']
        },
        'minneapolis': {
            name: 'Minneapolis, MN', iata: 'MSP', image: '🇺🇸', weather: 'Cool/Nice, 60°F',
            baseFare: [250, 500],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'Downtown / Loring Park',
            hotels: [
                { name: 'Hewing Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'W Minneapolis', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Chambers Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Graduate Minneapolis', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Moxy Uptown', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Hotel Alma', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'AC Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Rand Tower', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Element', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Canopy', type: 'Moderate', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Gay 90s', type: 'Club', tags: ['Drag'] },
                { name: 'The Saloon', type: 'Club', tags: ['Video Bar'] },
                { name: 'Eagle Bolt', type: 'Bar', tags: ['Leather'] },
                { name: '19 Bar', type: 'Bar', tags: ['Dive'] },
                { name: 'Lush', type: 'Bar', tags: ['Lounge'] },
                { name: 'Black Hart', type: 'Bar', tags: ['Soccer'] },
                { name: 'Jetset', type: 'Bar', tags: ['Underground'] },
                { name: 'Trax', type: 'Bar', tags: ['Dance'] },
                { name: 'Garden', type: 'Bar', tags: ['Patio'] },
                { name: 'Brass Rail', type: 'Bar', tags: ['Lounge'] }
            ],
            tours: ['Mall of America', 'Sculpture Garden', 'Prince Tour']
        },
        'houston': {
            name: 'Houston, TX', iata: 'IAH', image: '🇺🇸', weather: 'Humid, 80°F',
            baseFare: [250, 500],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'Montrose',
            hotels: [
                { name: 'La Colombe d\'Or', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Hotel ZaZa', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'The Lancaster', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Post Oak Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Hotel Derek', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'C. Baldwin', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Blossom Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Laura Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Magnolia', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Club Quarters', type: 'Budget', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'JR\'s', type: 'Bar', tags: ['Patio'] },
                { name: 'South Beach', type: 'Club', tags: ['Dance'] },
                { name: 'Montrose Mining', type: 'Bar', tags: ['Leather'] },
                { name: 'Eagle Houston', type: 'Bar', tags: ['Leather'] },
                { name: 'Blur', type: 'Bar', tags: ['Dance'] },
                { name: 'Pearl Bar', type: 'Bar', tags: ['Lesbian'] },
                { name: 'Ripcord', type: 'Bar', tags: ['Leather'] },
                { name: 'Crocker', type: 'Bar', tags: ['Neighborhood'] },
                { name: 'Buddy\'s', type: 'Bar', tags: ['Modern'] },
                { name: 'Numbers', type: 'Club', tags: ['Alternative'] }
            ],
            tours: ['Space Center', 'Museum District', 'Buffalo Bayou']
        },

        // US EAST
        'boston': {
            name: 'Boston, MA', iata: 'BOS', image: '🇺🇸', weather: 'Variable, 60°F',
            baseFare: [200, 450],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'South End',
            hotels: [
                { name: 'Liberty Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'XV Beacon', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Encore Boston Harbor', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Revolution Hotel', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Chandler Inn', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'Club Quarters', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'The Godfrey', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Boston Park Plaza', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'YOTEL Boston', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'W Boston', type: 'Luxury', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Club Cafe', type: 'Club', tags: ['Video Bar'] },
                { name: 'The Alley', type: 'Bar', tags: ['Bear'] },
                { name: 'Cathedral Station', type: 'Bar', tags: ['Sports'] },
                { name: 'Jacques Cabaret', type: 'Club', tags: ['Drag'] },
                { name: 'Trophy Room', type: 'Bar', tags: ['Food'] },
                { name: 'Blend', type: 'Bar', tags: ['Dance'] },
                { name: 'dbar', type: 'Bar', tags: ['Restaurant'] },
                { name: 'Legacy', type: 'Club', tags: ['Dance'] },
                { name: 'ManRay', type: 'Club', tags: ['Alternative'] },
                { name: 'Eagle', type: 'Bar', tags: ['Leather'] }
            ],
            tours: ['Freedom Trail', 'Provincetown Ferry', 'Fenway Park']
        },
        'washington dc': {
            name: 'Washington DC', iata: 'IAD', image: '🇺🇸', weather: 'Nice, 68°F',
            baseFare: [200, 450],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'Logan Circle',
            hotels: [
                { name: 'Eaton DC', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Kimpton Banneker', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'The Dupont Circle', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Viceroy DC', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Riggs', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Hotel Zena', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Generator DC', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Darcy Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Yours Truly', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Line Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Nellie\'s', type: 'Bar', tags: ['Sports'] },
                { name: 'Trade', type: 'Bar', tags: ['Alternative'] },
                { name: 'Number Nine', type: 'Bar', tags: ['Lounge'] },
                { name: 'JR\'s', type: 'Bar', tags: ['Video'] },
                { name: 'Annie\'s Paramount', type: 'Bar', tags: ['Steakhouse'] },
                { name: 'Green Lantern', type: 'Bar', tags: ['Dive'] },
                { name: 'Uproar', type: 'Bar', tags: ['Bear'] },
                { name: 'Pitchers', type: 'Bar', tags: ['Sports'] },
                { name: 'Crew Club', type: 'Sauna', tags: ['Bathhouse'] },
                { name: 'Bunker', type: 'Club', tags: ['Underground'] }
            ],
            tours: ['National Mall', 'Smithsonian', 'White House']
        },
        'philadelphia': {
            name: 'Philadelphia, PA', iata: 'PHL', image: '🇺🇸', weather: 'Mild, 65°F',
            baseFare: [200, 450],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'The Gayborhood',
            hotels: [
                { name: 'Alexander Inn', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'Kimpton Palomar', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Sofitel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'The Notary', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Warwick', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Canopy by Hilton', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'W Philadelphia', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Fairfield Inn', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Cambria', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Loews', type: 'Luxury', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Woody\'s', type: 'Club', tags: ['Instituion'] },
                { name: 'Voyeur', type: 'Club', tags: ['Late Night'] },
                { name: 'Tabu', type: 'Bar', tags: ['Sports'] },
                { name: 'U Bar', type: 'Bar', tags: ['Casual'] },
                { name: 'Tavern on Camac', type: 'Bar', tags: ['Piano'] },
                { name: 'Knock', type: 'Bar', tags: ['Restaurant'] },
                { name: 'Bike Stop', type: 'Bar', tags: ['Leather'] },
                { name: 'Level Up', type: 'Bar', tags: ['Lounge'] },
                { name: 'Boxers', type: 'Bar', tags: ['Sports'] },
                { name: 'Toasted Walnut', type: 'Bar', tags: ['Lesbian'] }
            ],
            tours: ['Independence Hall', 'Liberty Bell', 'Rocky Statue']
        },
        'atlanta': {
            name: 'Atlanta, GA', iata: 'ATL', image: '🇺🇸', weather: 'Humid, 75°F',
            baseFare: [200, 450],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'Midtown',
            hotels: [
                { name: 'Georgian Terrace', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Loews Atlanta', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Hyatt Centric Midtown', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Moxy Midtown', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'W Atlanta Midtown', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Hotel Clermont', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Canopy Midtown', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'AC Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Starling', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Artmore Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Blake\'s', type: 'Bar', tags: ['Video'] },
                { name: 'Bulldog\'s', type: 'Bar', tags: ['Tiny'] },
                { name: 'Swinging Richards', type: 'Club', tags: ['Strip'] },
                { name: 'Hereid', type: 'Club', tags: ['Club'] },
                { name: 'Woofs', type: 'Bar', tags: ['Sports'] },
                { name: 'Mary\'s', type: 'Bar', tags: ['Dive'] },
                { name: 'Atlanta Eagle', type: 'Bar', tags: ['Leather'] },
                { name: 'Future', type: 'Club', tags: ['Drag'] },
                { name: 'Midtown Moon', type: 'Bar', tags: ['Cabaret'] },
                { name: 'My Sister\'s Room', type: 'Bar', tags: ['Lesbian'] }
            ],
            tours: ['World of Coca-Cola', 'Aquarium', 'Piedmont Park']
        },
        'miami': {
            name: 'Miami, FL', iata: 'MIA', image: '🇺🇸', weather: 'Tropical, 82°F',
            baseFare: [200, 450],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'South Beach (12th St)',
            hotels: [
                { name: 'AxelBeach Miami', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'Hotel Gaythering', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'The Betsy', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Dream South Beach', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'W South Beach', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Standard Spa', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Albion Hotel', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Moxy South Beach', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: '1 Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Clevelander', type: 'Moderate', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Twist', type: 'Club', tags: ['Legendary'] },
                { name: 'Palace', type: 'Bar', tags: ['Drag Brunch'] },
                { name: 'Nathan\'s', type: 'Bar', tags: ['Beach'] },
                { name: 'R House', type: 'Bar', tags: ['Wynwood'] },
                { name: 'Gramps', type: 'Bar', tags: ['Hipster'] },
                { name: 'Azucar', type: 'Club', tags: ['Latin'] },
                { name: 'Club Boi', type: 'Club', tags: ['Urban'] },
                { name: 'Hotel Gaythering Bar', type: 'Bar', tags: ['Bears'] },
                { name: 'Sky Bar', type: 'Bar', tags: ['Rooftop'] },
                { name: 'Eagle Wilton Manors', type: 'Club', tags: ['Leather'] }
            ],
            tours: ['Art Deco District', 'Wynwood Walls', 'Everglades Airboat']
        },
        'fort lauderdale': {
            name: 'Fort Lauderdale, FL', iata: 'FLL', image: '🇺🇸', weather: 'Tropical, 82°F',
            baseFare: [200, 450],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'Wilton Manors',
            hotels: [
                { name: 'Pineapple Point', type: 'Luxury', tags: ['LGBTQ Hotel'] },
                { name: 'Grand Resort', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'Inn Leather', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'Island City House', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'W Fort Lauderdale', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Ritz Carlton', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Worthington', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'Ed Lugo Resort', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'Cabanas Guesthouse', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'Cheston House', type: 'Moderate', tags: ['LGBTQ Hotel'] }
            ],
            nightlife: [
                { name: 'Georgie\'s Alibi', type: 'Bar', tags: ['Restaurant'] },
                { name: 'Hunters', type: 'Bar', tags: ['Dance'] },
                { name: 'The Manor', type: 'Club', tags: ['Complex'] },
                { name: 'Gym Bar', type: 'Bar', tags: ['Sports'] },
                { name: 'Eagle', type: 'Bar', tags: ['Leather'] },
                { name: 'Ramrod', type: 'Bar', tags: ['Leather'] },
                { name: 'Clubhouse', type: 'Sauna', tags: ['Bathhouse'] },
                { name: 'Scandals', type: 'Bar', tags: ['Saloon'] },
                { name: 'Rosie\'s', type: 'Bar', tags: ['Burgers'] },
                { name: 'Infinity', type: 'Bar', tags: ['Lounge'] }
            ],
            tours: ['Jungle Queen Riverboat', 'Bonnet House', 'Everglades']
        },
        'orlando': {
            name: 'Orlando, FL', iata: 'MCO', image: '🇺🇸', weather: 'Hot, 85°F',
            baseFare: [200, 450],
            lgbtqSafety: 'United States: Very Safe. Strong legal protections.', lgbtqDistrict: 'Downtown / Milk District',
            hotels: [
                { name: 'Parliament House', type: 'Moderate', tags: ['LGBTQ Historic'] },
                { name: 'Aloft Downtown', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Hard Rock Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Grand Bohemian', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Swan & Dolphin', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Universal\'s Aventura', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Cabana Bay', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Hyatt Regency', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'JW Marriott', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Margaritaville', type: 'Moderate', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Southern Nights', type: 'Club', tags: ['Lesbian'] },
                { name: 'SAVOY', type: 'Bar', tags: ['Men'] },
                { name: 'Hank\'s', type: 'Bar', tags: ['Patio'] },
                { name: 'Barcodes', type: 'Bar', tags: ['Underwear'] },
                { name: 'District Dive', type: 'Bar', tags: ['Dive'] },
                { name: 'Hamburger Mary\'s', type: 'Bar', tags: ['Drag'] },
                { name: 'Stonewall Bar', type: 'Bar', tags: ['Video'] },
                { name: 'Club Orlando', type: 'Sauna', tags: ['Bathhouse'] },
                { name: 'Pulse Memorial', type: 'Bar', tags: ['Memorial'] },
                { name: 'The Hammered Lamb', type: 'Bar', tags: ['Brunch'] }
            ],
            tours: ['Disney World', 'Universal Studios', 'Icon Park']
        },
        'san juan': {
            name: 'San Juan, Puerto Rico', iata: 'SJU', image: '🇵🇷', weather: 'Tropical, 85°F',
            baseFare: [250, 550],
            lgbtqSafety: 'United States (Territory): Very Safe. Strong legal protections.', lgbtqDistrict: 'Condado / Santurce',
            hotels: [
                { name: 'Coqui del Mar', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'La Concha', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Condado Vanderbilt', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'O-Llv', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Caribe Hilton', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'El San Juan', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Dreamcatcher', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Acacia', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Andalucia', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Serafina', type: 'Moderate', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Circo Bar', type: 'Bar', tags: ['Dance'] },
                { name: 'SX Club', type: 'Club', tags: ['Go-Go'] },
                { name: 'El Cojo', type: 'Bar', tags: ['Local'] },
                { name: 'Tia Maria', type: 'Bar', tags: ['Dive'] },
                { name: 'Scandalo', type: 'Club', tags: ['Drag'] },
                { name: 'Oasis', type: 'Bar', tags: ['Tap'] },
                { name: 'Toxic', type: 'Club', tags: ['Late Night'] },
                { name: 'El Purgatorio', type: 'Club', tags: ['Theme'] },
                { name: 'Zal Si Puedes', type: 'Bar', tags: ['Drag'] },
                { name: 'Kweens', type: 'Club', tags: ['Show'] }
            ],
            tours: ['El Yunque Rainforest', 'Old San Juan Fort', 'Bacardi Distillery']
        },
        'curacao': {
            name: 'Curacao', iata: 'CUR', image: '🇨🇼', weather: 'Sunny, 85°F',
            baseFare: [500, 900],
            lgbtqSafety: 'Curacao: Safe. Very welcoming and friendly.', lgbtqDistrict: 'Willemstad',
            hotels: [
                { name: 'Floris Suite Hotel', type: 'Moderate', tags: ['LGBTQ Hotel'] },
                { name: 'Avila Beach Hotel', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Renaissance', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Saint Tropez', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Papagayo', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Baoase', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Scuba Lodge', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Elements', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Dreams', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Mangrove', type: 'Moderate', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Rainbow Lounge', type: 'Bar', tags: ['Social'] },
                { name: 'Mambo Beach', type: 'Club', tags: ['Beach'] },
                { name: 'Wet & Wild', type: 'Bar', tags: ['Beach Party'] },
                { name: 'Saint Tropez', type: 'Bar', tags: ['Pool'] },
                { name: 'Punda Vibes', type: 'Bar', tags: ['Street'] },
                { name: 'Zanzibar', type: 'Bar', tags: ['Live Music'] },
                { name: 'Cabana', type: 'Club', tags: ['Dance'] },
                { name: 'Omundo', type: 'Bar', tags: ['Late Night'] },
                { name: 'Miles Jazz Cafe', type: 'Bar', tags: ['Jazz'] },
                { name: 'Mojitos', type: 'Bar', tags: ['Salsa'] }
            ],
            tours: ['Handelskade', 'Klein Curacao', 'Sea Aquarium']
        },

        // GENERIC FALLBACK for unknowns
        'default': {
            name: 'Destination', iata: 'ANY', image: '✈️', weather: 'Check Forecast',
            baseFare: [500, 800],
            lgbtqSafety: 'Research Local Laws', lgbtqDistrict: 'City Center',
            hotels: [
                { name: 'LGBTQ Friendly Hotel 1', type: 'Moderate', tags: ['LGBTQ Friendly'] },
                { name: 'Luxury Resort 2', type: 'Luxury', tags: ['LGBTQ Friendly'] },
                { name: 'Boutique Hotel 3', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'City Inn 4', type: 'Budget', tags: ['LGBTQ Friendly'] },
                { name: 'Downtown Suite 5', type: 'Moderate', tags: ['LGBTQ Friendly'] }
            ],
            nightlife: [
                { name: 'Local Gay Bar', type: 'Bar', tags: ['Bar'] },
                { name: 'Dance Club', type: 'Club', tags: ['Club'] },
                { name: 'Lounge', type: 'Bar', tags: ['Lounge'] },
                { name: 'Drag Bar', type: 'Bar', tags: ['Shows'] },
                { name: 'Pub', type: 'Bar', tags: ['Pub'] }
            ],
            tours: ['City Walking Tour', 'Museum Visit', 'Landmark Sightseeing']
        }
    }
};

document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // 1. Get Values
    const origin = document.getElementById('departure').value.trim();
    const destinationInput = document.getElementById('destination').value.trim().toLowerCase();
    const dateStart = document.getElementById('dateStart').value;
    const dateEnd = document.getElementById('dateEnd').value;

    if (!origin || !destinationInput || !dateStart || !dateEnd) {
        alert("Please fill in all fields.");
        return;
    }

    // 2. Expand Search (The Core Logic)
    let targets = [];

    // Check Regions
    if (DATABASE.mappings.regions[destinationInput]) {
        targets = DATABASE.mappings.regions[destinationInput];
    }
    // Check Countries
    else if (DATABASE.mappings.countries[destinationInput]) {
        targets = DATABASE.mappings.countries[destinationInput];
    }
    // Check Cities (that expand to airports like NYC)
    else if (DATABASE.mappings.cities[destinationInput]) {
        targets = DATABASE.mappings.cities[destinationInput];
    }
    // Direct City match or Fallback
    else {
        // Try to match strict keys (like 'sydney') otherwise fallback to using the input as is with generic data
        targets = [destinationInput];
    }

    // 3. Render Results
    renderResults(targets, origin, dateStart, dateEnd);
});

function renderResults(targets, origin, dateStart, dateEnd) {
    const container = document.getElementById('resultsContainer');
    container.innerHTML = ''; // basic clear

    targets.forEach((targetKey, index) => {
        // Data Retrieval
        let data = DATABASE.details[targetKey] || { ...DATABASE.details['default'], name: targetKey.charAt(0).toUpperCase() + targetKey.slice(1) };
        if (data === DATABASE.details['default']) {
            // Try to set the IATA code to user input if generic to help widget
            data.iata = targetKey.length === 3 ? targetKey.toUpperCase() : 'ANY';
        }

        // Randomize Selections
        const randomHotels = getRandomSubset(data.hotels, 4);
        const randomNightlife = getRandomSubset(data.nightlife, 3);
        const randomTours = data.tours.slice(0, 5); // Just show top 5 for tours or random

        // Calculate Fare Estimate
        const fareEstimate = calculateFareEstimate(data.baseFare);

        // Staggered Animation Delay
        const delay = index * 200;

        // Create Card HTML
        const card = document.createElement('div');
        card.className = "glass-card rounded-3xl overflow-hidden shadow-2xl fade-in-up transition-transform hover:scale-[1.01] duration-300";
        card.style.animationDelay = `${delay}ms`;
        card.innerHTML = `
            <!-- Header -->
            <div class="bg-gradient-to-r from-gray-800 to-gray-900 p-6 border-b border-white/5 flex items-center justify-between">
                <div class="flex items-center gap-4">
                    <div class="text-4xl shadow-sm">${data.image}</div>
                    <div>
                        <h2 class="text-2xl font-bold text-white">${data.name}</h2>
                        <span class="text-gray-400 text-sm tracking-widest uppercase">Travel Scout Report</span>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <a href="${getEmailLink(origin, data, dateStart, dateEnd)}" 
                       class="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition border border-white/20"
                       title="Email Result">
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                    <div class="hidden md:block">
                         <span class="bg-white/10 px-4 py-2 rounded-full text-xs font-semibold text-gray-300 border border-white/10">
                            ${data.iata}
                         </span>
                    </div>
                </div>
            </div>

            <!-- Grid Layout for Sections -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                
                <!-- SECTION 1: FARE (RED) -->
                <div class="p-6 md:p-8 bg-gradient-to-br from-red-900/40 to-red-900/10 glow-red flex flex-col justify-between group">
                    <div>
                        <h3 class="text-red-400 font-bold text-xl mb-3 flex items-center gap-2">
                            <i class="fa-solid fa-plane-circle-check"></i> Flight Details
                        </h3>
                         <p class="text-gray-300 text-xs mb-4">
                            Scanning budget carriers: <strong>Spirit, Frontier, RyanAir, SAS, Norse, French Bee, ZipAir</strong> & more.
                        </p>
                        
                        <div class="mb-4">
                           <div class="text-3xl font-bold text-white mb-1">${fareEstimate}</div>
                           <div class="text-xs text-red-200 uppercase tracking-wide">Estimated Roundtrip</div>
                        </div>

                        <!-- Skyscanner Widget Container -->
                        <div class="my-4" id="skyscanner-widget-${index}">
                             <div 
                              data-skyscanner-widget="SearchWidget" 
                              data-locale="en-US" 
                              data-market="US" 
                              data-currency="USD" 
                              data-origin-geo-lookup="true"
                              data-destination-iata-code="${data.iata}"
                              data-colour="solar">
                            </div>
                        </div>

                        <div class="space-y-3 mt-4">
                             <div class="flex items-center gap-3 text-sm text-gray-200">
                                <i class="fa-solid fa-suitcase"></i>
                                <span>Flights from <strong>${origin}</strong></span>
                             </div>
                             <div class="flex items-center gap-3 text-sm text-gray-200">
                                <i class="fa-regular fa-clock"></i>
                                <span>${dateStart} to ${dateEnd}</span>
                             </div>
                        </div>
                    </div>
                    <div class="mt-6 flex flex-col sm:flex-row gap-3">
                        <a href="${getGoogleFlightsLink(origin, data.name, dateStart, dateEnd)}" target="_blank" 
                           class="flex-1 bg-red-600 hover:bg-red-500 text-white text-center py-2 px-4 rounded-lg font-semibold text-sm transition shadow-lg hover:shadow-red-500/50 flex items-center justify-center gap-2">
                           <i class="fa-brands fa-google"></i> Book Google
                        </a>
                        <a href="${getSkyscannerLink(origin, data.iata, dateStart, dateEnd)}" target="_blank" 
                           class="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-2 px-4 rounded-lg font-semibold text-sm transition border border-white/20 flex items-center justify-center gap-2">
                           <i class="fa-solid fa-plane"></i> Skyscanner
                        </a>
                    </div>
                </div>

                <!-- SECTION 2: WEATHER (ORANGE) -->
                <div class="p-6 md:p-8 bg-gradient-to-br from-orange-900/40 to-orange-900/10 glow-orange">
                    <h3 class="text-orange-400 font-bold text-xl mb-3 flex items-center gap-2">
                        <i class="fa-solid fa-sun"></i> Weather Forecast
                    </h3>
                    <p class="text-gray-300 text-sm mb-4">Estimated weather during your stay.</p>
                    <div class="flex items-center gap-4 mt-6">
                        <div class="text-5xl text-orange-200">
                            ${getWeatherIcon(data.weather)}
                        </div>
                        <div>
                            <div class="text-2xl font-bold text-white">${data.weather.split(',')[1] || '68°F'}</div>
                            <div class="text-orange-300">${data.weather.split(',')[0] || 'Sunny'}</div>
                        </div>
                    </div>
                </div>

                <!-- SECTION 3: LGBTQ INFO (YELLOW) -->
                <div class="p-6 md:p-8 bg-gradient-to-br from-yellow-900/40 to-yellow-900/10 glow-yellow border-t border-white/5 md:border-t-0">
                    <h3 class="text-yellow-400 font-bold text-xl mb-3 flex items-center gap-2">
                        <i class="fa-solid fa-shield-heart"></i> LGBTQ+ Safety & Info
                    </h3>
                    <div class="bg-yellow-950/30 p-4 rounded-xl border border-yellow-500/10">
                        <p class="text-gray-200 text-sm leading-relaxed">
                            ${data.lgbtqSafety}
                        </p>
                        <div class="mt-3 pt-3 border-t border-yellow-500/20">
                            <span class="text-yellow-500 text-xs font-bold uppercase">Main District</span>
                            <p class="text-white text-sm">${data.lgbtqDistrict}</p>
                        </div>
                         <div class="mt-3">
                            <a href="https://www.equaldex.com/equality-index" target="_blank" class="text-yellow-400 text-xs hover:underline flex items-center gap-1">
                                <i class="fa-solid fa-info-circle"></i> More Info on Equaldex
                            </a>
                        </div>
                    </div>
                </div>

                <!-- SECTION 4: HOTELS (GREEN) -->
                <div class="p-6 md:p-8 bg-gradient-to-br from-green-900/40 to-green-900/10 glow-green border-t border-white/5 md:border-t-0">
                     <h3 class="text-green-400 font-bold text-xl mb-3 flex items-center gap-2">
                        <i class="fa-solid fa-bed"></i> LGBTQ+ Hotels
                    </h3>
                    <ul class="space-y-3 mb-4">
                        ${randomHotels.map(h => `
                            <li class="flex items-start gap-3 text-sm text-gray-200 bg-black/20 p-2 rounded-lg">
                                <span class="bg-green-500/20 text-green-400 p-1.5 rounded-md flex-shrink-0">
                                    <i class="fa-solid fa-hotel"></i>
                                </span>
                                <div class="w-full">
                                    <div class="flex justify-between items-start">
                                        <span class="font-semibold text-white">${h.name}</span>
                                        ${h.tags.includes('LGBTQ Hotel') ? '<i class="fa-solid fa-rainbow text-xs text-brand-purple" title="LGBTQ Hotel"></i>' : '<i class="fa-solid fa-rainbow text-green-400/50 text-xs" title="LGBTQ Friendly"></i>'}
                                    </div>
                                    <div class="flex justify-between mt-1">
                                        <span class="text-xs text-gray-400 bg-white/5 px-2 py-0.5 rounded">${h.type}</span>
                                        <span class="text-[10px] text-green-300/80 uppercase tracking-wider">${h.tags[0]}</span>
                                    </div>
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                     <a href="${getExpediaLink(data.name, dateStart, dateEnd)}" target="_blank" 
                       class="block w-full bg-green-600/80 hover:bg-green-500 text-white text-center py-2 px-4 rounded-lg font-semibold text-sm transition shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2">
                       <i class="fa-solid fa-hotel"></i> Book on Expedia
                    </a>
                </div>

                <!-- SECTION 5: LIFE (BLUE) -->
                <div class="p-6 md:p-8 bg-gradient-to-br from-blue-900/40 to-blue-900/10 glow-blue border-t border-white/5 md:border-t-0">
                    <h3 class="text-blue-400 font-bold text-xl mb-3 flex items-center gap-2">
                        <i class="fa-solid fa-martini-glass-citrus"></i> Life & Community
                    </h3>
                    <p class="text-gray-400 text-xs mb-3 uppercase tracking-wider">Top Bars & Clubs</p>
                    <div class="flex flex-col gap-2 mb-6">
                         ${randomNightlife.map(n => `
                            <div class="flex items-center gap-3 bg-black/20 p-2 rounded-lg">
                                <span class="bg-blue-600/20 text-blue-200 border border-blue-500/20 p-2 rounded-full text-base w-10 h-10 flex items-center justify-center flex-shrink-0">
                                     ${getNightlifeIcon(n.type)}
                                </span>
                                <div>
                                    <div class="font-bold text-white text-sm">${n.name}</div>
                                    <div class="text-xs text-blue-200/70">${n.type} &bull; ${n.tags[0]}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <a href="${getEventsLink(data.name, dateStart)}" target="_blank" 
                       class="block w-full bg-blue-600/80 hover:bg-blue-500 text-white text-center py-2 px-4 rounded-lg font-semibold text-sm transition shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2">
                       <i class="fa-brands fa-google"></i> Search LGBTQ Events in ${getMonthName(dateStart)}
                    </a>
                </div>

                <!-- SECTION 6: TOURS (PURPLE) -->
                <div class="p-6 md:p-8 bg-gradient-to-br from-purple-900/40 to-purple-900/10 glow-purple border-t border-white/5 md:border-t-0">
                     <h3 class="text-purple-400 font-bold text-xl mb-3 flex items-center gap-2">
                        <i class="fa-solid fa-camera"></i> Tours & Attractions
                    </h3>
                    <ul class="space-y-3 mt-4 mb-4">
                        ${randomTours.map(t => `
                            <li class="flex items-start gap-3 text-sm text-gray-200">
                                <i class="fa-solid fa-star text-purple-400 mt-1"></i>
                                <span>${t}</span>
                            </li>
                        `).join('')}
                    </ul>
                    <a href="${getViatorLink(data.name, dateStart, dateEnd)}" target="_blank" 
                       class="block w-full bg-purple-600/80 hover:bg-purple-500 text-white text-center py-2 px-4 rounded-lg font-semibold text-sm transition shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2">
                       <i class="fa-solid fa-ticket"></i> Book on Viator
                    </a>
                </div>

            </div>
        `;

        container.appendChild(card);
    });

    // Attempt to maximize the widget load
    // The loader script in index.html should pick up the new widgets automatically 
    // but sometimes a re-trigger is needed if dynamic. 
    // Skyscanner widgets are tricky dynamically; usually they need to be present on load. 
    // We can try to re-inject the script if it doesn't appear.
}

// Logic Helper Functions

function getRandomSubset(arr, count) {
    if (!arr) return [];
    // Shuffle array
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function calculateFareEstimate(baseRange) {
    if (!baseRange) return "$500 - $1600";
    const min = baseRange[0];
    const max = baseRange[1] * 2; // Double top end
    return `$${min} - $${max}`;
}

// Link Builder Helper Functions

function getGoogleFlightsLink(origin, destination, start, end) {
    const q = `Flights from ${origin} to ${destination} on ${start} returning ${end}`;
    return `https://www.google.com/travel/flights?q=${encodeURIComponent(q)}`;
}

function getSkyscannerLink(origin, destinationIata, start, end) {
    // Convert YYYY-MM-DD to YYMMDD
    const formatDate = (d) => d.slice(2).replace(/-/g, '');
    const s = formatDate(start);
    const e = formatDate(end);
    // Use path format: /transport/flights/{origin}/{destination}/{yymmdd}/{yymmdd}
    // destinationIata is safer than name. If ANY, fallback to just origin search or similar, but we'll try passing it.
    const dest = destinationIata === 'ANY' ? 'everywhere' : destinationIata;
    return `https://www.skyscanner.com/transport/flights/${encodeURIComponent(origin)}/${encodeURIComponent(dest)}/${s}/${e}`;
}

function getExpediaLink(destination, start, end) {
    return `https://www.expedia.com/Hotel-Search?destination=${encodeURIComponent(destination)}&startDate=${start}&endDate=${end}`;
}

function getViatorLink(destination, start, end) {
    // Viator usually takes a destination ID or string query
    return `https://www.viator.com/searchResults/all?text=${encodeURIComponent(destination)}&startDate=${start}&endDate=${end}`;
}

function getWeatherIcon(weatherString) {
    if (!weatherString) return '<i class="fa-solid fa-sun text-yellow-300"></i>';
    const w = weatherString.toLowerCase();
    if (w.includes('rain')) return '<i class="fa-solid fa-cloud-showers-heavy text-blue-300"></i>';
    if (w.includes('cloud')) return '<i class="fa-solid fa-cloud-sun text-gray-300"></i>';
    if (w.includes('snow')) return '<i class="fa-regular fa-snowflake text-white"></i>';
    return '<i class="fa-solid fa-sun text-yellow-300"></i>';
}

function getNightlifeIcon(type) {
    const t = (type || '').toLowerCase();
    if (t.includes('sauna') || t.includes('bath')) return '<i class="fa-solid fa-bath"></i>';
    if (t.includes('club') || t.includes('disco')) return '<i class="fa-solid fa-champagne-glasses"></i>';
    if (t.includes('bar')) return '<i class="fa-solid fa-martini-glass"></i>';
    return '<i class="fa-solid fa-music"></i>';
}

function getEmailLink(origin, data, start, end) {
    const subject = `Pride Travel Idea: ${data.name}`;
    const body = `Hey,\n\nI found a gay-friendly trip idea using Pride Travel Scout!\n\nDestination: ${data.name}\nDates: ${start} to ${end}\nFrom: ${origin}\n\nWeather: ${data.weather}\nLGBTQ Safety: ${data.lgbtqSafety}\n\nCheck out flights:\nGoogle Flights: ${getGoogleFlightsLink(origin, data.name, start, end)}\n\nSent from Pride Travel Scout`;
    return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function getEventsLink(destination, dateString) {
    const month = getMonthName(dateString);
    const q = `LGBTQ Events in ${destination} in ${month}`;
    return `https://www.google.com/search?q=${encodeURIComponent(q)}`;
}

function getMonthName(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('default', { month: 'long', timeZone: 'UTC' });
}
