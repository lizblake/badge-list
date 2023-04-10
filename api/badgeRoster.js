export default async function handler(req, res) {
    const search = req.query.search || '';
    var allBadges = [
        {
            "badgeTitle": "Amazon Cognito",
            "badgeIcon": "open-in-browser",
            "badgeIconColor": "purple",
            "badgeDescription": "Temporary description"
        },
        {
            "badgeTitle": "Amazon I AM",
            "badgeIcon": "communication:vpn-key",
            "badgeIconColor": "green",
            "badgeDescription": "Temporary description"
        },
        {
            "badgeTitle": "Signing up for AWS Web Services",
            "badgeIcon": "device:settings-system-daydream",
            "badgeIconColor": "orange",
            "badgeDescription": "Temporary description"
        },
        {
            "badgeTitle": "AWS-LAMBDA Phase 1",
            "badgeIcon": "hardware:device-hub",
            "badgeIconColor": "orange",
            "badgeDescription": "Temporary description"
        },
        {
            "badgeTitle": "Amazon S3 Phase 1",
            "badgeIcon": "move-to-inbox",
            "badgeIconColor": "red",
            "badgeDescription": "Temporary description"
        }
    ];
    allBadges.map((badge) => {
        badge.index = badge.badgeTitle.toLowerCase() + " " + badge.badgeDescription.toLowerCase();
    })
    allBadges = allBadges.filter((badge) => {
        return badge.index.indexOf(search.toLowerCase()) > -1;
      });

    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(allBadges);
  }