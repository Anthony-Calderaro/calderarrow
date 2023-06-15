---
title: "Feature Toggles For Speed"
date: 20221101
categories: ["software"]
wordCount: 100
wip: true
---

XXX 2022

## Going Fast By Going Slow

If someone gave you a wide open road, the fastest car on the market, and a full tank of gas, how fast would you go? How much faster would you go if there were no speed limits? No other cars? No cops?

Now how fast would you go if that car didn't have brakes?

Being able to move fast is important, but only if you are able to stop.

The single most important thing first responders learn is to [stop the bleed](). I can give you oxygen or make an airway if you're not breathing. I can provide compressions to circulate your blood, but I can't pump blood that you don't have. If there's a serious, exsanguinating wound, that is the number one priority. In extreme cases, this can involve a tourniquette, which can cause other issues after a while.

## Code in the Wild

So what happens when we discover a bug in production? Fix it, of course, but what do we do in the meantime? Rollback to a prior version? What if you don't know which version was released with the bug? What if you could just stop the feature that's buggy? How do you stop the bug from doing more damage while you figure out a plan?

Feature Toggles stop the bug.

- Feature Toggles let u flip something on/off.
  Key-value pairs have exceptionally high performance, as lookup values are O(1).

Updating a value in a database can be saved and deployed in seconds. Any key-value store or NoSQL database will suffice.

Value of feature toggle increases proportionally with your deployment pipeline. Linters, unit tests, E2E tests, vulnerability tests, increase proportionally with code. Therefore, the value of a feature toggle service increases with the size of your code base.

Just like unit tests, which provide more value the more often they are run, a toggle service provides more value as it is used. When you're moving fast and breaking things, that can be quite often.

## Premature optimization

- Not needed in small repos. XKCD says a rough estimate would be for a deployment that takes X minutes would justify a service that takes Y hours to develop. If you're not at that point, then you probably don't need an external service. That doesn't mean you can't start building out the infrastructure from day 1.

```
// constants.js
export const featureToggles = {
  isCoolFeatureEnabled: true,
  isNewFeatureEnabled: false,
  ...
}

// HomePage.js
import featureToggles from './constants.js';

const HomePage = () => {
  const { isCoolFeatureEnabled, isNewFeatureEnabled } = featureToggles;

  return (
    <div>
      {isCoolFeatureEnabled && <CoolFeature />}
      {isNewFeatureEnabled && <NewFeature />}
    </div>
  )
}
```

Once this service becomes a network call, the constants file can be copied over to the database, and the component updated to make a call rather than an import.

```
// HomePage.js
const HomePage = () => {
  const featureToggles = fetch(...).then(...);
  const { isCoolFeatureEnabled, isNewFeatureEnabled } = featureToggles;

  return (
    <div>
      {isCoolFeatureEnabled && <CoolFeature />}
      {isNewFeatureEnabled && <NewFeature />}
    </div>
  )
}
```

## Moving Fast Without Breaking Things

- Brakes and cars
- Deployment
