
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ballcourts').del()
    .then(function () {
      // Inserts seed entries
      return knex('ballcourts').insert([
        {name: 'Green Valley Ranch Recreation Center', address: '4890 Argonne Way', city:'Denver', state: 'CO', number: '(720) 865-4370', hours: '', image: '', zipcode: 80249},
        {name: 'Montbello Recreation Center', address: '15555 E. 53rd Ave', city: 'Denver', state: 'CO', number: '(720) 865-0580', hours: '', image: '', zipcode: 80239},
        {name: 'Central Park Recreation Center', address: '9651 M.L.K. Jr. Blvd', city:'Denver', state: 'CO', number: '(720) 865-0750', hours: '', image: '', zipcode: 80238},
        {name: 'Montclair Recreation Center', address: '729 Ulster Way', city:'Denver', state: 'CO', number: '(720) 865-0560', hours: '', image: '', zipcode: 80230},
        {name: 'Hiawatha Davis Jr Recreation Center', address: '3334 Holly St', city:'Denver', state: 'CO', number: '(720) 865-0590', hours: '', image: '', zipcode: 80207},
        {name: 'Swansea Recreation Center', address: '2650 E 49th Ave', city:'Denver', state: 'CO', number: '(720) 865-0540', hours: '', image: '', zipcode: 80216},
        {name: 'St. Charles Recreation Center', address: '3777 N Lafayette St', city:'Denver', state: 'CO', number: '(303) 295-4462', hours: '', image: '', zipcode: 80205},
        {name: 'Martin Luther King Jr. Recreation Center', address: '3880 Newport St', city:'Denver', state: 'CO', number: '(720) 865-0530', hours: '', image: '', zipcode: 80207},
        {name: 'Washington Park Recreation Center', address: '701 S Franklin St', city:'Denver', state: 'CO', number: '(720) 865-3400', hours: '', image: '', zipcode: 80209},
        {name: 'La Familia Recreation Center', address: '65 S Elati St', city:'Denver', state: 'CO', number: '(720) 865-2170', hours: '', image: '', zipcode: 80223},
        {name: 'Eisenhower Recreation Center', address: '4300 E Dartmouth Ave', city:'Denver', state: 'CO', number: '(720) 865-0730', hours: '', image: '', zipcode: 80222},
        {name: 'Stapleton Recreation Center', address: '5090 Broadway', city:'Denver', state: 'CO', number: '(720) 865-2150', hours: '', image: '', zipcode: 80216},
        {name: 'Scheitler Recreation Center', address: '5031 W 46th Ave', city:'Denver', state: 'CO', number: '(720) 865-0640', hours: '', image: '', zipcode: 80212},
        {name: 'La Alma Recreation Center', address: '1325 W 11th Ave', city:'Denver', state: 'CO', number: '(720) 865-2200', hours: '', image: '', zipcode: 80204},
        {name: 'Rude Recreation Center', address: '2855 W Holden Pl', city:'Denver', state: 'CO', number: '(720) 865-0570', hours: '', image: '', zipcode: 80204},
        {name: 'Athmar Recreation Center', address: '2680 W Mexico Ave', city:'Denver', state: 'CO', number: '(303) 937-4600', hours: '', image: '', zipcode: 80219},
        {name: 'Ashland Recreation Center', address: '2475 W Dunkeld Pl', city:'Denver', state: 'CO', number: '(720) 865-0510', hours: '', image: '', zipcode: 80211},
        {name: 'Aztlan Recreation Center', address: '4435 Navajo St', city:'Denver', state: 'CO', number: '(303) 458-4899', hours: '', image: '', zipcode: 80211},
        {name: 'Harvey Park Recreation Center', address: '2120 S Tennyson Way', city:'Denver', state: 'CO', number: '(720) 865-0550', hours: '', image: '', zipcode: 80219},
        {name: 'Highlands Ranch Recreation Center at Eastridge', address: '9568 S University Blvd', city:'Highlands Ranch', state: 'CO', number: '(303) 791-2500', hours: '', image: '', zipcode: 80126},
        {name: '24 Hour Fitness', address: '512 S Chambers Rd', city:'Aurora', state: 'CO', number: '(303) 481-1289', hours: '', image: '', zipcode: 80017},
        {name: '24 Hour Fitness', address: '7600 E Academy Blvd', city:'Denver', state: 'CO', number: '(303) 343-1049', hours: '', image: '', zipcode: 80230},
        {name: '24 Hour Fitness', address: '720 S Colorado Blvd', city:'Denver', state: 'CO', number: '(303) 782-9424', hours: '', image: '', zipcode: 80246},
        {name: '24 Hour Fitness', address: '4120 E Alameda Ave', city:'Denver', state: 'CO', number: '(303) 377-4424', hours: '', image: '', zipcode: 80249},
        {name: '24 Hour Fitness', address: '2770 S Colorado Blvd', city:'Denver', state: 'CO', number: '(303) 757-3224', hours: '', image: '', zipcode: 80222},
      ]);
    });
};
