---
title: 'Becoming a Developer'
date: 202106
categories: ['software', 'career']
wordCount: 1000
wip: false
---

# Becoming a Developer.

<!-- I went back to school to learn software development, although it wasn't school in the typical sense. Having completed undergraduate and graduate school in an academic setting, referring to a 6 month coding bootcamp seems somewhat ... dishonest. This "programming program" was where I learned programming tools, technologies, and theory full time, 40-hours per week. After I finished my program, I was digging up some old notes and research I had done when I first started considering quitting my job and making this transition, and thought I’d compile them for posterity. -->

In the Fall of 2017, I was working as a public accountant in the Washington, DC area. I was not a top performer, but I felt that I was being underutilized and unchallenged. Most work was done at client sites over multiple weeks, and because of the back-and-forth nature of audits, there would almost always be a few hours of downtime each week. My daydreams would start out simply: what chores did I need to do, what am I going to do this weekend, but eventually they would drift towards figuring out different ways to [automate work](/writings/automate) that I had to do. Audit procedures involve a lot of menial, non-technical formatting, organizing, and comparing values across supporting documents. I had a hunch that it would be possible to automate most -- if not all -- of these tasks, so I sought out ways to leverage technology in my role.

I happened across the book [Automate the Boring Stuff With Python](https://automatetheboringstuff.com) which seemed particularly relevant to me, seeing as my job had a lot of boring stuff I wanted to automate. After skimming the table of contents, I found a few sections that would give me the tools needed to automate common tasks I was responsible for performing. I worked my way through the book and eventually wrote a Python program that would check for new accounting updates or guidelines on a public website, which I was legally required to do for each of my clients. The program returned `true` or `false` depending on whether there was an update, saved the page as a PDF, added a text-box with some boilerplate documentation, then moved it to my client working papers. This process usually took me about 3 minutes to do manually, but it was the simplest task I had to do which was completely uninvolved -- it required no thought. Boring work for a human, but ideal for a computer.

The first time I ran the script, I stood up to go get coffee, thinking it may take a minute or so to run. When I got back, it had finished, and saw that it took about 17 seconds to complete. From a cost perspective, it [wasn’t that effective](https://xkcd.com/1205/), since this would end up saving me no more than an hour each year, but it filled me with a sense of excitement, because I had just automated over *90%* of a task. Nominally, it was an insignificant amount of time, but imagine if I could automate 90% of my entire job. 

I was hooked.

<br>

### Web Development

I liked Python because I could interact with my entire computer, regardless of the application, but I wanted to work on financial software which could be accessed from the browser directly. I started using my downtime to learn web development with sites like [Codecademy](https://www.codecademy.com/) and [W3Schools](https://www.w3schools.com/). I remember making flashcards of all the HTML tags, not knowing that 99% of web development is just placing everything in a `<div>` tag. 

Eventually, I started building out webpages and wanting to interact with them. I didn't know how to use Python in the browser, but I had heard about this JavaScript thing, and then I read about Lisp, and Ruby, and Go and started to think that software development was a lot more like learning a foreign language. I had studied Spanish for about a decade -- and took a couple years of Japanese too for a couple of years in highschool -- but never achieved fluency, and I mostly attributed this to having never fully immersed myself in an environment where I was forced to speak Spanish most of the time. I didn't want to make the same mistake with learning a software language.

<br>

### Back to School

I decided I would need formal instruction, especially as a way to expedite my transition. Most of the languages I had heard of were described as `general purpose`, so I looked through the job postings of financial companies I was interested in working with, and it seemed like the 4 main languages used were JavaScript, Python, C++, and Java. I began looking into graduate programs since I was already familiar with them having gotten my Master’s in Accounting. The programs in my area were 2+ years long, about 15 credit hours per semester, and cost anywhere from $30k-50k per year in tuition.
I asked a few of the admissions directors if I could take courses during the summer or take a bigger workload to accelerate the program – I was willing to quit work and take 30-40 credit hours per semester so I could devote 100% of my time to it. I wanted to become fluent, and I was concerned that I wouldn’t achieve fluency if I did it part time. I studied 10 years of Spanish and 3 years of Japanese, so I was familiar with the process of learning new languages and I didn’t want to underestimate learning a language that I would use professionally.

# quitting, 6 weeks of notice.

# Choosing a Program
1. deciding on languages
2. Picking a bootcamp v university
3. minimize financial exposure and maximize financial upside

# The program
40 hours, intense. condensing university studies into full time work. or at the very least, this felt more similar to the college experiencem y engineering friends had endured.

finished mid-end of september, started work in october. I was making almost 30% more than i was making as an accountant.


I thought I’d be able to leverage my background most effectively in developing financial technology. 


Another consideration was job opportunities, and I was specifically looking for programs with some sort of money back guarantee, which none of the universities offered in my area. If I was taking 2 years off from work, that would mean at least 100k in forgone wages, plus the tuition, meaning this was a $200k+ decision and I had all of the risk exposure. For that much money, I wanted more assurance that I would get professional training for a professional job.
I figured an academic semester is about 20 weeks plus/minus a few days for exams, vacations and holidays. 20 weeks per semester, with 2 semesters per year for a 2 year program, meant a Masters would be about 80 weeks worth of content. 15 hours per week over 80 weeks comes out to about 1200 hours. This doesn’t take into account labs and research, but if I wanted to commit to learning 40-50 hours per week, the fastest I could reasonably go through the material would be about 25-30 weeks.
At the time, my roommate was enrolled in a 16 week program called Thinkful, which only taught JavaScript, cost about $15k, and had a money back guarantee after 6 months of job searching. I sat in on a class and felt like it was a good option, so I started exploring similar programs to find one that met the following criteria:
1. Consisted of ~30 weeks of full-time study (~1200 hours)
2. Taught at least 2 of the following languages: JavaScript, Java, Python, C++ 3. Incorporated some sort of money-back guarantee.
I read about Lambda School on Hacker News when they first launched in August 2017. At the time, the program was 22 weeks long, taught JavaScript, and C++, but most importantly cost nothing up front, and payments only began once I got a job. That was the closest program I found to meeting all 3 of my criteria so I signed up. In the best case scenario, I would get a developer role making more money than I was currently making, and in the worst case scenario, I took a 6 month break from work to learn something new which would me a better accountant and cost nothing other than my time.
I was accepted into Lambda School the week of Thanksgiving 2017, and had signed up to start with their January Cohort. Mid-December, I received a promotion at my job, so I asked to push my start date until mid-March so I could train the new hires and transition my projects in time for the busy season.
Before I began, I was reading about some of the criticisms of Lambda, mainly that if I did get a job in tech, the cost of the program was usually 2-3x that of other bootcamps, because Lambda would take a percentage of my gross income each month, but only while I was working. In essence, paying for Lambda School included not just tuition, but employment insurance. They had 100% of the financial risk exposure in teaching me programming and helping me find a job in a technical role. And since there are no obligations to take the first job offered, I could have gone back to public accounting and gotten my entire education for free. I also didn’t need to put money down or jump through hoops to get financing, loans, or scholarships. This offered tremendous peace of mind, and since Lambda School only got paid if I did, I was okay paying a premium if it meant a higher probability of success, the flexibility to be selective with my career, and greater financial liquidity. Short of offering to pay for my rent during the program, there wasn’t anything else Lambda School could have offered.

Being an accountant, I also checked to see if this made financial sense. As a 25 year old, I had another 40 years to work in software development. If I earned 3% more in salary, i’d be ahead of what I was currently earning over the lifetime of my career. I checked a few sites to see what the median salary was in software development, and compared with public accountants, there was a 15-20% premium for developers. When looking at developers in financial technology companies, the premium was even larger. So when I was given an opportunity to get a risk-free education, learn innovative solutions to solve interesting problems, and eventually get compensated for solving more challenging problems, how could I not take it?