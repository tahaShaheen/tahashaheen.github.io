---
layout: page
title: Critical Pitfall in Reward Learning from Human Feedback
description: On how dynamics misconceptions impact human feedback
img: assets/img/projects/work/2026_ijcai_reward_learning/elfie.png
importance: 0
category: work
display: true
related_publications: true
permalink: /projects/critical_pitfall_reward_learning
buttons:
  - text: "Read Paper"
    url: "https://ijcai-preprints.s3.us-west-1.amazonaws.com/2026/2656.pdf"
  - text: "View Poster"
    url: "/assets/pdf/projects/work/2026_ijcai_reward_learning/ijcai26_poster.pdf"
  - text: "Download Presentation"
    url: "/assets/pdf/projects/work/2026_ijcai_reward_learning/ijcai26_presentation.pptx"
  - text: "Experience the Study Games"
    url: "https://elfie-cliff-walking.onrender.com/"
  - text: "Code and Data"
    url: "https://github.com/tahaShaheen/elfie-cliff-walking"
---

Writing a reward function in reinforcement learning is notoriously difficult. You may know what behaviour you want, but once that idea becomes a scalar objective to maximize, an agent can maximize it in ways you did not intend. Ask for cups of coffee, and a poorly specified reward might make stealing coffee look like a good strategy.

Reward learning from human feedback offers a better route. Instead of hand-writing the reward, the agent produces behaviour or plans, and a human provides feedback that the agent uses to update its reward model {% cite KaufmannASurveyOfReinforcementLearningFromHumanFeedback2023 %}. That feedback can take many forms, including expert demonstrations {% cite NgAlgorithmsForInverseReinforcementLearning2000 %}, pairwise preferences {% cite ChristianoDeepReinforcementLearningFromHumanPreferences2017 %}, or corrective interventions {% cite BajcsyLearningRobotObjectives2017 %}.

But there is another variable: the human's understanding of how the environment works. Since, the agent's only signal from the human is the feedback signal, if the feedback provider misunderstands the environment dynamics, their feedback can reflect that misunderstanding. If a human does not know that the ground is slippery, but pushes the agent toward the quickest route, the learner may infer that risky slipping behaviour is desired. If a human does not know that stealing coffee is possible, but repeatedly encourages quick coffee delivery, a reward learner may incorrectly treat stealing as part of the reward it must maximize for. 

In {% cite shaheen2026criticalpitfall %}, we empirically test whether this effect exists. We explore if human feedback in reward learning reflects not only latent reward, or it also involves dynamics understanding. 

#### Why This Matters

Most reward-learning methods assume that the learner and the feedback provider share the same dynamics model. Under that assumption, feedback is treated as pure evidence about the human's reward. Our concern is that this assumption can be false. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/work/2026_ijcai_reward_learning/T_traditional.png" title="Traditional reward learning view" class="img-fluid rounded z-depth-1" caption="The standard view: feedback is interpreted as evidence about the human's latent reward under the learner's perfect understanding of environment dynamics."%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/work/2026_ijcai_reward_learning/T_correct_2.png" title="Mismatched dynamics view" class="img-fluid rounded z-depth-1" caption="Our view: feedback is a confounded signal shaped by both reward and the human's dynamics understanding."%}
    </div>
</div>

#### Research Question

The question we studied: **Does a perturbed understanding of domain dynamics impact human feedback?**

Answering it required an experiment that could separate reward from belief. We needed to initialize participants with one understanding of the domain dynamics, perturb that understanding, and then measure feedback without letting participants update their beliefs by watching the plan execute.

We tested three hypotheses:

- **H1:** Internal dynamics understanding mediates the relationship between instruction framing and feedback.
- **H2:** This mediation is robust to feedback modality and remains consistent across three feedback types.
- **H3:** This mediation is robust to visual priming and persists across two visual contexts.

#### The Study Game

We designed a randomized controlled trial with **211 participants**. To keep the task understandable, we used a set of simple planning games around Elfie the elf, with participants helping Elfie plan a route to a cookie without falling into holes. The world was a gridworld with holes, with the domain dynamics differences being what participants believed about the ground near the cliffs.
#### Experiment Flow

The study flow can roughly be divided into these steps:

1. **Prime:** expose participants to contrastive visuals, icy and grassy, then randomize them to one visual context.
2. **Manipulate:** use instruction framing to induce either a sense that Elfie was in danger of slipping or that Elfie was safe.
3. **Measure:** collect feedback while preventing participants from observing plan execution.

##### Prime

We first exposed participants to two visuals and then randomized them to either an icy, slippery visual context or a grassy, stable visual context. 

{% include figure.liquid path="assets/img/projects/work/2026_ijcai_reward_learning/visual_context_full.png" title="Visual contexts" class="img-fluid rounded z-depth-1" caption="Participants first formed an initial model from visual context: grassy/stable or icy/slippery."%}

##### Manipulate

We analyzed the experiment through a causal mediation framework. We test whether the instruction framing changed feedback through the participant's dynamics understanding, rather than through a direct change in what participants wanted Elfie to do. Then we used text instructions to update their belief about whether cliff-adjacent tiles were safe or dangerous. Only the participant's dynamics understanding was manipulated.The reward stayed consistent: reach the cookie and avoid holes. 

{% include figure.liquid path="assets/img/projects/work/2026_ijcai_reward_learning/instruction_manipulation.png" title="Instruction manipulation" class="img-fluid rounded z-depth-1" caption="Text instructions then framed the same cliff-adjacent paths as safe or dangerous."%}

##### Measurement and Feedback Types

Participants gave feedback in three different ways. This was important because a result limited to one interface might only be about that interface. Before the feedback tasks, participants were told that the games were about planning only. They would not watch Elfie execute the plan. This mattered because observing execution could have corrected their dynamics understanding during the measurement phase.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/work/2026_ijcai_reward_learning/correction_game.png" title="Correction game" class="img-fluid rounded z-depth-1" caption="Corrective intervention: participants edited Elfie's planned path."%}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/work/2026_ijcai_reward_learning/comparison_game.png" title="Comparison game" class="img-fluid rounded z-depth-1" caption="Pairwise preference: participants chose between two candidate plans."%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/work/2026_ijcai_reward_learning/off_game.png" title="Off intervention game" class="img-fluid rounded z-depth-1" caption="Off-button-style intervention: participants placed obstacles to stop and redirect Elfie."%}
    </div>
</div>

#### Results

The main result is: **perturbed dynamics understanding impacted feedback**.

First, the priming worked: participants formed different initial beliefs from the visual contexts. Second, the instruction manipulation worked: the safety framing shifted participants' understanding of whether Elfie was at risk of slipping. Finally, the shifted dynamics understanding predicted shifted feedback behaviour. This effect persisted across both visual contexts and all three feedback types.

<div class="row justify-content-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/work/2026_ijcai_reward_learning/paper_overview.jpg" title="Study overview and results" class="img-fluid rounded z-depth-1" caption="Overview of the paper's causal story: instructions changed dynamics understanding, and changed understanding shifted feedback."%}
    </div>
</div>

#### Takeaways

- If you do RLHF or reward learning from human feedback, consider the feedback provider's dynamics understanding.
- If the human and learner have mismatched environment models, reward learning may critically fail.
- Changing the feedback interface is not enough if the same misunderstanding impacts all feedback types.
- This study gives empirical support for RLHF methods that separate what people want from what people believe will happen.

#### Acknowledgements

This research was supported in part by NSF grant 2047186 and the 2025 ASU Graduate Student Government JumpStart Grant. The study was approved by the Arizona State University Institutional Review Board.
