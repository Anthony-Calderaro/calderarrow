---
title: "How much does this meeting cost?"
date: 20230701
categories: ["business", "management"]
wordCount: 3000
wip: true
---

## Intro (heuristic)

There's a nifty heuristic I use to convert between an annual salary and hourly wage. To find an hourly wage from the salary, drop three zeros from the salary, and cut it in half. For instance: $50,000 salary -> drop 3 zeros => $50 -> cut in half => $25 per hour. Reverse the process to find the annual salary: $15 per hour -> double => $30 -> add 3 zeros => $30,000.

This works because it assumes that both workers work a typical full-time schedule of 40 hours per week over a 5 day work week. 52 weeks in a year, less 2 for [federal holidays](https://en.wikipedia.org/wiki/Federal_holidays_in_the_United_States) gives us 50 weeks. 50 weeks multiplied by 40 hours per week is 2,000 working-hours per year. And since 2,000 is the same as 1000 \* 2, the heuristic works by doubling an hourly wage (multiplying it by 2), and adding 3 zeros (multiplying it by 1,000).

What's the annual salary of someone making $27 per hour? About $54k. What's the hourly rate of someone earning $650k per year? About $325.

I find that thinking about activities in terms of hourly cost is a convenient way of making decisions. When I started out working as a public accountant, I earned about $60k per year, or $30 per hour. Everything I did became a cost-per-hour comparison. Two overpriced cocktails cost an hour of work. A new phone cost a full week. Thinking in time was easier to wrap my ahead around, and made it easier for me to determine whether something was truly worth it.

## How much does this meeting cost

This becomes quite scary in meetings with more than a few people. Think of a 30-minute meeting with 7 people, where only 2 are really interacting. Even in an ideal situation where the other 5 are keeping productive by multi-tasking, they're not operating as efficiently due to the constant context switching. In a worse-case scenario, they're sitting idle, not doing anything for the business.

The next time you're in such a situation, consider how much that meeting is costing the company. Start with your salary, and add 20% to account for the overhead and profit that the company needs to pay for you as an employee, and then apply that to your colleagues. An employee making $60k is earning $30 per hour, plus an additional 20% is $36, but the keep the math easy we'll round down to $35 per hour. A 30-minute meeting with 7 people costing the business $35 per hour means that it costs about $250 per hour to run that meeting, or $125 for that 30 minutes. If the participants didn't receive more than $125 worth of value from that meeting, then it was a waste of money.

## Wasting Away at Scale

Throwing $125 away once in a while isn't that big of a deal, but if that is a recurring meeting, like a daily status meeting or standup report, that racks up rather quickly. 50 work weeks per year, with 5 work days per week means that team is spending just over $30k to have that meeting. Is that team getting $30k worth of value from it? That's the questions upper management should be asking. But if they're asking middle managers, they're asking the right question to the wrong person.

The correct people to ask are the ones being asked to attend the meeting. How much time were u spent working on other things unrelated to the meeting? 5 minutes? 5%? The second question, which is more important, is could you have gotten more value out of not attending the meeting than you did attending. CAlendar apps could add these 2 questions in a feedback form sent out after every meeting, or perhaps added along with the notes. At the end of the quarter, management can asses how effectively their teams were managed.

## Define a meeting

Meetings are coordinating exercises.
Meetings are non-productive. They are coordinating exercises in planning or allocating work to actually be done. Whether it's a sales pitch, a contract negotiation, or standup report, the value of the meeting is in the future work to be performed, not the work in that meeting. The presence of a single non-individual contributor strongly correlates with a "meeting". The correlation increases exponentially with every additional non-individual contributor.

## increasing the value

Few ways to increase value: Scarcity, severity, cost of attendence. You may be willing to pay $1 for bottle of water in the grocery store, but if you're stranded in the desert, you may be willing to pay $10 for it.

similarly, the value of a meeting can be increased by increasing the importance. For instance, when troubleshooting a bug in production, or an emergency, the urgency and severity of the work increases, and therefore, the value of the meeting increases.

Consider increasing the value by reducing the cost of attending. Could participants leave after giving their update? Could they send you a daily email rather than attend a meeting, where you can then reach out with questions?

Finally, and most simply, is to increase the value of the meeting by increasing its scarcity: have it less often. Could that daily meeting be every other day? Every other week?

## Comapring

Once you've decided that it's worth it, u need to see better options. What value would have been provided if they were working rather than in that meeting? Did u actually need that meeting? Could it have been an email or a text? Could it have been a question u looped into another meeting you already planned to see that person?

# how to implement:

Rank Managers by how efficicent they are, measured by the fewest hours their team spends in meetings, and the amount of wasted tiem their team felt.
Every Qtr/month, count up the total number of hours a manager and team spent in meetings.

- Manager rates what % they felt was wasted
- ICs rate too, anonymously, for themselves and the team as a whole. aggregate together and compare
- Everyone should be within 10%.
  Beyond 10%, manager is being inefficient
  - Either inviting people who are wasting their time
  - or not properly communicating the value that's provided.
    - Convince the engineer, or move on.
- Risk is to see fewer hours in meetings = not doing anything = waste of a manager

If it becomes zero, maybe u can move them onto some other org, _don't fire your top managers_ To make a team self-managing is a godsend, pay them to take over for another manager.

## how to deal with fewer meetings?

False:
Meetings = synchronous, present
Writing = asynchronous, future.
True:
All communication is async. the only thing that changes is the interval. Speaking, it's a few seconds, writing, few minutes.

Core: Plan ahead and be patient.

1. Do i need an answer right this fucking minute. Quantify the value lost by every minute spent not knowing the answer. If u can't, you probably don't need the answer right now.
2. Do i need this person right now? If so, what answers do u need from them? If not, don't invite them, take notes, and send out a blurb at the end. Ask them to confirm with u that they understand, so u have close-looped confirmation.
