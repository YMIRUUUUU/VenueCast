/**
 * VenueCast i18n — Lightweight translation system
 * Languages: EN (default), FR, ES, ZH
 */
(function(global) {
  'use strict';

  var LANGS = ['en', 'fr', 'es', 'zh'];
  var LANG_LABELS = { en: '🇬🇧 EN', fr: '🇫🇷 FR', es: '🇪🇸 ES', zh: '🇨🇳 ZH' };
  var DATE_LOCALES = { en: 'en-GB', fr: 'fr-FR', es: 'es-ES', zh: 'zh-CN' };

  var T = {
    en: {
      // Nav
      'nav.live_forecast': 'Live Forecast',
      'nav.events_tag': '🎪 Events',
      'nav.city': '📍 Lyon, France',
      'nav.all_events': '🎪 All Events →',
      'nav.forecast_link': '📊 Forecast →',

      // Forecast page — static HTML
      'forecast.loading': 'Fetching Lyon forecast…',
      'forecast.title': 'Lyon 7-Day Forecast',
      'forecast.strip_header': 'Daily Demand Scores',
      'forecast.subscribe.title': 'Get this forecast in your inbox',
      'forecast.subscribe.sub': 'Daily 7-day forecast for Lyon, delivered every morning at 7am.',
      'forecast.subscribe.placeholder': 'your@email.com',
      'forecast.subscribe.btn': 'Subscribe',
      'forecast.subscribe.btn_loading': 'Subscribing…',
      'forecast.subscribe.success': '✓ You\'re subscribed! First digest arrives tomorrow morning.',
      'forecast.footer': 'Weather: <a href="https://open-meteo.com/" target="_blank">Open-Meteo</a> · Holidays: French Ministry of Education (Zone A) · Events: ONLYLYON Tourism, Eurexpo, OL · <a href="/">Back to VenueCast</a>',

      // Forecast — dynamic JS
      'forecast.error_prefix': 'Failed to load forecast: ',
      'forecast.stat.avg_score': 'Week Avg Score',
      'forecast.stat.peak_day': 'Peak Day',
      'forecast.stat.low_day': 'Low Day',
      'forecast.stat.holidays': 'Holidays',
      'forecast.stat.events': 'Events',
      'forecast.holidays.none': 'None',
      'forecast.events.none': 'None',
      'forecast.holidays.days': function(n) { return n + ' day' + (n > 1 ? 's' : ''); },
      'forecast.events.days': function(n) { return n + ' day' + (n > 1 ? 's' : ''); },

      // School holidays banner
      'forecast.banner.school_active': 'School Holidays — ',
      'forecast.banner.school_upcoming': 'Upcoming Holidays — ',
      'forecast.banner.active': '● Active',
      'forecast.banner.tomorrow': 'Tomorrow',
      'forecast.banner.in_days': function(n) { return 'In ' + n + ' days'; },
      'forecast.banner.source': 'Source: Ministère de l\'Éducation nationale — Zone A (Lyon)',

      // Events panel
      'forecast.events_panel.title': '🎪 Lyon — City Events',
      'forecast.events_panel.view_all': 'View all →',
      'forecast.events_panel.sources': 'Sources: ONLYLYON Tourisme · Eurexpo Lyon · Olympique Lyonnais · Ville de Lyon cultural calendar',
      'forecast.events_panel.upcoming': function(n) { return n + ' upcoming event' + (n > 1 ? 's' : ''); },

      // Crowd labels
      'crowd.very_high': 'Very High',
      'crowd.high': 'High',
      'crowd.medium': 'Medium',
      'crowd.low': 'Low',

      // Day detail panel
      'forecast.detail.weather': 'Weather',
      'forecast.detail.precipitation': 'Precipitation',
      'forecast.detail.wind': 'Wind',
      'forecast.detail.day_type': 'Day Type',
      'forecast.detail.max_speed': 'Max speed',
      'forecast.detail.strong_wind': ' ⚠️ Strong',
      'forecast.detail.holiday': '(Holiday)',
      'forecast.detail.bridge': '(Bridge)',
      'forecast.detail.school_holiday': 'School holidays',
      'forecast.detail.regular_day': 'Regular school day',
      'forecast.detail.prob': '% probability',
      'forecast.detail.city_events': 'City Events',
      'forecast.detail.impact': ' impact',

      // Score breakdown
      'forecast.breakdown.title': 'Score Breakdown',
      'forecast.breakdown.base': 'Base',
      'forecast.breakdown.weather': 'Weather',
      'forecast.breakdown.day': 'Day',
      'forecast.breakdown.holidays': 'Holidays',
      'forecast.breakdown.events': 'Events',
      'forecast.breakdown.season': 'Season',

      // Venue profile CTA
      'forecast.venue_cta.text': 'View Chalet du Parc Profile',
      'forecast.venue_cta.badge': 'Hyper-local',

      // Events page — static HTML
      'events.loading': 'Loading Lyon events…',
      'events.title': 'City Events Calendar',
      'events.hero.kicker': 'LYON',
      'events.stat.upcoming': 'Upcoming Events',
      'events.stat.high_impact': 'High Impact',
      'events.stat.next_event': 'Next Event',
      'events.stat.through': 'Through',
      'events.filter.label': 'Filter:',
      'events.filter.all': 'All',
      'events.filter.very_high': '🔴 Very High',
      'events.filter.high': '🟠 High',
      'events.filter.medium': '🟡 Medium',
      'events.filter.low': '🟢 Low',
      'events.cta.title': 'See how events affect demand',
      'events.cta.sub': 'VenueCast scores each day 0–100 factoring in weather, holidays, and these city events.',
      'events.cta.btn': '📊 View 7-Day Forecast →',
      'events.footer': 'Events: ONLYLYON Tourisme · Eurexpo Lyon · Olympique Lyonnais · Ville de Lyon · <a href="/forecast">View Forecast</a> · <a href="/">VenueCast Home</a>',

      // Events — dynamic JS
      'events.error_prefix': 'Failed to load events: ',
      'events.empty': 'No events for this filter.',
      'events.source': 'Source: ',
      'events.high_count': function(n) { return n + ' event' + (n !== 1 ? 's' : ''); },
      'events.event_count': function(n) { return n + ' event' + (n !== 1 ? 's' : ''); },
      'events.days': function(n) { return n === 1 ? '1 day' : n + ' days'; },

      // Index page
      'index.nav_tag': 'City-Aware Forecasting',
      'index.hero.kicker': 'For restaurants, venues & events',
      'index.hero.title': 'Know what your city<br>will bring <em>before it happens</em>',
      'index.hero.sub': 'VenueCast aggregates weather, local events, school holidays, and industry seasonality into one forecast. From 7 days to 3 months out. No POS integration required.',
      'index.cta.forecast': 'See Lyon\'s Live Forecast →',
      'index.cta.email': 'Preview Email Digest',
      'index.strip.header': 'Lyon — Week of March 17, 2026',
      'index.sources.title': 'Four data layers.<br>One forecast.',
      'index.sources.sub': 'VenueCast pulls from the sources that actually matter for venue traffic, not your POS history.',
      'index.src1.title': 'Precision Weather',
      'index.src1.desc': 'Hourly rainfall probability. Wind speeds above 70 km/h flagged. Temperature curves. Not just "sunny or cloudy" but real operational data for terraces and outdoor events.',
      'index.src2.title': 'City Events',
      'index.src2.desc': 'Congresses, festivals, trade shows, concerts, sporting events. Pulled from local tourism offices and open data. Know when 10,000 people land near your venue.',
      'index.src3.title': 'School Holidays',
      'index.src3.desc': 'French zones A, B, C. European holidays. Bridge days. The calendar shifts that change everything from lunch traffic to family dining.',
      'index.src4.title': 'Industry Seasonality',
      'index.src4.desc': 'Restaurant and events industry patterns specific to your city. High season, low season, and everything in between, weighted by years of data.',
      'index.how.title': 'How it works',
      'index.step1.title': 'Pick your city',
      'index.step1.desc': 'Select your location. VenueCast connects to every relevant open data source for that city automatically.',
      'index.step2.title': 'Get your forecast',
      'index.step2.desc': 'A demand score for every day, powered by weather, events, holidays, and seasonal patterns. Dashboard view plus email digest.',
      'index.step3.title': 'Plan ahead',
      'index.step3.desc': 'Staff the right shifts. Order the right stock. Open or close the terrace with confidence. From 7 days to 3 months out.',
      'index.horizons.title': 'Forecasts at every scale',
      'index.h1.label': 'Detailed Forecast',
      'index.h1.desc': 'Hourly weather, confirmed events, precise scores',
      'index.h2.label': 'Outlook',
      'index.h2.desc': 'Weather trends, known events, staffing guidance',
      'index.h3.label': 'Trends',
      'index.h3.desc': 'Seasonal patterns, major events, budget planning',
      'index.h4.label': 'Seasonal View',
      'index.h4.desc': 'Long-range demand, holiday periods, strategic planning',
      'index.city_req.title': 'Your city not available yet?',
      'index.city_req.sub': 'Tell us which city you\'d like to see next — we\'ll prioritize the most requested.',
      'index.city_req.email_placeholder': 'your@email.com',
      'index.city_req.city_placeholder': 'City name',
      'index.city_req.country_placeholder': 'Country (optional)',
      'index.city_req.message_placeholder': 'Any context? (optional)',
      'index.city_req.btn': 'Suggest this city',
      'index.city_req.btn_loading': 'Sending…',
      'index.city_req.success': '✓ Received! We\'ll notify you when your city launches.',
      'index.city_req.error_email': 'Please enter a valid email.',
      'index.city_req.error_city': 'Please enter a city name.',
      'admin.city_req.tab': 'City Requests',
      'admin.city_req.title': '🏙️ City Requests',
      'admin.city_req.sub': 'Cities requested by users — sorted by demand volume.',
      'admin.city_req.loading': 'Loading…',
      'admin.city_req.cities_title': 'Most Requested Cities',
      'admin.city_req.entries_title': 'All Requests',
      'admin.city_req.col.city': 'City',
      'admin.city_req.col.count': 'Requests',
      'admin.city_req.col.first': 'First',
      'admin.city_req.col.last': 'Latest',
      'admin.city_req.col.email': 'Email',
      'admin.city_req.col.country': 'Country',
      'admin.city_req.col.message': 'Message',
      'admin.city_req.col.date': 'Date',
      'admin.city_req.empty': 'No city requests yet.',
      'index.closing.title': 'Stop guessing.<br>Start forecasting your city.',
      'index.closing.sub': 'Every venue operator checks the weather. Googles local events. Counts school holidays on their fingers. VenueCast does all of it, automatically, and tells you what it means for your business.',
      'index.footer': 'VenueCast — Built by <a href="https://polsia.com">Polsia</a>',

      // Nav — How It Works
      'nav.how_it_works': 'How It Works',

      // How It Works page
      'hiw.title': 'How VenueCast Works',
      'hiw.sub': 'A 0–100 daily demand index built from 6 data layers, giving Lyon venue operators a clear picture of what each day will bring.',
      'hiw.score_scale': 'The 0–100 Demand Score',
      'hiw.tier.very_low': 'Very Low — quiet day',
      'hiw.tier.low': 'Low — below average traffic',
      'hiw.tier.medium': 'Moderate — normal busy day',
      'hiw.tier.high': 'High — prepare extra capacity',
      'hiw.tier.very_high': 'Very High — all hands on deck',
      'hiw.factors.title': '6 Scoring Factors',
      'hiw.factor.weather': 'Weather',
      'hiw.factor.weather.desc': 'Rain probability, temperature, and wind. Bad weather lowers scores; optimal conditions add up to +15.',
      'hiw.factor.day': 'Day of Week',
      'hiw.factor.day.desc': 'Fridays score highest (+20), Sundays lowest. Weekend patterns differ from weekday patterns.',
      'hiw.factor.holidays': 'Holidays',
      'hiw.factor.holidays.desc': 'French public holidays (Zone A), bridge days, and school holidays tracked from the Ministry of Education.',
      'hiw.factor.season': 'Seasonality',
      'hiw.factor.season.desc': 'Industry-specific seasonal patterns for Lyon restaurants and venues. High season, low season, in between.',
      'hiw.factor.events': 'Local Events',
      'hiw.factor.events.desc': 'Confirmed city events from ONLYLYON, Eurexpo, OL, and Ville de Lyon. Major events add up to +15.',
      'hiw.factor.proximity': 'Holiday Proximity',
      'hiw.factor.proximity.desc': 'Days just before or after a holiday period shift demand. The run-up to school holidays boosts traffic.',
      'hiw.formula.title': 'The Formula',
      'hiw.formula.desc': 'Base 50 + Weather (±15) + Day of week (±20) + Holidays (±10) + Seasonality (±12) + Events (+5–15) + Proximity (±5)',
      'hiw.cta': '→ See the 7-Day Forecast',

      // Score modal (on forecast page)
      'hiw.modal.title': 'What does the score mean?',
      'hiw.modal.sub': 'A 0–100 daily demand index combining 6 factors.',
      'hiw.modal.factors_title': '6 scoring factors',
      'hiw.modal.cta': 'Learn more →',

      // Admin page — navigation
      'admin.nav.forecast': 'Forecast',
      'admin.nav.events': 'Events',
      'admin.nav.admin': 'Admin',
      'admin.nav.logout': 'Logout',

      // Admin page — header
      'admin.page_title': 'VenueCast Admin — Custom Factors',
      'admin.page_heading': '⚙️ Custom Scoring Factors',
      'admin.page_sub': 'Add hyper-local rules that boost or penalise demand scores for your specific venue. They stack on top of the 6 standard factors.',

      // Admin page — stats
      'admin.stat.total': 'Total rules',
      'admin.stat.active': 'Active',
      'admin.stat.boost': 'Boost rules',
      'admin.stat.penalty': 'Penalty rules',

      // Admin page — toolbar
      'admin.btn.add_rule': '＋ Add Rule',
      'admin.filter.all': 'All',
      'admin.filter.active': 'Active',
      'admin.filter.inactive': 'Inactive',
      'admin.btn.refresh': '↻ Refresh',

      // Admin page — table headers
      'admin.table.name': 'Name',
      'admin.table.condition': 'Condition',
      'admin.table.impact': 'Impact',
      'admin.table.tag': 'Tag',
      'admin.table.status': 'Status',
      'admin.table.actions': 'Actions',

      // Admin page — CSV section
      'admin.csv.title': '📤 Bulk Upload via CSV',
      'admin.csv.sub1': 'Paste CSV rows below. Required columns: <code>name</code>, <code>condition_type</code>, <code>score_impact</code>. Optional: <code>description</code>, <code>venue_tag</code>, <code>temp_min</code>, <code>temp_max</code>, <code>rain_max</code>, <code>rain_min</code>, <code>date_start</code>, <code>date_end</code>.',
      'admin.csv.sub2': '<strong>condition_type</strong> values: <code>always</code> · <code>monday–sunday</code> · <code>weekday</code> · <code>weekend</code> · <code>sunny</code> · <code>rainy</code> · <code>cold</code> · <code>hot</code> · <code>date_range</code>',
      'admin.csv.btn_upload': 'Upload CSV',
      'admin.csv.btn_clear': 'Clear',
      'admin.csv.btn_sample': 'Load sample',

      // Admin page — condition reference table
      'admin.ref.title': '📖 Condition Reference',
      'admin.ref.th.type': 'Condition type',
      'admin.ref.th.meaning': 'What it means',
      'admin.ref.th.filters': 'Extra filters',
      'admin.ref.always': 'Applies every day',
      'admin.ref.dow': 'Specific day of week',
      'admin.ref.weekday': 'Mon–Fri',
      'admin.ref.weekend': 'Sat–Sun',
      'admin.ref.sunny': 'Rain ≤ 2mm &amp; temp ≥ 15°C',
      'admin.ref.rainy': 'Rain ≥ 5mm',
      'admin.ref.cold': 'Avg temp ≤ 5°C',
      'admin.ref.hot': 'Avg temp ≥ 28°C',
      'admin.ref.date_range': 'Between date_start and date_end',
      'admin.ref.filters.none': '—',
      'admin.ref.filters.dow': 'temp_min, rain_max, etc.',
      'admin.ref.filters.sunny': 'Override with temp_min, rain_max',
      'admin.ref.filters.rainy': 'Override with rain_min',
      'admin.ref.filters.cold': 'Override with temp_max',
      'admin.ref.filters.hot': 'Override with temp_min',
      'admin.ref.filters.date_range': 'date_start, date_end (YYYY-MM-DD)',

      // Admin page — modal
      'admin.modal.add_title': 'Add Custom Factor',
      'admin.modal.edit_title': 'Edit Factor',

      // Admin page — form labels
      'admin.form.rule_name': 'Rule name *',
      'admin.form.score_impact': 'Score impact *',
      'admin.form.impact_hint': 'Positive = boost · Negative = penalty',
      'admin.form.description': 'Description',
      'admin.form.venue_tag': 'Venue tag',
      'admin.form.status': 'Status',
      'admin.form.conditions_title': 'Conditions',
      'admin.form.conditions_hint': '(leave empty = always applies)',
      'admin.form.day_of_week': 'Day of week',
      'admin.form.date_from': 'Date from',
      'admin.form.date_to': 'Date to',
      'admin.form.temp_gte': 'Temp ≥ (°C)',
      'admin.form.temp_lte': 'Temp ≤ (°C)',
      'admin.form.rain_lte': 'Rain ≤ (mm)',
      'admin.form.rain_gte': 'Rain ≥ (mm)',

      // Admin page — buttons
      'admin.btn.cancel': 'Cancel',
      'admin.btn.save_rule': 'Save rule',

      // Admin page — day abbreviations (checkboxes & condition summary)
      'admin.day.0': 'Sun',
      'admin.day.1': 'Mon',
      'admin.day.2': 'Tue',
      'admin.day.3': 'Wed',
      'admin.day.4': 'Thu',
      'admin.day.5': 'Fri',
      'admin.day.6': 'Sat',

      // Admin page — dynamic JS strings
      'admin.js.always': 'Always',
      'admin.js.no_rules': 'No rules found.',
      'admin.js.add_first': 'Add the first rule',
      'admin.js.delete_confirm': function(name) { return 'Delete "' + name + '"?\n\nThis will soft-delete (deactivate) the rule.'; },
      'admin.js.csv_empty': 'No CSV content',
      'admin.js.uploading': 'Uploading…',
      'admin.js.uploaded': function(n, errors) { var msg = '✓ Inserted ' + n + ' rule' + (n !== 1 ? 's' : '') + '.'; if (errors > 0) msg += ' ⚠️ ' + errors + ' row(s) had errors.'; return msg; },
      'admin.js.load_fail': 'Failed to load factors: ',
      'admin.js.update_fail': 'Failed to update: ',
      'admin.js.delete_fail': 'Delete failed: ',
      'admin.js.upload_fail': 'Upload failed: ',
      'admin.js.err_name': 'Name is required',
      'admin.js.err_impact': 'Score impact must be a number',

      // — Abonnés tab (subscribers) —
      'admin.tab.factors': '⚙️ Custom Factors',
      'admin.tab.subscribers': '👥 Abonnés',
      'admin.sub.stat.total': 'Total subscribers',
      'admin.sub.stat.active': 'Active',
      'admin.sub.stat.unsub': 'Unsubscribed',
      'admin.sub.table.email': 'Email',
      'admin.sub.table.city': 'City',
      'admin.sub.table.language': 'Language',
      'admin.sub.table.date': 'Subscribed on',
      'admin.sub.table.status': 'Status',
      'admin.sub.table.unsub_date': 'Unsubscribed on',
      'admin.sub.status.active': 'Active',
      'admin.sub.status.unsub': 'Unsubscribed',
      'admin.sub.js.no_subs': 'No subscribers yet.',
      'admin.sub.js.load_fail': 'Failed to load subscribers: ',

      // Venue admin page — Chalet du Parc
      'vadmin.page_title': 'Chalet du Parc — Events Admin',
      'vadmin.page_heading': '🎪 Chalet du Parc — Venue Events',
      'vadmin.page_sub': 'Manage venue-specific events that boost demand scores on forecast days. These stack on top of city-wide events and scoring factors.',
      'vadmin.nav.venue_profile': 'Venue Profile',
      'vadmin.nav.admin': 'Events Admin',
      'vadmin.nav.scoring_factors': 'Scoring Factors',
      'vadmin.stat.total': 'Total events',
      'vadmin.stat.active': 'Active',
      'vadmin.stat.upcoming': 'Upcoming',
      'vadmin.stat.high_impact': 'High impact',
      'vadmin.btn.add_event': '＋ Add Event',
      'vadmin.btn.back_to_venue': 'View forecast',
      'vadmin.btn.save_event': 'Save event',
      'vadmin.btn.update_event': 'Update event',
      'vadmin.table.name': 'Event Name',
      'vadmin.table.dates': 'Dates',
      'vadmin.table.impact': 'Impact',
      'vadmin.table.description': 'Description',
      'vadmin.table.status': 'Status',
      'vadmin.impact.low': 'Low +2',
      'vadmin.impact.medium': 'Medium +5',
      'vadmin.impact.high': 'High +10',
      'vadmin.impact.very_high': 'Very High +15',
      'vadmin.modal.add_title': 'Add Venue Event',
      'vadmin.modal.edit_title': 'Edit Venue Event',
      'vadmin.form.name': 'Event name *',
      'vadmin.form.start_date': 'Start date *',
      'vadmin.form.end_date': 'End date *',
      'vadmin.form.end_date_hint': 'Same as start for single-day events',
      'vadmin.form.impact_level': 'Impact level *',
      'vadmin.form.impact.low': 'Low (+2 pts)',
      'vadmin.form.impact.medium': 'Medium (+5 pts)',
      'vadmin.form.impact.high': 'High (+10 pts)',
      'vadmin.form.impact.very_high': 'Very High (+15 pts)',
      'vadmin.form.description': 'Description',
      'vadmin.form.source': 'Source (optional)',
      'vadmin.help.title': '💡 How venue events work',
      'vadmin.help.body': 'Venue events are added on top of the base forecast score for each day they overlap. A High impact event adds +10 points to the venue demand score. Multiple events on the same day stack. Examples: Brunch Jazz dimanche, Soirée privée, Fête du Parc, Concert en plein air.',
      'vadmin.js.loading': 'Loading…',
      'vadmin.js.no_events': 'No events found.',
      'vadmin.js.active': 'Active',
      'vadmin.js.inactive': 'Inactive',
      'vadmin.js.edit': 'Edit',
      'vadmin.js.delete': 'Delete',
      'vadmin.js.load_fail': 'Failed to load events: ',
      'vadmin.js.save_fail': 'Failed to save: ',
      'vadmin.js.delete_fail': 'Delete failed: ',
      'vadmin.js.err_name': 'Event name is required',
      'vadmin.js.err_start_date': 'Start date is required',
      'vadmin.js.err_end_date': 'End date is required',
      'vadmin.js.err_date_order': 'Start date must be before or equal to end date',
      'vadmin.js.delete_confirm': function(name) { return 'Deactivate "' + name + '"?\n\nThe event will be soft-deleted (hidden from forecast).'; },
    },

    fr: {
      'nav.live_forecast': 'Prévisions en direct',
      'nav.events_tag': '🎪 Événements',
      'nav.city': '📍 Lyon, France',
      'nav.all_events': '🎪 Tous les événements →',
      'nav.forecast_link': '📊 Prévisions →',

      'forecast.loading': 'Chargement des prévisions…',
      'forecast.title': 'Prévisions 7 jours — Lyon',
      'forecast.strip_header': 'Scores de demande quotidiens',
      'forecast.subscribe.title': 'Recevez les prévisions par email',
      'forecast.subscribe.sub': 'Prévisions 7 jours pour Lyon, envoyées chaque matin à 7h.',
      'forecast.subscribe.placeholder': 'votre@email.com',
      'forecast.subscribe.btn': 'S\'abonner',
      'forecast.subscribe.btn_loading': 'Inscription…',
      'forecast.subscribe.success': '✓ Inscription confirmée ! Premier digest demain matin.',
      'forecast.footer': 'Météo : <a href="https://open-meteo.com/" target="_blank">Open-Meteo</a> · Congés : Ministère de l\'Éducation nationale (Zone A) · Événements : ONLYLYON Tourisme, Eurexpo, OL · <a href="/">Retour à VenueCast</a>',

      'forecast.error_prefix': 'Erreur lors du chargement : ',
      'forecast.stat.avg_score': 'Score moyen',
      'forecast.stat.peak_day': 'Jour fort',
      'forecast.stat.low_day': 'Jour faible',
      'forecast.stat.holidays': 'Congés',
      'forecast.stat.events': 'Événements',
      'forecast.holidays.none': 'Aucun',
      'forecast.events.none': 'Aucun',
      'forecast.holidays.days': function(n) { return n + ' jour' + (n > 1 ? 's' : ''); },
      'forecast.events.days': function(n) { return n + ' jour' + (n > 1 ? 's' : ''); },

      'forecast.banner.school_active': 'Vacances scolaires — ',
      'forecast.banner.school_upcoming': 'Prochaines vacances — ',
      'forecast.banner.active': '● En cours',
      'forecast.banner.tomorrow': 'Demain',
      'forecast.banner.in_days': function(n) { return 'Dans ' + n + ' jours'; },
      'forecast.banner.source': 'Source : Ministère de l\'Éducation nationale — Zone A (Lyon)',

      'forecast.events_panel.title': '🎪 Lyon — Événements',
      'forecast.events_panel.view_all': 'Voir tout →',
      'forecast.events_panel.sources': 'Sources : ONLYLYON Tourisme · Eurexpo Lyon · Olympique Lyonnais · Ville de Lyon',
      'forecast.events_panel.upcoming': function(n) { return n + ' événement' + (n > 1 ? 's' : '') + ' à venir'; },

      'crowd.very_high': 'Très fort',
      'crowd.high': 'Fort',
      'crowd.medium': 'Moyen',
      'crowd.low': 'Faible',

      'forecast.detail.weather': 'Météo',
      'forecast.detail.precipitation': 'Précipitations',
      'forecast.detail.wind': 'Vent',
      'forecast.detail.day_type': 'Type de jour',
      'forecast.detail.max_speed': 'Vitesse max',
      'forecast.detail.strong_wind': ' ⚠️ Fort',
      'forecast.detail.holiday': '(Jour férié)',
      'forecast.detail.bridge': '(Pont)',
      'forecast.detail.school_holiday': 'Vacances scolaires',
      'forecast.detail.regular_day': 'Jour scolaire',
      'forecast.detail.prob': '% de probabilité',
      'forecast.detail.city_events': 'Événements',
      'forecast.detail.impact': ' impact',

      'forecast.breakdown.title': 'Détail du score',
      'forecast.breakdown.base': 'Base',
      'forecast.breakdown.weather': 'Météo',
      'forecast.breakdown.day': 'Jour',
      'forecast.breakdown.holidays': 'Congés',
      'forecast.breakdown.events': 'Événements',
      'forecast.breakdown.season': 'Saison',

      // Venue profile CTA
      'forecast.venue_cta.text': 'Voir le profil Chalet du Parc',
      'forecast.venue_cta.badge': 'Hyper-local',

      'events.loading': 'Chargement des événements…',
      'events.title': 'Calendrier des événements',
      'events.hero.kicker': 'LYON',
      'events.stat.upcoming': 'Événements à venir',
      'events.stat.high_impact': 'Fort impact',
      'events.stat.next_event': 'Prochain événement',
      'events.stat.through': 'Jusqu\'au',
      'events.filter.label': 'Filtrer :',
      'events.filter.all': 'Tous',
      'events.filter.very_high': '🔴 Très fort',
      'events.filter.high': '🟠 Fort',
      'events.filter.medium': '🟡 Moyen',
      'events.filter.low': '🟢 Faible',
      'events.cta.title': 'Voyez comment les événements influencent la demande',
      'events.cta.sub': 'VenueCast note chaque jour de 0 à 100 en tenant compte de la météo, des congés et de ces événements.',
      'events.cta.btn': '📊 Voir les prévisions 7 jours →',
      'events.footer': 'Événements : ONLYLYON Tourisme · Eurexpo Lyon · Olympique Lyonnais · Ville de Lyon · <a href="/forecast">Voir les prévisions</a> · <a href="/">Accueil VenueCast</a>',

      'events.error_prefix': 'Erreur lors du chargement : ',
      'events.empty': 'Aucun événement pour ce filtre.',
      'events.source': 'Source : ',
      'events.high_count': function(n) { return n + ' événement' + (n !== 1 ? 's' : ''); },
      'events.event_count': function(n) { return n + ' événement' + (n !== 1 ? 's' : ''); },
      'events.days': function(n) { return n === 1 ? '1 jour' : n + ' jours'; },

      'index.nav_tag': 'Prévisions urbaines',
      'index.hero.kicker': 'Pour restaurants, salles & événements',
      'index.hero.title': 'Anticipez ce que votre ville<br>vous réserve <em>avant que ça arrive</em>',
      'index.hero.sub': 'VenueCast agrège météo, événements locaux, vacances scolaires et saisonnalité en une seule prévision. De 7 jours à 3 mois. Sans intégration caisse.',
      'index.cta.forecast': 'Voir les prévisions de Lyon →',
      'index.cta.email': 'Aperçu du digest email',
      'index.strip.header': 'Lyon — Semaine du 17 mars 2026',
      'index.sources.title': 'Quatre couches de données.<br>Une seule prévision.',
      'index.sources.sub': 'VenueCast s\'appuie sur les sources qui comptent vraiment pour le trafic en salle, pas votre historique caisse.',
      'index.src1.title': 'Météo précise',
      'index.src1.desc': 'Probabilité de pluie horaire. Vents > 70 km/h signalés. Courbes de température. Pas juste "beau ou nuageux" mais des données opérationnelles réelles pour terrasses et événements extérieurs.',
      'index.src2.title': 'Événements urbains',
      'index.src2.desc': 'Congrès, festivals, salons, concerts, matchs. Issus des offices de tourisme et données ouvertes. Sachez quand 10 000 personnes arrivent près de votre établissement.',
      'index.src3.title': 'Vacances scolaires',
      'index.src3.desc': 'Zones A, B, C. Congés européens. Ponts. Ces décalages de calendrier qui changent tout, du déjeuner au dîner en famille.',
      'index.src4.title': 'Saisonnalité secteur',
      'index.src4.desc': 'Tendances restauration et événementiel propres à votre ville. Haute saison, basse saison et tout le reste, pondérés par années de données.',
      'index.how.title': 'Comment ça marche',
      'index.step1.title': 'Choisissez votre ville',
      'index.step1.desc': 'Sélectionnez votre emplacement. VenueCast se connecte automatiquement à toutes les sources de données ouvertes pertinentes.',
      'index.step2.title': 'Obtenez vos prévisions',
      'index.step2.desc': 'Un score de demande pour chaque jour, combinant météo, événements, congés et tendances saisonnières. Vue dashboard et digest email.',
      'index.step3.title': 'Planifiez en avance',
      'index.step3.desc': 'Bons plannings, bonnes commandes, terrasse ouverte ou fermée en toute confiance. De 7 jours à 3 mois.',
      'index.horizons.title': 'Des prévisions à toutes les échelles',
      'index.h1.label': 'Prévision détaillée',
      'index.h1.desc': 'Météo horaire, événements confirmés, scores précis',
      'index.h2.label': 'Tendances',
      'index.h2.desc': 'Tendances météo, événements connus, guidance RH',
      'index.h3.label': 'Vue mensuelle',
      'index.h3.desc': 'Tendances saisonnières, grands événements, planification budget',
      'index.h4.label': 'Vue saisonnière',
      'index.h4.desc': 'Demande long terme, périodes de congés, planification stratégique',
      'index.city_req.title': 'Votre ville n\'est pas encore disponible ?',
      'index.city_req.sub': 'Dites-nous quelle ville vous souhaitez voir — nous prioriserons les plus demandées.',
      'index.city_req.email_placeholder': 'votre@email.com',
      'index.city_req.city_placeholder': 'Nom de la ville',
      'index.city_req.country_placeholder': 'Pays (optionnel)',
      'index.city_req.message_placeholder': 'Contexte ? (optionnel)',
      'index.city_req.btn': 'Suggérer cette ville',
      'index.city_req.btn_loading': 'Envoi…',
      'index.city_req.success': '✓ Reçu ! Nous vous préviendrons au lancement.',
      'index.city_req.error_email': 'Veuillez saisir un email valide.',
      'index.city_req.error_city': 'Veuillez saisir un nom de ville.',
      'admin.city_req.tab': 'Villes demandées',
      'admin.city_req.title': '🏙️ Villes demandées',
      'admin.city_req.sub': 'Villes demandées par les utilisateurs — triées par volume.',
      'admin.city_req.loading': 'Chargement…',
      'admin.city_req.cities_title': 'Villes les plus demandées',
      'admin.city_req.entries_title': 'Toutes les demandes',
      'admin.city_req.col.city': 'Ville',
      'admin.city_req.col.count': 'Demandes',
      'admin.city_req.col.first': 'Première',
      'admin.city_req.col.last': 'Dernière',
      'admin.city_req.col.email': 'Email',
      'admin.city_req.col.country': 'Pays',
      'admin.city_req.col.message': 'Message',
      'admin.city_req.col.date': 'Date',
      'admin.city_req.empty': 'Aucune demande de ville pour l\'instant.',
      'index.closing.title': 'Arrêtez de deviner.<br>Commencez à prévoir votre ville.',
      'index.closing.sub': 'Chaque exploitant regarde la météo. Cherche les événements locaux. Compte les vacances sur ses doigts. VenueCast fait tout ça automatiquement, et vous dit ce que ça signifie pour votre activité.',
      'index.footer': 'VenueCast — Créé par <a href="https://polsia.com">Polsia</a>',

      'nav.how_it_works': 'Comment ça marche',
      'hiw.title': 'Comment fonctionne VenueCast',
      'hiw.sub': 'Un indice de demande quotidien de 0 à 100 construit à partir de 6 couches de données, pour aider les exploitants lyonnais à anticiper chaque journée.',
      'hiw.score_scale': 'L\'échelle de score 0–100',
      'hiw.tier.very_low': 'Très faible — journée calme',
      'hiw.tier.low': 'Faible — trafic en dessous de la moyenne',
      'hiw.tier.medium': 'Modéré — journée chargée normale',
      'hiw.tier.high': 'Fort — préparez une capacité supplémentaire',
      'hiw.tier.very_high': 'Très fort — tout le monde sur le pont',
      'hiw.factors.title': '6 Facteurs de score',
      'hiw.factor.weather': 'Météo',
      'hiw.factor.weather.desc': 'Probabilité de pluie, température et vent. La mauvaise météo baisse les scores ; les conditions optimales ajoutent jusqu\'à +15.',
      'hiw.factor.day': 'Jour de la semaine',
      'hiw.factor.day.desc': 'Le vendredi score le plus haut (+20), le dimanche le plus bas. Les patterns du week-end diffèrent des jours de semaine.',
      'hiw.factor.holidays': 'Jours fériés',
      'hiw.factor.holidays.desc': 'Jours fériés français (Zone A), ponts et vacances scolaires issus du Ministère de l\'Éducation nationale.',
      'hiw.factor.season': 'Saisonnalité',
      'hiw.factor.season.desc': 'Tendances saisonnières propres aux restaurants et salles lyonnaises. Haute saison, basse saison et tout le reste.',
      'hiw.factor.events': 'Événements',
      'hiw.factor.events.desc': 'Événements confirmés d\'ONLYLYON, Eurexpo, OL et la Ville de Lyon. Les grands événements ajoutent jusqu\'à +15.',
      'hiw.factor.proximity': 'Proximité des congés',
      'hiw.factor.proximity.desc': 'Les jours juste avant ou après une période de congés déplacent la demande. L\'approche des vacances scolaires booste le trafic.',
      'hiw.formula.title': 'La formule',
      'hiw.formula.desc': 'Base 50 + Météo (±15) + Jour de semaine (±20) + Congés (±10) + Saisonnalité (±12) + Événements (+5–15) + Proximité (±5)',
      'hiw.cta': '→ Voir les prévisions 7 jours',
      'hiw.modal.title': 'Que signifie le score ?',
      'hiw.modal.sub': 'Un indice de demande 0–100 combinant 6 facteurs.',
      'hiw.modal.factors_title': '6 facteurs de score',
      'hiw.modal.cta': 'En savoir plus →',

      // Admin page — navigation
      'admin.nav.forecast': 'Prévisions',
      'admin.nav.events': 'Événements',
      'admin.nav.admin': 'Admin',
      'admin.nav.logout': 'Déconnexion',

      // Admin page — header
      'admin.page_title': 'VenueCast Admin — Facteurs personnalisés',
      'admin.page_heading': '⚙️ Facteurs de score personnalisés',
      'admin.page_sub': 'Ajoutez des règles hyper-locales qui boostent ou pénalisent les scores de demande pour votre établissement. Elles s\'empilent sur les 6 facteurs standards.',

      // Admin page — stats
      'admin.stat.total': 'Total règles',
      'admin.stat.active': 'Actives',
      'admin.stat.boost': 'Règles boost',
      'admin.stat.penalty': 'Règles pénalité',

      // Admin page — toolbar
      'admin.btn.add_rule': '＋ Ajouter une règle',
      'admin.filter.all': 'Toutes',
      'admin.filter.active': 'Actives',
      'admin.filter.inactive': 'Inactives',
      'admin.btn.refresh': '↻ Actualiser',

      // Admin page — table headers
      'admin.table.name': 'Nom',
      'admin.table.condition': 'Condition',
      'admin.table.impact': 'Impact',
      'admin.table.tag': 'Tag',
      'admin.table.status': 'Statut',
      'admin.table.actions': 'Actions',

      // Admin page — CSV section
      'admin.csv.title': '📤 Import en masse via CSV',
      'admin.csv.sub1': 'Collez des lignes CSV ci-dessous. Colonnes requises : <code>name</code>, <code>condition_type</code>, <code>score_impact</code>. Optionnelles : <code>description</code>, <code>venue_tag</code>, <code>temp_min</code>, <code>temp_max</code>, <code>rain_max</code>, <code>rain_min</code>, <code>date_start</code>, <code>date_end</code>.',
      'admin.csv.sub2': 'Valeurs <strong>condition_type</strong> : <code>always</code> · <code>monday–sunday</code> · <code>weekday</code> · <code>weekend</code> · <code>sunny</code> · <code>rainy</code> · <code>cold</code> · <code>hot</code> · <code>date_range</code>',
      'admin.csv.btn_upload': 'Importer CSV',
      'admin.csv.btn_clear': 'Effacer',
      'admin.csv.btn_sample': 'Charger exemple',

      // Admin page — condition reference table
      'admin.ref.title': '📖 Référence des conditions',
      'admin.ref.th.type': 'Type de condition',
      'admin.ref.th.meaning': 'Ce que ça signifie',
      'admin.ref.th.filters': 'Filtres supplémentaires',
      'admin.ref.always': 'S\'applique chaque jour',
      'admin.ref.dow': 'Jour de la semaine spécifique',
      'admin.ref.weekday': 'Lun–Ven',
      'admin.ref.weekend': 'Sam–Dim',
      'admin.ref.sunny': 'Pluie ≤ 2mm &amp; temp ≥ 15°C',
      'admin.ref.rainy': 'Pluie ≥ 5mm',
      'admin.ref.cold': 'Temp. moy. ≤ 5°C',
      'admin.ref.hot': 'Temp. moy. ≥ 28°C',
      'admin.ref.date_range': 'Entre date_start et date_end',
      'admin.ref.filters.none': '—',
      'admin.ref.filters.dow': 'temp_min, rain_max, etc.',
      'admin.ref.filters.sunny': 'Remplacer avec temp_min, rain_max',
      'admin.ref.filters.rainy': 'Remplacer avec rain_min',
      'admin.ref.filters.cold': 'Remplacer avec temp_max',
      'admin.ref.filters.hot': 'Remplacer avec temp_min',
      'admin.ref.filters.date_range': 'date_start, date_end (AAAA-MM-JJ)',

      // Admin page — modal
      'admin.modal.add_title': 'Ajouter un facteur',
      'admin.modal.edit_title': 'Modifier le facteur',

      // Admin page — form labels
      'admin.form.rule_name': 'Nom de la règle *',
      'admin.form.score_impact': 'Impact sur le score *',
      'admin.form.impact_hint': 'Positif = boost · Négatif = pénalité',
      'admin.form.description': 'Description',
      'admin.form.venue_tag': 'Tag établissement',
      'admin.form.status': 'Statut',
      'admin.form.conditions_title': 'Conditions',
      'admin.form.conditions_hint': '(vide = s\'applique toujours)',
      'admin.form.day_of_week': 'Jour de la semaine',
      'admin.form.date_from': 'Date de début',
      'admin.form.date_to': 'Date de fin',
      'admin.form.temp_gte': 'Temp ≥ (°C)',
      'admin.form.temp_lte': 'Temp ≤ (°C)',
      'admin.form.rain_lte': 'Pluie ≤ (mm)',
      'admin.form.rain_gte': 'Pluie ≥ (mm)',

      // Admin page — buttons
      'admin.btn.cancel': 'Annuler',
      'admin.btn.save_rule': 'Enregistrer',

      // Admin page — day abbreviations
      'admin.day.0': 'Dim',
      'admin.day.1': 'Lun',
      'admin.day.2': 'Mar',
      'admin.day.3': 'Mer',
      'admin.day.4': 'Jeu',
      'admin.day.5': 'Ven',
      'admin.day.6': 'Sam',

      // Admin page — dynamic JS strings
      'admin.js.always': 'Toujours',
      'admin.js.no_rules': 'Aucune règle trouvée.',
      'admin.js.add_first': 'Ajouter la première règle',
      'admin.js.delete_confirm': function(name) { return 'Supprimer "' + name + '" ?\n\nLa règle sera désactivée.'; },
      'admin.js.csv_empty': 'Aucun contenu CSV',
      'admin.js.uploading': 'Import en cours…',
      'admin.js.uploaded': function(n, errors) { var msg = '✓ ' + n + ' règle' + (n !== 1 ? 's' : '') + ' insérée' + (n !== 1 ? 's' : '') + '.'; if (errors > 0) msg += ' ⚠️ ' + errors + ' ligne(s) en erreur.'; return msg; },
      'admin.js.load_fail': 'Erreur de chargement : ',
      'admin.js.update_fail': 'Mise à jour échouée : ',
      'admin.js.delete_fail': 'Suppression échouée : ',
      'admin.js.upload_fail': 'Import échoué : ',
      'admin.js.err_name': 'Le nom est requis',
      'admin.js.err_impact': 'L\'impact doit être un nombre',

      // — Abonnés —
      'admin.tab.factors': '⚙️ Règles',
      'admin.tab.subscribers': '👥 Abonnés',
      'admin.sub.stat.total': 'Total abonnés',
      'admin.sub.stat.active': 'Actifs',
      'admin.sub.stat.unsub': 'Désinscrits',
      'admin.sub.table.email': 'Email',
      'admin.sub.table.city': 'Ville',
      'admin.sub.table.language': 'Langue',
      'admin.sub.table.date': 'Inscrit le',
      'admin.sub.table.status': 'Statut',
      'admin.sub.table.unsub_date': 'Désinscrit le',
      'admin.sub.status.active': 'Actif',
      'admin.sub.status.unsub': 'Désinscrit',
      'admin.sub.js.no_subs': 'Aucun abonné pour l\'instant.',
      'admin.sub.js.load_fail': 'Erreur de chargement : ',

      // Venue admin page — Chalet du Parc
      'vadmin.page_title': 'Chalet du Parc — Gestion des événements',
      'vadmin.page_heading': '🎪 Chalet du Parc — Événements du lieu',
      'vadmin.page_sub': 'Gérez les événements spécifiques au lieu qui boostent les scores de demande. Ils s\'ajoutent aux événements de la ville et aux facteurs de scoring.',
      'vadmin.nav.venue_profile': 'Profil du lieu',
      'vadmin.nav.admin': 'Événements Admin',
      'vadmin.nav.scoring_factors': 'Facteurs de scoring',
      'vadmin.stat.total': 'Total événements',
      'vadmin.stat.active': 'Actifs',
      'vadmin.stat.upcoming': 'À venir',
      'vadmin.stat.high_impact': 'Fort impact',
      'vadmin.btn.add_event': '＋ Ajouter un événement',
      'vadmin.btn.back_to_venue': 'Voir les prévisions',
      'vadmin.btn.save_event': 'Enregistrer',
      'vadmin.btn.update_event': 'Mettre à jour',
      'vadmin.table.name': 'Nom de l\'événement',
      'vadmin.table.dates': 'Dates',
      'vadmin.table.impact': 'Impact',
      'vadmin.table.description': 'Description',
      'vadmin.table.status': 'Statut',
      'vadmin.impact.low': 'Faible +2',
      'vadmin.impact.medium': 'Moyen +5',
      'vadmin.impact.high': 'Fort +10',
      'vadmin.impact.very_high': 'Très fort +15',
      'vadmin.modal.add_title': 'Ajouter un événement',
      'vadmin.modal.edit_title': 'Modifier l\'événement',
      'vadmin.form.name': 'Nom de l\'événement *',
      'vadmin.form.start_date': 'Date de début *',
      'vadmin.form.end_date': 'Date de fin *',
      'vadmin.form.end_date_hint': 'Identique au début pour un événement d\'un jour',
      'vadmin.form.impact_level': 'Niveau d\'impact *',
      'vadmin.form.impact.low': 'Faible (+2 pts)',
      'vadmin.form.impact.medium': 'Moyen (+5 pts)',
      'vadmin.form.impact.high': 'Fort (+10 pts)',
      'vadmin.form.impact.very_high': 'Très fort (+15 pts)',
      'vadmin.form.description': 'Description',
      'vadmin.form.source': 'Source (optionnel)',
      'vadmin.help.title': '💡 Comment fonctionnent les événements du lieu',
      'vadmin.help.body': 'Les événements du lieu s\'ajoutent au score de base pour chaque jour où ils se chevauchent. Un événement à fort impact ajoute +10 points. Plusieurs événements le même jour s\'accumulent. Exemples : Brunch Jazz dimanche, Soirée privée, Fête du Parc, Concert en plein air.',
      'vadmin.js.loading': 'Chargement…',
      'vadmin.js.no_events': 'Aucun événement trouvé.',
      'vadmin.js.active': 'Actif',
      'vadmin.js.inactive': 'Inactif',
      'vadmin.js.edit': 'Modifier',
      'vadmin.js.delete': 'Supprimer',
      'vadmin.js.load_fail': 'Échec du chargement : ',
      'vadmin.js.save_fail': 'Échec de l\'enregistrement : ',
      'vadmin.js.delete_fail': 'Suppression échouée : ',
      'vadmin.js.err_name': 'Le nom de l\'événement est requis',
      'vadmin.js.err_start_date': 'La date de début est requise',
      'vadmin.js.err_end_date': 'La date de fin est requise',
      'vadmin.js.err_date_order': 'La date de début doit être antérieure ou égale à la date de fin',
      'vadmin.js.delete_confirm': function(name) { return 'Désactiver "' + name + '" ?\n\nL\'événement sera masqué des prévisions.'; },
    },

    es: {
      'nav.live_forecast': 'Previsión en vivo',
      'nav.events_tag': '🎪 Eventos',
      'nav.city': '📍 Lyon, Francia',
      'nav.all_events': '🎪 Todos los eventos →',
      'nav.forecast_link': '📊 Previsión →',

      'forecast.loading': 'Cargando previsión de Lyon…',
      'forecast.title': 'Previsión 7 días — Lyon',
      'forecast.strip_header': 'Puntuaciones de demanda diaria',
      'forecast.subscribe.title': 'Recibe la previsión en tu email',
      'forecast.subscribe.sub': 'Previsión de 7 días para Lyon, enviada cada mañana a las 7h.',
      'forecast.subscribe.placeholder': 'tu@email.com',
      'forecast.subscribe.btn': 'Suscribirse',
      'forecast.subscribe.btn_loading': 'Suscribiendo…',
      'forecast.subscribe.success': '✓ ¡Suscripción confirmada! El primer resumen llega mañana por la mañana.',
      'forecast.footer': 'Tiempo: <a href="https://open-meteo.com/" target="_blank">Open-Meteo</a> · Festivos: Ministerio de Educación francés (Zona A) · Eventos: ONLYLYON Tourisme, Eurexpo, OL · <a href="/">Volver a VenueCast</a>',

      'forecast.error_prefix': 'Error al cargar la previsión: ',
      'forecast.stat.avg_score': 'Puntuación media',
      'forecast.stat.peak_day': 'Día pico',
      'forecast.stat.low_day': 'Día bajo',
      'forecast.stat.holidays': 'Festivos',
      'forecast.stat.events': 'Eventos',
      'forecast.holidays.none': 'Ninguno',
      'forecast.events.none': 'Ninguno',
      'forecast.holidays.days': function(n) { return n + ' día' + (n > 1 ? 's' : ''); },
      'forecast.events.days': function(n) { return n + ' día' + (n > 1 ? 's' : ''); },

      'forecast.banner.school_active': 'Vacaciones escolares — ',
      'forecast.banner.school_upcoming': 'Próximas vacaciones — ',
      'forecast.banner.active': '● En curso',
      'forecast.banner.tomorrow': 'Mañana',
      'forecast.banner.in_days': function(n) { return 'En ' + n + ' día' + (n > 1 ? 's' : ''); },
      'forecast.banner.source': 'Fuente: Ministerio de Educación Nacional francés — Zona A (Lyon)',

      'forecast.events_panel.title': '🎪 Lyon — Eventos urbanos',
      'forecast.events_panel.view_all': 'Ver todos →',
      'forecast.events_panel.sources': 'Fuentes: ONLYLYON Tourisme · Eurexpo Lyon · Olympique Lyonnais · Ville de Lyon',
      'forecast.events_panel.upcoming': function(n) { return n + ' evento' + (n > 1 ? 's' : '') + ' próximo' + (n > 1 ? 's' : ''); },

      'crowd.very_high': 'Muy alto',
      'crowd.high': 'Alto',
      'crowd.medium': 'Medio',
      'crowd.low': 'Bajo',

      'forecast.detail.weather': 'Tiempo',
      'forecast.detail.precipitation': 'Precipitaciones',
      'forecast.detail.wind': 'Viento',
      'forecast.detail.day_type': 'Tipo de día',
      'forecast.detail.max_speed': 'Velocidad máx.',
      'forecast.detail.strong_wind': ' ⚠️ Fuerte',
      'forecast.detail.holiday': '(Festivo)',
      'forecast.detail.bridge': '(Puente)',
      'forecast.detail.school_holiday': 'Vacaciones escolares',
      'forecast.detail.regular_day': 'Día lectivo normal',
      'forecast.detail.prob': '% de probabilidad',
      'forecast.detail.city_events': 'Eventos urbanos',
      'forecast.detail.impact': ' impacto',

      'forecast.breakdown.title': 'Desglose de puntuación',
      'forecast.breakdown.base': 'Base',
      'forecast.breakdown.weather': 'Tiempo',
      'forecast.breakdown.day': 'Día',
      'forecast.breakdown.holidays': 'Festivos',
      'forecast.breakdown.events': 'Eventos',
      'forecast.breakdown.season': 'Temporada',

      // Venue profile CTA
      'forecast.venue_cta.text': 'Ver el perfil de Chalet du Parc',
      'forecast.venue_cta.badge': 'Hiper-local',

      'events.loading': 'Cargando eventos de Lyon…',
      'events.title': 'Calendario de eventos',
      'events.hero.kicker': 'LYON',
      'events.stat.upcoming': 'Eventos próximos',
      'events.stat.high_impact': 'Alto impacto',
      'events.stat.next_event': 'Próximo evento',
      'events.stat.through': 'Hasta',
      'events.filter.label': 'Filtrar:',
      'events.filter.all': 'Todos',
      'events.filter.very_high': '🔴 Muy alto',
      'events.filter.high': '🟠 Alto',
      'events.filter.medium': '🟡 Medio',
      'events.filter.low': '🟢 Bajo',
      'events.cta.title': 'Descubre cómo los eventos afectan la demanda',
      'events.cta.sub': 'VenueCast puntúa cada día de 0 a 100 considerando el tiempo, festivos y estos eventos urbanos.',
      'events.cta.btn': '📊 Ver previsión 7 días →',
      'events.footer': 'Eventos: ONLYLYON Tourisme · Eurexpo Lyon · Olympique Lyonnais · Ville de Lyon · <a href="/forecast">Ver previsión</a> · <a href="/">Inicio VenueCast</a>',

      'events.error_prefix': 'Error al cargar los eventos: ',
      'events.empty': 'No hay eventos para este filtro.',
      'events.source': 'Fuente: ',
      'events.high_count': function(n) { return n + ' evento' + (n !== 1 ? 's' : ''); },
      'events.event_count': function(n) { return n + ' evento' + (n !== 1 ? 's' : ''); },
      'events.days': function(n) { return n === 1 ? '1 día' : n + ' días'; },

      'index.nav_tag': 'Previsión urbana',
      'index.hero.kicker': 'Para restaurantes, salas y eventos',
      'index.hero.title': 'Sabe lo que tu ciudad<br>traerá <em>antes de que ocurra</em>',
      'index.hero.sub': 'VenueCast combina tiempo, eventos locales, vacaciones escolares y estacionalidad en una sola previsión. De 7 días a 3 meses. Sin integración de caja.',
      'index.cta.forecast': 'Ver la previsión de Lyon →',
      'index.cta.email': 'Vista previa del resumen email',
      'index.strip.header': 'Lyon — Semana del 17 de marzo de 2026',
      'index.sources.title': 'Cuatro capas de datos.<br>Una sola previsión.',
      'index.sources.sub': 'VenueCast utiliza las fuentes que realmente importan para el tráfico en sala, no tu historial de caja.',
      'index.src1.title': 'Tiempo de precisión',
      'index.src1.desc': 'Probabilidad de lluvia por hora. Vientos > 70 km/h señalados. Curvas de temperatura. No solo "soleado o nublado" sino datos operativos reales para terrazas y eventos al aire libre.',
      'index.src2.title': 'Eventos urbanos',
      'index.src2.desc': 'Congresos, festivales, ferias, conciertos, deportes. Obtenidos de oficinas de turismo y datos abiertos. Sabe cuándo 10.000 personas llegan cerca de tu local.',
      'index.src3.title': 'Vacaciones escolares',
      'index.src3.desc': 'Zonas A, B, C francesas. Festivos europeos. Puentes. Los cambios de calendario que cambian todo, del almuerzo a la cena familiar.',
      'index.src4.title': 'Estacionalidad del sector',
      'index.src4.desc': 'Patrones del sector restauración y eventos específicos de tu ciudad. Alta temporada, baja temporada y todo lo demás, ponderados por años de datos.',
      'index.how.title': 'Cómo funciona',
      'index.step1.title': 'Elige tu ciudad',
      'index.step1.desc': 'Selecciona tu ubicación. VenueCast se conecta automáticamente a todas las fuentes de datos abiertos relevantes.',
      'index.step2.title': 'Obtén tu previsión',
      'index.step2.desc': 'Una puntuación de demanda para cada día, impulsada por tiempo, eventos, festivos y patrones estacionales. Vista dashboard y resumen email.',
      'index.step3.title': 'Planifica con antelación',
      'index.step3.desc': 'Los turnos correctos. El stock adecuado. Abre o cierra la terraza con confianza. De 7 días a 3 meses.',
      'index.horizons.title': 'Previsiones a todas las escalas',
      'index.h1.label': 'Previsión detallada',
      'index.h1.desc': 'Tiempo por horas, eventos confirmados, puntuaciones precisas',
      'index.h2.label': 'Perspectiva',
      'index.h2.desc': 'Tendencias del tiempo, eventos conocidos, guía de personal',
      'index.h3.label': 'Tendencias',
      'index.h3.desc': 'Patrones estacionales, grandes eventos, planificación presupuestaria',
      'index.h4.label': 'Vista estacional',
      'index.h4.desc': 'Demanda a largo plazo, períodos festivos, planificación estratégica',
      'index.city_req.title': '¿Tu ciudad no está disponible aún?',
      'index.city_req.sub': 'Cuéntanos qué ciudad quieres ver — priorizaremos las más solicitadas.',
      'index.city_req.email_placeholder': 'tu@email.com',
      'index.city_req.city_placeholder': 'Nombre de la ciudad',
      'index.city_req.country_placeholder': 'País (opcional)',
      'index.city_req.message_placeholder': '¿Algún contexto? (opcional)',
      'index.city_req.btn': 'Sugerir esta ciudad',
      'index.city_req.btn_loading': 'Enviando…',
      'index.city_req.success': '✓ ¡Recibido! Te avisaremos cuando tu ciudad esté disponible.',
      'index.city_req.error_email': 'Por favor introduce un email válido.',
      'index.city_req.error_city': 'Por favor introduce el nombre de la ciudad.',
      'admin.city_req.tab': 'Ciudades solicitadas',
      'admin.city_req.title': '🏙️ Ciudades solicitadas',
      'admin.city_req.sub': 'Ciudades solicitadas por usuarios — ordenadas por volumen.',
      'admin.city_req.loading': 'Cargando…',
      'admin.city_req.cities_title': 'Ciudades más solicitadas',
      'admin.city_req.entries_title': 'Todas las solicitudes',
      'admin.city_req.col.city': 'Ciudad',
      'admin.city_req.col.count': 'Solicitudes',
      'admin.city_req.col.first': 'Primera',
      'admin.city_req.col.last': 'Última',
      'admin.city_req.col.email': 'Email',
      'admin.city_req.col.country': 'País',
      'admin.city_req.col.message': 'Mensaje',
      'admin.city_req.col.date': 'Fecha',
      'admin.city_req.empty': 'Aún no hay solicitudes de ciudad.',
      'index.closing.title': 'Deja de adivinar.<br>Empieza a prever tu ciudad.',
      'index.closing.sub': 'Cada operador de local mira el tiempo. Busca eventos locales. Cuenta las vacaciones con los dedos. VenueCast lo hace todo automáticamente, y te dice lo que significa para tu negocio.',
      'index.footer': 'VenueCast — Creado por <a href="https://polsia.com">Polsia</a>',

      'nav.how_it_works': 'Cómo funciona',
      'hiw.title': 'Cómo funciona VenueCast',
      'hiw.sub': 'Un índice diario de demanda de 0 a 100 construido con 6 capas de datos, para que los operadores de locales en Lyon anticipen cada jornada.',
      'hiw.score_scale': 'La escala de puntuación 0–100',
      'hiw.tier.very_low': 'Muy bajo — día tranquilo',
      'hiw.tier.low': 'Bajo — tráfico por debajo de la media',
      'hiw.tier.medium': 'Moderado — día animado normal',
      'hiw.tier.high': 'Alto — prepara capacidad extra',
      'hiw.tier.very_high': 'Muy alto — todos a la obra',
      'hiw.factors.title': '6 factores de puntuación',
      'hiw.factor.weather': 'Tiempo',
      'hiw.factor.weather.desc': 'Probabilidad de lluvia, temperatura y viento. El mal tiempo baja las puntuaciones; las condiciones óptimas añaden hasta +15.',
      'hiw.factor.day': 'Día de la semana',
      'hiw.factor.day.desc': 'El viernes puntúa más alto (+20), el domingo más bajo. Los patrones del fin de semana difieren de los días laborales.',
      'hiw.factor.holidays': 'Festivos',
      'hiw.factor.holidays.desc': 'Festivos franceses (Zona A), puentes y vacaciones escolares del Ministerio de Educación francés.',
      'hiw.factor.season': 'Estacionalidad',
      'hiw.factor.season.desc': 'Tendencias estacionales específicas para restaurantes y salas de Lyon. Alta temporada, baja temporada y todo lo demás.',
      'hiw.factor.events': 'Eventos',
      'hiw.factor.events.desc': 'Eventos confirmados de ONLYLYON, Eurexpo, OL y Ville de Lyon. Los grandes eventos añaden hasta +15.',
      'hiw.factor.proximity': 'Proximidad festiva',
      'hiw.factor.proximity.desc': 'Los días justo antes o después de un período festivo desplazan la demanda. La proximidad a vacaciones escolares aumenta el tráfico.',
      'hiw.formula.title': 'La fórmula',
      'hiw.formula.desc': 'Base 50 + Tiempo (±15) + Día de semana (±20) + Festivos (±10) + Estacionalidad (±12) + Eventos (+5–15) + Proximidad (±5)',
      'hiw.cta': '→ Ver la previsión 7 días',
      'hiw.modal.title': '¿Qué significa la puntuación?',
      'hiw.modal.sub': 'Un índice de demanda 0–100 que combina 6 factores.',
      'hiw.modal.factors_title': '6 factores de puntuación',
      'hiw.modal.cta': 'Saber más →',

      // Admin page — navigation
      'admin.nav.forecast': 'Previsión',
      'admin.nav.events': 'Eventos',
      'admin.nav.admin': 'Admin',
      'admin.nav.logout': 'Cerrar sesión',

      // Admin page — header
      'admin.page_title': 'VenueCast Admin — Factores personalizados',
      'admin.page_heading': '⚙️ Factores de puntuación personalizados',
      'admin.page_sub': 'Añade reglas hiper-locales que impulsan o penalizan las puntuaciones de demanda de tu establecimiento. Se suman a los 6 factores estándar.',

      // Admin page — stats
      'admin.stat.total': 'Total reglas',
      'admin.stat.active': 'Activas',
      'admin.stat.boost': 'Reglas impulso',
      'admin.stat.penalty': 'Reglas penalización',

      // Admin page — toolbar
      'admin.btn.add_rule': '＋ Añadir regla',
      'admin.filter.all': 'Todas',
      'admin.filter.active': 'Activas',
      'admin.filter.inactive': 'Inactivas',
      'admin.btn.refresh': '↻ Actualizar',

      // Admin page — table headers
      'admin.table.name': 'Nombre',
      'admin.table.condition': 'Condición',
      'admin.table.impact': 'Impacto',
      'admin.table.tag': 'Etiqueta',
      'admin.table.status': 'Estado',
      'admin.table.actions': 'Acciones',

      // Admin page — CSV section
      'admin.csv.title': '📤 Carga masiva via CSV',
      'admin.csv.sub1': 'Pega filas CSV abajo. Columnas requeridas: <code>name</code>, <code>condition_type</code>, <code>score_impact</code>. Opcionales: <code>description</code>, <code>venue_tag</code>, <code>temp_min</code>, <code>temp_max</code>, <code>rain_max</code>, <code>rain_min</code>, <code>date_start</code>, <code>date_end</code>.',
      'admin.csv.sub2': 'Valores de <strong>condition_type</strong>: <code>always</code> · <code>monday–sunday</code> · <code>weekday</code> · <code>weekend</code> · <code>sunny</code> · <code>rainy</code> · <code>cold</code> · <code>hot</code> · <code>date_range</code>',
      'admin.csv.btn_upload': 'Cargar CSV',
      'admin.csv.btn_clear': 'Limpiar',
      'admin.csv.btn_sample': 'Cargar ejemplo',

      // Admin page — condition reference table
      'admin.ref.title': '📖 Referencia de condiciones',
      'admin.ref.th.type': 'Tipo de condición',
      'admin.ref.th.meaning': 'Qué significa',
      'admin.ref.th.filters': 'Filtros adicionales',
      'admin.ref.always': 'Se aplica cada día',
      'admin.ref.dow': 'Día de la semana específico',
      'admin.ref.weekday': 'Lun–Vie',
      'admin.ref.weekend': 'Sáb–Dom',
      'admin.ref.sunny': 'Lluvia ≤ 2mm &amp; temp ≥ 15°C',
      'admin.ref.rainy': 'Lluvia ≥ 5mm',
      'admin.ref.cold': 'Temp. media ≤ 5°C',
      'admin.ref.hot': 'Temp. media ≥ 28°C',
      'admin.ref.date_range': 'Entre date_start y date_end',
      'admin.ref.filters.none': '—',
      'admin.ref.filters.dow': 'temp_min, rain_max, etc.',
      'admin.ref.filters.sunny': 'Sobreescribir con temp_min, rain_max',
      'admin.ref.filters.rainy': 'Sobreescribir con rain_min',
      'admin.ref.filters.cold': 'Sobreescribir con temp_max',
      'admin.ref.filters.hot': 'Sobreescribir con temp_min',
      'admin.ref.filters.date_range': 'date_start, date_end (AAAA-MM-DD)',

      // Admin page — modal
      'admin.modal.add_title': 'Añadir factor personalizado',
      'admin.modal.edit_title': 'Editar factor',

      // Admin page — form labels
      'admin.form.rule_name': 'Nombre de la regla *',
      'admin.form.score_impact': 'Impacto en puntuación *',
      'admin.form.impact_hint': 'Positivo = impulso · Negativo = penalización',
      'admin.form.description': 'Descripción',
      'admin.form.venue_tag': 'Etiqueta del local',
      'admin.form.status': 'Estado',
      'admin.form.conditions_title': 'Condiciones',
      'admin.form.conditions_hint': '(vacío = se aplica siempre)',
      'admin.form.day_of_week': 'Día de la semana',
      'admin.form.date_from': 'Fecha desde',
      'admin.form.date_to': 'Fecha hasta',
      'admin.form.temp_gte': 'Temp ≥ (°C)',
      'admin.form.temp_lte': 'Temp ≤ (°C)',
      'admin.form.rain_lte': 'Lluvia ≤ (mm)',
      'admin.form.rain_gte': 'Lluvia ≥ (mm)',

      // Admin page — buttons
      'admin.btn.cancel': 'Cancelar',
      'admin.btn.save_rule': 'Guardar regla',

      // Admin page — day abbreviations
      'admin.day.0': 'Dom',
      'admin.day.1': 'Lun',
      'admin.day.2': 'Mar',
      'admin.day.3': 'Mié',
      'admin.day.4': 'Jue',
      'admin.day.5': 'Vie',
      'admin.day.6': 'Sáb',

      // Admin page — dynamic JS strings
      'admin.js.always': 'Siempre',
      'admin.js.no_rules': 'No se encontraron reglas.',
      'admin.js.add_first': 'Añadir la primera regla',
      'admin.js.delete_confirm': function(name) { return '¿Eliminar "' + name + '"?\n\nEsto desactivará la regla.'; },
      'admin.js.csv_empty': 'Sin contenido CSV',
      'admin.js.uploading': 'Cargando…',
      'admin.js.uploaded': function(n, errors) { var msg = '✓ ' + n + ' regla' + (n !== 1 ? 's' : '') + ' insertada' + (n !== 1 ? 's' : '') + '.'; if (errors > 0) msg += ' ⚠️ ' + errors + ' fila(s) con errores.'; return msg; },
      'admin.js.load_fail': 'Error al cargar los factores: ',
      'admin.js.update_fail': 'Error al actualizar: ',
      'admin.js.delete_fail': 'Error al eliminar: ',
      'admin.js.upload_fail': 'Error al cargar: ',
      'admin.js.err_name': 'El nombre es obligatorio',
      'admin.js.err_impact': 'El impacto debe ser un número',

      // — Suscriptores —
      'admin.tab.factors': '⚙️ Reglas',
      'admin.tab.subscribers': '👥 Suscriptores',
      'admin.sub.stat.total': 'Total suscriptores',
      'admin.sub.stat.active': 'Activos',
      'admin.sub.stat.unsub': 'Dados de baja',
      'admin.sub.table.email': 'Email',
      'admin.sub.table.city': 'Ciudad',
      'admin.sub.table.language': 'Idioma',
      'admin.sub.table.date': 'Suscrito el',
      'admin.sub.table.status': 'Estado',
      'admin.sub.table.unsub_date': 'Dado de baja el',
      'admin.sub.status.active': 'Activo',
      'admin.sub.status.unsub': 'Dado de baja',
      'admin.sub.js.no_subs': 'Aún no hay suscriptores.',
      'admin.sub.js.load_fail': 'Error al cargar suscriptores: ',

      // Venue admin page — Chalet du Parc
      'vadmin.page_title': 'Chalet du Parc — Admin de Eventos',
      'vadmin.page_heading': '🎪 Chalet du Parc — Eventos del Lugar',
      'vadmin.page_sub': 'Gestiona eventos específicos del lugar que aumentan las puntuaciones de demanda. Se suman a los eventos de la ciudad y los factores de puntuación.',
      'vadmin.nav.venue_profile': 'Perfil del lugar',
      'vadmin.nav.admin': 'Admin Eventos',
      'vadmin.nav.scoring_factors': 'Factores de puntuación',
      'vadmin.stat.total': 'Total eventos',
      'vadmin.stat.active': 'Activos',
      'vadmin.stat.upcoming': 'Próximos',
      'vadmin.stat.high_impact': 'Alto impacto',
      'vadmin.btn.add_event': '＋ Añadir Evento',
      'vadmin.btn.back_to_venue': 'Ver previsión',
      'vadmin.btn.save_event': 'Guardar evento',
      'vadmin.btn.update_event': 'Actualizar evento',
      'vadmin.table.name': 'Nombre del evento',
      'vadmin.table.dates': 'Fechas',
      'vadmin.table.impact': 'Impacto',
      'vadmin.table.description': 'Descripción',
      'vadmin.table.status': 'Estado',
      'vadmin.impact.low': 'Bajo +2',
      'vadmin.impact.medium': 'Medio +5',
      'vadmin.impact.high': 'Alto +10',
      'vadmin.impact.very_high': 'Muy alto +15',
      'vadmin.modal.add_title': 'Añadir evento del lugar',
      'vadmin.modal.edit_title': 'Editar evento del lugar',
      'vadmin.form.name': 'Nombre del evento *',
      'vadmin.form.start_date': 'Fecha de inicio *',
      'vadmin.form.end_date': 'Fecha de fin *',
      'vadmin.form.end_date_hint': 'Igual que el inicio para eventos de un solo día',
      'vadmin.form.impact_level': 'Nivel de impacto *',
      'vadmin.form.impact.low': 'Bajo (+2 pts)',
      'vadmin.form.impact.medium': 'Medio (+5 pts)',
      'vadmin.form.impact.high': 'Alto (+10 pts)',
      'vadmin.form.impact.very_high': 'Muy alto (+15 pts)',
      'vadmin.form.description': 'Descripción',
      'vadmin.form.source': 'Fuente (opcional)',
      'vadmin.help.title': '💡 Cómo funcionan los eventos del lugar',
      'vadmin.help.body': 'Los eventos del lugar se añaden a la puntuación base para cada día en que se solapan. Un evento de alto impacto añade +10 puntos. Varios eventos el mismo día se acumulan. Ejemplos: Brunch Jazz domingo, Velada privada, Fiesta del Parque, Concierto al aire libre.',
      'vadmin.js.loading': 'Cargando…',
      'vadmin.js.no_events': 'No se encontraron eventos.',
      'vadmin.js.active': 'Activo',
      'vadmin.js.inactive': 'Inactivo',
      'vadmin.js.edit': 'Editar',
      'vadmin.js.delete': 'Eliminar',
      'vadmin.js.load_fail': 'Error al cargar: ',
      'vadmin.js.save_fail': 'Error al guardar: ',
      'vadmin.js.delete_fail': 'Error al eliminar: ',
      'vadmin.js.err_name': 'El nombre del evento es obligatorio',
      'vadmin.js.err_start_date': 'La fecha de inicio es obligatoria',
      'vadmin.js.err_end_date': 'La fecha de fin es obligatoria',
      'vadmin.js.err_date_order': 'La fecha de inicio debe ser anterior o igual a la fecha de fin',
      'vadmin.js.delete_confirm': function(name) { return '¿Desactivar "' + name + '"?\n\nEl evento se ocultará de las previsiones.'; },
    },

    zh: {
      'nav.live_forecast': '实时预报',
      'nav.events_tag': '🎪 活动',
      'nav.city': '📍 里昂，法国',
      'nav.all_events': '🎪 所有活动 →',
      'nav.forecast_link': '📊 预报 →',

      'forecast.loading': '正在加载里昂预报…',
      'forecast.title': '里昂 7 天预报',
      'forecast.strip_header': '每日需求评分',
      'forecast.subscribe.title': '将预报发送到您的邮箱',
      'forecast.subscribe.sub': '里昂 7 天预报，每天早上 7 时准时送达。',
      'forecast.subscribe.placeholder': '您的邮箱',
      'forecast.subscribe.btn': '订阅',
      'forecast.subscribe.btn_loading': '订阅中…',
      'forecast.subscribe.success': '✓ 订阅成功！明天早上收到第一份摘要。',
      'forecast.footer': '天气：<a href="https://open-meteo.com/" target="_blank">Open-Meteo</a> · 假期：法国国家教育部（A区）· 活动：ONLYLYON旅游局、Eurexpo、OL · <a href="/">返回 VenueCast</a>',

      'forecast.error_prefix': '加载预报失败：',
      'forecast.stat.avg_score': '周均评分',
      'forecast.stat.peak_day': '高峰日',
      'forecast.stat.low_day': '低谷日',
      'forecast.stat.holidays': '假期',
      'forecast.stat.events': '活动',
      'forecast.holidays.none': '无',
      'forecast.events.none': '无',
      'forecast.holidays.days': function(n) { return n + ' 天'; },
      'forecast.events.days': function(n) { return n + ' 天'; },

      'forecast.banner.school_active': '学校假期 — ',
      'forecast.banner.school_upcoming': '即将到来的假期 — ',
      'forecast.banner.active': '● 进行中',
      'forecast.banner.tomorrow': '明天',
      'forecast.banner.in_days': function(n) { return n + ' 天后'; },
      'forecast.banner.source': '来源：法国国家教育部 — A区（里昂）',

      'forecast.events_panel.title': '🎪 里昂 — 城市活动',
      'forecast.events_panel.view_all': '查看全部 →',
      'forecast.events_panel.sources': '来源：ONLYLYON旅游局 · Eurexpo里昂 · 里昂奥林匹克 · 里昂市文化日历',
      'forecast.events_panel.upcoming': function(n) { return n + ' 个即将到来的活动'; },

      'crowd.very_high': '极高',
      'crowd.high': '高',
      'crowd.medium': '中',
      'crowd.low': '低',

      'forecast.detail.weather': '天气',
      'forecast.detail.precipitation': '降水',
      'forecast.detail.wind': '风力',
      'forecast.detail.day_type': '日期类型',
      'forecast.detail.max_speed': '最大风速',
      'forecast.detail.strong_wind': ' ⚠️ 强风',
      'forecast.detail.holiday': '（法定假日）',
      'forecast.detail.bridge': '（连休）',
      'forecast.detail.school_holiday': '学校假期',
      'forecast.detail.regular_day': '正常上学日',
      'forecast.detail.prob': '% 概率',
      'forecast.detail.city_events': '城市活动',
      'forecast.detail.impact': ' 影响',

      'forecast.breakdown.title': '评分明细',
      'forecast.breakdown.base': '基础',
      'forecast.breakdown.weather': '天气',
      'forecast.breakdown.day': '日期',
      'forecast.breakdown.holidays': '假期',
      'forecast.breakdown.events': '活动',
      'forecast.breakdown.season': '季节',

      // Venue profile CTA
      'forecast.venue_cta.text': '查看 Chalet du Parc 场馆主页',
      'forecast.venue_cta.badge': '超本地化',

      'events.loading': '正在加载里昂活动…',
      'events.title': '城市活动日历',
      'events.hero.kicker': '里昂',
      'events.stat.upcoming': '即将到来的活动',
      'events.stat.high_impact': '高影响',
      'events.stat.next_event': '下一个活动',
      'events.stat.through': '截至',
      'events.filter.label': '筛选：',
      'events.filter.all': '全部',
      'events.filter.very_high': '🔴 极高',
      'events.filter.high': '🟠 高',
      'events.filter.medium': '🟡 中',
      'events.filter.low': '🟢 低',
      'events.cta.title': '了解活动如何影响需求',
      'events.cta.sub': 'VenueCast 将每天的天气、假期和城市活动综合评分（0–100）。',
      'events.cta.btn': '📊 查看 7 天预报 →',
      'events.footer': '活动：ONLYLYON旅游局 · Eurexpo里昂 · 里昂奥林匹克 · 里昂市 · <a href="/forecast">查看预报</a> · <a href="/">VenueCast 首页</a>',

      'events.error_prefix': '加载活动失败：',
      'events.empty': '该筛选条件下没有活动。',
      'events.source': '来源：',
      'events.high_count': function(n) { return n + ' 个活动'; },
      'events.event_count': function(n) { return n + ' 个活动'; },
      'events.days': function(n) { return n === 1 ? '1 天' : n + ' 天'; },

      'index.nav_tag': '城市智能预报',
      'index.hero.kicker': '面向餐厅、场馆与活动运营者',
      'index.hero.title': '在城市动态到来之前<br><em>提前掌握</em>',
      'index.hero.sub': 'VenueCast 将天气、本地活动、学校假期和行业季节性整合为一份预报。从 7 天到 3 个月。无需 POS 系统集成。',
      'index.cta.forecast': '查看里昂实时预报 →',
      'index.cta.email': '预览邮件摘要',
      'index.strip.header': '里昂 — 2026年3月17日当周',
      'index.sources.title': '四层数据，<br>一份预报。',
      'index.sources.sub': 'VenueCast 使用真正影响客流的数据源，而非您的历史收银记录。',
      'index.src1.title': '精准天气',
      'index.src1.desc': '每小时降雨概率。风速超过 70 km/h 预警。温度曲线。不只是"晴或阴"，而是露台和室外活动的真实运营数据。',
      'index.src2.title': '城市活动',
      'index.src2.desc': '会议、节庆、展会、演唱会、体育赛事。来自本地旅游局和开放数据。了解何时有 10,000 人出现在您场馆附近。',
      'index.src3.title': '学校假期',
      'index.src3.desc': '法国 A、B、C 区。欧洲假期。连休日。改变一切的日历变动——从午餐客流到家庭晚餐。',
      'index.src4.title': '行业季节性',
      'index.src4.desc': '您所在城市的餐饮和活动行业模式。旺季、淡季及其间的一切，以多年数据加权。',
      'index.how.title': '工作原理',
      'index.step1.title': '选择您的城市',
      'index.step1.desc': '选择您的位置，VenueCast 自动连接该城市所有相关开放数据源。',
      'index.step2.title': '获取预报',
      'index.step2.desc': '每天一个需求评分，结合天气、活动、假期和季节性模式。仪表盘视图及邮件摘要。',
      'index.step3.title': '提前规划',
      'index.step3.desc': '安排合理班次，备货准确，自信决定露台开放或关闭。从 7 天到 3 个月。',
      'index.horizons.title': '各时间尺度的预报',
      'index.h1.label': '详细预报',
      'index.h1.desc': '逐小时天气、已确认活动、精确评分',
      'index.h2.label': '短期展望',
      'index.h2.desc': '天气趋势、已知活动、人员配置建议',
      'index.h3.label': '月度趋势',
      'index.h3.desc': '季节性规律、重大活动、预算规划',
      'index.h4.label': '季节视图',
      'index.h4.desc': '长期需求、假期周期、战略规划',
      'index.city_req.title': '您的城市尚未开放？',
      'index.city_req.sub': '告诉我们您希望看到哪个城市 — 我们将优先处理需求最高的城市。',
      'index.city_req.email_placeholder': '您的邮箱',
      'index.city_req.city_placeholder': '城市名称',
      'index.city_req.country_placeholder': '国家（可选）',
      'index.city_req.message_placeholder': '有什么补充信息？（可选）',
      'index.city_req.btn': '建议此城市',
      'index.city_req.btn_loading': '发送中…',
      'index.city_req.success': '✓ 已收到！城市上线时我们会通知您。',
      'index.city_req.error_email': '请输入有效的邮箱地址。',
      'index.city_req.error_city': '请输入城市名称。',
      'admin.city_req.tab': '城市请求',
      'admin.city_req.title': '🏙️ 城市请求',
      'admin.city_req.sub': '用户提交的城市请求 — 按需求量排序。',
      'admin.city_req.loading': '加载中…',
      'admin.city_req.cities_title': '需求最高的城市',
      'admin.city_req.entries_title': '所有请求',
      'admin.city_req.col.city': '城市',
      'admin.city_req.col.count': '请求数',
      'admin.city_req.col.first': '首次请求',
      'admin.city_req.col.last': '最近请求',
      'admin.city_req.col.email': '邮箱',
      'admin.city_req.col.country': '国家',
      'admin.city_req.col.message': '留言',
      'admin.city_req.col.date': '日期',
      'admin.city_req.empty': '暂无城市请求。',
      'index.closing.title': '停止猜测，<br>开始预测您的城市。',
      'index.closing.sub': '每位场馆运营者都会查天气，搜索本地活动，数着手指算假期。VenueCast 将这一切自动完成，并告诉您这对您的生意意味着什么。',
      'index.footer': 'VenueCast — 由 <a href="https://polsia.com">Polsia</a> 构建',

      'nav.how_it_works': '工作原理',
      'hiw.title': 'VenueCast 工作原理',
      'hiw.sub': '基于6个数据层的0–100每日需求指数，帮助里昂场馆运营者提前了解每天的情况。',
      'hiw.score_scale': '0–100 需求评分说明',
      'hiw.tier.very_low': '极低 — 安静的一天',
      'hiw.tier.low': '低 — 低于平均流量',
      'hiw.tier.medium': '中等 — 普通忙碌日',
      'hiw.tier.high': '高 — 准备额外产能',
      'hiw.tier.very_high': '极高 — 全员出动',
      'hiw.factors.title': '6个评分因子',
      'hiw.factor.weather': '天气',
      'hiw.factor.weather.desc': '降雨概率、温度和风力。恶劣天气降低评分；最佳条件可增加最多 +15。',
      'hiw.factor.day': '星期',
      'hiw.factor.day.desc': '周五评分最高（+20），周日最低。周末模式与工作日不同。',
      'hiw.factor.holidays': '假期',
      'hiw.factor.holidays.desc': '法国公共假日（A区）、连休日及来自教育部的学校假期。',
      'hiw.factor.season': '季节性',
      'hiw.factor.season.desc': '里昂餐厅和场馆的行业季节性规律。旺季、淡季及其间的一切。',
      'hiw.factor.events': '本地活动',
      'hiw.factor.events.desc': '来自 ONLYLYON、Eurexpo、OL 和里昂市的已确认活动。重大活动可增加最多 +15。',
      'hiw.factor.proximity': '假期临近度',
      'hiw.factor.proximity.desc': '临近假期前后几天的需求会发生变化。学校假期前夕流量有所提升。',
      'hiw.formula.title': '计算公式',
      'hiw.formula.desc': '基础 50 + 天气（±15）+ 星期（±20）+ 假期（±10）+ 季节性（±12）+ 活动（+5–15）+ 临近度（±5）',
      'hiw.cta': '→ 查看 7 天预报',
      'hiw.modal.title': '评分代表什么？',
      'hiw.modal.sub': '结合6个因子的0–100每日需求指数。',
      'hiw.modal.factors_title': '6个评分因子',
      'hiw.modal.cta': '了解更多 →',

      // Admin page — navigation
      'admin.nav.forecast': '预报',
      'admin.nav.events': '活动',
      'admin.nav.admin': '管理',
      'admin.nav.logout': '退出登录',

      // Admin page — header
      'admin.page_title': 'VenueCast 管理 — 自定义因子',
      'admin.page_heading': '⚙️ 自定义评分因子',
      'admin.page_sub': '添加超本地化规则，对您场馆的需求评分进行加分或扣分。这些规则叠加在 6 个标准因子之上。',

      // Admin page — stats
      'admin.stat.total': '规则总数',
      'admin.stat.active': '已启用',
      'admin.stat.boost': '加分规则',
      'admin.stat.penalty': '扣分规则',

      // Admin page — toolbar
      'admin.btn.add_rule': '＋ 添加规则',
      'admin.filter.all': '全部',
      'admin.filter.active': '已启用',
      'admin.filter.inactive': '已停用',
      'admin.btn.refresh': '↻ 刷新',

      // Admin page — table headers
      'admin.table.name': '名称',
      'admin.table.condition': '条件',
      'admin.table.impact': '影响',
      'admin.table.tag': '标签',
      'admin.table.status': '状态',
      'admin.table.actions': '操作',

      // Admin page — CSV section
      'admin.csv.title': '📤 批量 CSV 导入',
      'admin.csv.sub1': '在下方粘贴 CSV 行。必填列：<code>name</code>、<code>condition_type</code>、<code>score_impact</code>。可选：<code>description</code>、<code>venue_tag</code>、<code>temp_min</code>、<code>temp_max</code>、<code>rain_max</code>、<code>rain_min</code>、<code>date_start</code>、<code>date_end</code>。',
      'admin.csv.sub2': '<strong>condition_type</strong> 可选值：<code>always</code> · <code>monday–sunday</code> · <code>weekday</code> · <code>weekend</code> · <code>sunny</code> · <code>rainy</code> · <code>cold</code> · <code>hot</code> · <code>date_range</code>',
      'admin.csv.btn_upload': '导入 CSV',
      'admin.csv.btn_clear': '清空',
      'admin.csv.btn_sample': '加载示例',

      // Admin page — condition reference table
      'admin.ref.title': '📖 条件参考',
      'admin.ref.th.type': '条件类型',
      'admin.ref.th.meaning': '含义',
      'admin.ref.th.filters': '额外筛选',
      'admin.ref.always': '每天适用',
      'admin.ref.dow': '指定星期',
      'admin.ref.weekday': '周一至周五',
      'admin.ref.weekend': '周六至周日',
      'admin.ref.sunny': '降雨 ≤ 2mm &amp; 气温 ≥ 15°C',
      'admin.ref.rainy': '降雨 ≥ 5mm',
      'admin.ref.cold': '平均气温 ≤ 5°C',
      'admin.ref.hot': '平均气温 ≥ 28°C',
      'admin.ref.date_range': '在 date_start 和 date_end 之间',
      'admin.ref.filters.none': '—',
      'admin.ref.filters.dow': 'temp_min, rain_max 等',
      'admin.ref.filters.sunny': '可覆盖 temp_min, rain_max',
      'admin.ref.filters.rainy': '可覆盖 rain_min',
      'admin.ref.filters.cold': '可覆盖 temp_max',
      'admin.ref.filters.hot': '可覆盖 temp_min',
      'admin.ref.filters.date_range': 'date_start, date_end (YYYY-MM-DD)',

      // Admin page — modal
      'admin.modal.add_title': '添加自定义因子',
      'admin.modal.edit_title': '编辑因子',

      // Admin page — form labels
      'admin.form.rule_name': '规则名称 *',
      'admin.form.score_impact': '评分影响 *',
      'admin.form.impact_hint': '正数 = 加分 · 负数 = 扣分',
      'admin.form.description': '描述',
      'admin.form.venue_tag': '场馆标签',
      'admin.form.status': '状态',
      'admin.form.conditions_title': '条件',
      'admin.form.conditions_hint': '（留空 = 始终适用）',
      'admin.form.day_of_week': '星期',
      'admin.form.date_from': '起始日期',
      'admin.form.date_to': '结束日期',
      'admin.form.temp_gte': '气温 ≥ (°C)',
      'admin.form.temp_lte': '气温 ≤ (°C)',
      'admin.form.rain_lte': '降雨 ≤ (mm)',
      'admin.form.rain_gte': '降雨 ≥ (mm)',

      // Admin page — buttons
      'admin.btn.cancel': '取消',
      'admin.btn.save_rule': '保存规则',

      // Admin page — day abbreviations
      'admin.day.0': '日',
      'admin.day.1': '一',
      'admin.day.2': '二',
      'admin.day.3': '三',
      'admin.day.4': '四',
      'admin.day.5': '五',
      'admin.day.6': '六',

      // Admin page — dynamic JS strings
      'admin.js.always': '始终',
      'admin.js.no_rules': '未找到规则。',
      'admin.js.add_first': '添加第一条规则',
      'admin.js.delete_confirm': function(name) { return '删除 "' + name + '"？\n\n此规则将被停用。'; },
      'admin.js.csv_empty': '无 CSV 内容',
      'admin.js.uploading': '导入中…',
      'admin.js.uploaded': function(n, errors) { var msg = '✓ 已插入 ' + n + ' 条规则。'; if (errors > 0) msg += ' ⚠️ ' + errors + ' 行有错误。'; return msg; },
      'admin.js.load_fail': '加载因子失败：',
      'admin.js.update_fail': '更新失败：',
      'admin.js.delete_fail': '删除失败：',
      'admin.js.upload_fail': '导入失败：',
      'admin.js.err_name': '名称为必填项',
      'admin.js.err_impact': '评分影响必须为数字',

      // — 订阅者 —
      'admin.tab.factors': '⚙️ 规则',
      'admin.tab.subscribers': '👥  订阅者',
      'admin.sub.stat.total': '总订阅者',
      'admin.sub.stat.active': '活跃',
      'admin.sub.stat.unsub': '已退订',
      'admin.sub.table.email': '邮箱',
      'admin.sub.table.city': '城市',
      'admin.sub.table.language': '语言',
      'admin.sub.table.date': '订阅日期',
      'admin.sub.table.status': '状态',
      'admin.sub.table.unsub_date': '退订日期',
      'admin.sub.status.active': '活跃',
      'admin.sub.status.unsub': '已退订',
      'admin.sub.js.no_subs': '暂无订阅者。',
      'admin.sub.js.load_fail': '加载订阅者失败：',

      // Venue admin page — Chalet du Parc
      'vadmin.page_title': 'Chalet du Parc — 场地活动管理',
      'vadmin.page_heading': '🎪 Chalet du Parc — 场地专属活动',
      'vadmin.page_sub': '管理直接影响需求预测分数的场地专属活动。这些活动叠加在城市活动和评分因素之上。',
      'vadmin.nav.venue_profile': '场地简介',
      'vadmin.nav.admin': '活动管理',
      'vadmin.nav.scoring_factors': '评分因素',
      'vadmin.stat.total': '总活动数',
      'vadmin.stat.active': '激活中',
      'vadmin.stat.upcoming': '即将到来',
      'vadmin.stat.high_impact': '高影响',
      'vadmin.btn.add_event': '＋ 添加活动',
      'vadmin.btn.back_to_venue': '查看预测',
      'vadmin.btn.save_event': '保存活动',
      'vadmin.btn.update_event': '更新活动',
      'vadmin.table.name': '活动名称',
      'vadmin.table.dates': '日期',
      'vadmin.table.impact': '影响',
      'vadmin.table.description': '描述',
      'vadmin.table.status': '状态',
      'vadmin.impact.low': '低 +2',
      'vadmin.impact.medium': '中 +5',
      'vadmin.impact.high': '高 +10',
      'vadmin.impact.very_high': '非常高 +15',
      'vadmin.modal.add_title': '添加场地活动',
      'vadmin.modal.edit_title': '编辑场地活动',
      'vadmin.form.name': '活动名称 *',
      'vadmin.form.start_date': '开始日期 *',
      'vadmin.form.end_date': '结束日期 *',
      'vadmin.form.end_date_hint': '单日活动与开始日期相同',
      'vadmin.form.impact_level': '影响级别 *',
      'vadmin.form.impact.low': '低（+2分）',
      'vadmin.form.impact.medium': '中（+5分）',
      'vadmin.form.impact.high': '高（+10分）',
      'vadmin.form.impact.very_high': '非常高（+15分）',
      'vadmin.form.description': '描述',
      'vadmin.form.source': '来源（可选）',
      'vadmin.help.title': '💡 场地活动如何生效',
      'vadmin.help.body': '场地活动在其日期范围内叠加到基础预测分数上。高影响活动可为场地需求分增加+10分。同一天的多个活动可叠加。示例：周日爵士早午餐、私人晚宴、公园节、露天音乐会。',
      'vadmin.js.loading': '加载中…',
      'vadmin.js.no_events': '未找到活动。',
      'vadmin.js.active': '激活',
      'vadmin.js.inactive': '未激活',
      'vadmin.js.edit': '编辑',
      'vadmin.js.delete': '删除',
      'vadmin.js.load_fail': '加载失败：',
      'vadmin.js.save_fail': '保存失败：',
      'vadmin.js.delete_fail': '删除失败：',
      'vadmin.js.err_name': '活动名称为必填项',
      'vadmin.js.err_start_date': '开始日期为必填项',
      'vadmin.js.err_end_date': '结束日期为必填项',
      'vadmin.js.err_date_order': '开始日期必须早于或等于结束日期',
      'vadmin.js.delete_confirm': function(name) { return '停用"' + name + '"？\n\n该活动将从预测中隐藏。'; },
    }
  };

  // ─── Core API ─────────────────────────────────────────────────────────────

  function getLang() {
    var saved = localStorage.getItem('vc_lang');
    return (saved && LANGS.indexOf(saved) !== -1) ? saved : 'en';
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) return;
    localStorage.setItem('vc_lang', lang);
    global.dispatchEvent(new CustomEvent('vc:langchange', { detail: { lang: lang } }));
    applyTranslations();
  }

  function t(key) {
    var lang = getLang();
    var dict = T[lang] || T['en'];
    var val = dict[key];
    if (val === undefined) val = (T['en'] || {})[key];
    if (val === undefined) return key;
    if (typeof val === 'function') {
      var args = Array.prototype.slice.call(arguments, 1);
      return val.apply(null, args);
    }
    return val;
  }

  function getDateLocale() {
    return DATE_LOCALES[getLang()] || 'en-GB';
  }

  // Apply translations to elements with data-i18n attributes
  function applyTranslations() {
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (el.getAttribute('data-i18n-html') === 'true') {
        el.innerHTML = val;
      } else if (el.tagName === 'INPUT' && el.getAttribute('data-i18n-placeholder')) {
        el.placeholder = val;
      } else {
        el.innerHTML = val;
      }
    }
    // Update placeholder inputs separately
    var inputs = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < inputs.length; j++) {
      var inp = inputs[j];
      inp.placeholder = t(inp.getAttribute('data-i18n-placeholder'));
    }
    // Update document title if data-i18n-title is set on html element
    var titleKey = document.documentElement.getAttribute('data-i18n-title');
    if (titleKey) document.title = t(titleKey);
  }

  // ─── Language Selector UI ─────────────────────────────────────────────────

  var selectorStyles = [
    '.vc-lang-selector { position: relative; display: inline-block; }',
    '.vc-lang-btn { display: flex; align-items: center; gap: 0.3rem; padding: 0.35rem 0.7rem; border-radius: 20px; border: 1.5px solid var(--border, #e2ddd5); background: var(--card-bg, #fff); font-family: inherit; font-size: 0.8rem; font-weight: 600; cursor: pointer; color: var(--ink, #0d1117); transition: border-color 0.15s; white-space: nowrap; }',
    '.vc-lang-btn:hover { border-color: var(--accent, #e85d26); }',
    '.vc-lang-dropdown { display: none; position: absolute; right: 0; top: calc(100% + 6px); background: #fff; border: 1.5px solid var(--border, #e2ddd5); border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.10); z-index: 999; min-width: 110px; overflow: hidden; }',
    '.vc-lang-selector.open .vc-lang-dropdown { display: block; }',
    '.vc-lang-option { display: flex; align-items: center; padding: 0.55rem 0.9rem; font-family: inherit; font-size: 0.82rem; font-weight: 500; cursor: pointer; color: var(--ink, #0d1117); transition: background 0.1s; border: none; background: none; width: 100%; text-align: left; gap: 0.4rem; }',
    '.vc-lang-option:hover { background: var(--paper, #f8f6f1); }',
    '.vc-lang-option.active { font-weight: 700; color: var(--accent, #e85d26); }',
  ].join('\n');

  function injectSelectorStyles() {
    if (document.getElementById('vc-lang-styles')) return;
    var style = document.createElement('style');
    style.id = 'vc-lang-styles';
    style.textContent = selectorStyles;
    document.head.appendChild(style);
  }

  function renderLangSelector(containerId) {
    injectSelectorStyles();
    var container = document.getElementById(containerId);
    if (!container) return;

    var currentLang = getLang();
    var wrapper = document.createElement('div');
    wrapper.className = 'vc-lang-selector';
    wrapper.id = 'vc-lang-selector';

    var btn = document.createElement('button');
    btn.className = 'vc-lang-btn';
    btn.setAttribute('aria-label', 'Select language');
    btn.innerHTML = LANG_LABELS[currentLang] + ' ▾';

    var dropdown = document.createElement('div');
    dropdown.className = 'vc-lang-dropdown';

    LANGS.forEach(function(lang) {
      var opt = document.createElement('button');
      opt.className = 'vc-lang-option' + (lang === currentLang ? ' active' : '');
      opt.textContent = LANG_LABELS[lang].replace('🇬🇧', '').replace('🇫🇷', '').replace('🇪🇸', '').replace('🇨🇳', '').trim();
      opt.innerHTML = LANG_LABELS[lang];
      opt.addEventListener('click', function() {
        setLang(lang);
        // Update button label
        btn.innerHTML = LANG_LABELS[lang] + ' ▾';
        // Update active state
        dropdown.querySelectorAll('.vc-lang-option').forEach(function(o) {
          o.classList.toggle('active', o === opt);
        });
        wrapper.classList.remove('open');
      });
      dropdown.appendChild(opt);
    });

    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      wrapper.classList.toggle('open');
    });

    document.addEventListener('click', function() {
      wrapper.classList.remove('open');
    });

    wrapper.appendChild(btn);
    wrapper.appendChild(dropdown);
    container.appendChild(wrapper);
  }

  // ─── Public API ───────────────────────────────────────────────────────────
  global.VC = global.VC || {};
  global.VC.i18n = {
    t: t,
    getLang: getLang,
    setLang: setLang,
    getDateLocale: getDateLocale,
    applyTranslations: applyTranslations,
    renderLangSelector: renderLangSelector,
  };

  // Convenience globals
  global.t = t;
  global.getLang = getLang;
  global.setLang = setLang;
  global.getDateLocale = getDateLocale;

})(window);
