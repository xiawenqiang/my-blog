import{r as e,s as t,y as n}from"./index-Dp46v-Mx.js";var r=Object.defineProperty,i=(e,t)=>{let n={};for(var i in e)r(n,i,{get:e[i],enumerable:!0});return t||r(n,Symbol.toStringTag,{value:`Module`}),n},a=`---
title: AI 入门课程 · 详细教案（24 课时）
date: 2024-07-14
tags: [AI, 教程, 入门, 教案]
excerpt: 从零开始系统学习 AI，24 课时完整教案，涵盖基础概念、大语言模型原理、提示词工程及开发实战。
---

## 第一部分：AI 基础概念

---

### 第 1 课 · 什么是 AI

**教学目标**：建立 AI 的整体认知，理清基本概念，激发学习兴趣。

**核心内容**：

1. **开场讨论（5 分钟）**
   - 提问：你用过哪些 AI 产品？觉得它们"智能"在哪？
   - 播放一段 ChatGPT / Claude Code 的实际使用录屏

2. **AI 的定义（10 分钟）**
   - 经典定义：让机器具备感知、推理、学习、决策的能力
   - 关键区分：
     - **弱 AI（Narrow AI）**：只在特定领域表现出色，当前所有 AI 都是这一类
     - **强 AI（General AI）**：具备人类水平的通用智能，目前不存在
     - **AGI**：通用人工智能，是目前多家公司的终极目标
   - 一句话总结：AI 本质是一个"预测下一个最可能的结果"的数学函数

3. **AI 简史（10 分钟）**
   - 1950 图灵测试 — "机器能思考吗？"
   - 1956 达特茅斯会议 — AI 正式诞生
   - 1997 深蓝击败国际象棋冠军 — 规则系统巅峰
   - 2012 AlexNet — 深度学习爆发元年
   - 2017 Transformer 论文 — LLM 时代基石
   - 2022 ChatGPT — AI 走进大众生活
   - 要点：AI 不是突然出现的，经历了多次"寒冬"与"春天"

4. **AI 在我们身边（10 分钟）**
   - 手机面部解锁、语音助手、推荐算法、智能翻译、自动驾驶
   - 讨论：为什么感觉近几年 AI "突然变强了"？（算力 + 数据 + 算法三要素突破）

5. **本节小结与预习（5 分钟）**
   - 关键概念：弱 AI / 强 AI / AGI
   - 预习问题：AI 用什么方式来"思考"？下节课揭晓三大学派

---

### 第 2 课 · AI 的三大学派

**教学目标**：理解 AI 实现的三种核心思路，建立技术路线认知。

**核心内容**：

1. **符号主义 / 逻辑学派（15 分钟）**
   - 核心思想：智能 = 符号操作，用逻辑规则表示知识
   - 代表：专家系统（MYCIN 医疗诊断）、知识图谱
   - 优点：可解释、逻辑严密
   - 缺点：规则写不完、无法处理模糊情况、不擅长感知（看、听）
   - 类比：一本厚厚的"如果...那么..."手册

2. **连接主义 / 神经网络学派（15 分钟）**
   - 核心思想：模仿大脑神经元连接，从数据中自动学习模式
   - 代表：深度学习、CNN、Transformer、今天的 LLM
   - 优点：擅长模式识别、从数据中自动学习
   - 缺点：需要大量数据和算力、黑箱难以解释
   - 类比：教小孩认猫，不是逐条讲规则，而是给他看成千上万张图片

3. **行为主义 / 强化学习学派（5 分钟）**
   - 核心思想：通过奖励和惩罚让智能体自己找到最优策略
   - 代表：AlphaGo、机器人控制、游戏 AI
   - 类比：训狗 — 做对了给零食，做错了不给

4. **三者融合的现代 AI（5 分钟）**
   - 现代 AI 系统往往混合使用
   - 比如 Claude 等 LLM 本身是连接主义产物，但内部的推理链（Chain-of-Thought）带有符号主义色彩，RLHF 训练又融入了行为主义

---

### 第 3 课 · 机器学习基础

**教学目标**：掌握机器学习的核心概念和基本分类。

**核心内容**：

1. **什么是机器学习（10 分钟）**
   - 传统编程 vs 机器学习：
     - 传统：输入规则 + 数据 → 输出结果
     - ML：输入数据 + 结果 → 输出规则（模型）
   - 三要素：数据、模型、损失函数
   - 核心过程：喂数据 → 算误差 → 调参数 → 重复

2. **三大学习范式（15 分钟）**
   - **监督学习**：有标签数据，学映射关系
     - 分类（垃圾邮件识别）、回归（房价预测）
   - **无监督学习**：无标签，自己找结构
     - 聚类（用户分群）、降维（数据可视化）
   - **半监督学习 + 自监督学习**
     - 自监督是 LLM 的关键：把下一词预测变成"有监督"
     - 例子：GPT 的训练 —"吃"进去海量文本，任务是预测下一个词

3. **三个关键概念（10 分钟）**
   - **训练集 / 验证集 / 测试集**：学习、调试、验收
   - 类比：训练集 = 课本习题，验证集 = 月考（调整学习方法），测试集 = 高考（最终检验）
   - **过拟合**：死记硬背，举一反三能力差
   - **欠拟合**：没学到位，啥也不会

4. **动手演示（5 分钟）**
   - 展示一个简单的分类任务（比如用直觉判断一条评论是正评还是差评），然后引出"这就是模型在做的事"

---

### 第 4 课 · 深度学习与神经网络

**教学目标**：理解神经网络的直观原理和主要架构类型。

**核心内容**：

1. **从神经元到网络（15 分钟）**
   - 生物神经元类比：树突接收信号 → 细胞体处理 → 轴突输出
   - 一个神经元 = 加权求和 + 激活函数
   - 层 = 多个神经元并列
   - 网络 = 层叠层
   - 关键：隐藏层越多 = 学到的特征越抽象 = "深"度学习

2. **前向传播与反向传播（10 分钟）**
   - 前向：输入 → 层层计算 → 输出预测
   - 反向：比较预测和真实值 → 误差反向传递 → 更新每层参数
   - 类比：投篮 — 投出去（前向），看偏了多少（算误差），调整姿势（反向传播），再来一次
   - 这就是"训练"的本质：反复前向+反向，直到误差足够小

3. **三大经典架构（10 分钟）**
   - **CNN（卷积神经网络）**：擅长图像，理念是"局部特征检测"
   - **RNN（循环神经网络）**：擅长序列，像读句子一样逐个词处理
   - **Transformer**：当前王者，一次看全文，"注意力机制"决定关注哪
     - GPT 只用 Transformer 的解码器
     - BERT 只用 Transformer 的编码器

4. **为什么现在才爆发（5 分钟）**
   - 神经网络思想很早就有了（80 年代），但缺三样：算力（GPU）、数据（互联网）、更好的训练方法
   - 三者在 2010 年代同时到位

---

### 第 5 课 · 自然语言处理（NLP）入门

**教学目标**：了解 NLP 的核心任务和技术演进路线。

**核心内容**：

1. **NLP 的核心任务（10 分钟）**
   - 分类：情感分析、意图识别
   - 序列标注：命名实体识别（找人名、地名）、词性标注
   - 生成：文本摘要、机器翻译、对话
   - 理解：问答、推理、阅读理解
   - 互动：判断"今天天气不错"属于哪类任务？

2. **计算机如何"读"文字（15 分钟）**
   - 第一步：分词和 Tokenization
     - "我爱AI" → ["我", "爱", "AI"] 或 ["我", "爱", "A", "I"]
   - 第二步：词向量 / Embedding
     - 核心思想：意思相近的词，向量距离也近
     - 经典案例：king - man + woman ≈ queen
     - 现代 LLM 中的 Embedding：每个 token 映射成一个高维向量（几百到几千维）
   - 第三步：上下文编码
     - "这个模型跑起来很慢" vs "这个模特在 T 台上跑起来很美" — 同一个"模"字，不同含义
     - Transformer 的注意力机制解决的就是这个

3. **演进路线：从规则到 GPT（10 分钟）**
   - 规则时代（2000s 前）：手写词典和语法规则
   - 统计时代（2000s）：TF-IDF、N-gram
   - 词向量时代（2013）：Word2Vec、"国王减男人加女人等于女王"
   - 预训练时代（2018）：BERT、GPT-1 — "先学语言，再学任务"
   - 大模型时代（2020+）：GPT-3、Claude —"一个大模型，通吃所有 NLP 任务"

4. **关键认知（5 分钟）**
   - NLP 的范式转变：从"每个任务训一个模型"到"一个模型做所有事"
   - 这个转变是 LLM 能够爆发的根本原因

---

### 第 6 课 · 大语言模型（LLM）原理

**教学目标**：理解 LLM 的核心原理和训练流程。

**核心内容**：

1. **LLM "大"在哪里（10 分钟）**
   - 参数量大：GPT-3 有 1750 亿参数，Claude、GPT-4 更大
   - 训练数据量大：从互联网、书籍、代码中"看过"数万亿 token
   - 上下文窗口大：从早期的 2048 token 到现在的 200K+
   - 能力大：突现能力 — 模型大了之后才"学会"的能力
     - 比如思维链推理、代码编写、翻译，都不是专门训练的

2. **Token：LLM 的"文字"（10 分钟）**
   - Token ≠ 单词；Token ≈ 常见的字母/汉字组合
   - 举例："Claude is great" → ["Cl", "aude", " is", " great"]
   - "人工智能" → ["人工", "智能"] 或 ["人工智能"] 取决于分词器
   - 上下文窗口：一次"对话"中，模型能看到的 token 总数上限
   - token 越多 → 成本越高 → 所以要学会精简 prompt

3. **LLM 的训练三阶段（15 分钟）**
   - **阶段一：预训练（Pre-training）**
     - 任务：从海量文本中学习语言规律和世界知识
     - 具体做法：给它看一段文本，让它预测下一个 token
     - 成本：几千万美元算力起步
     - 产物：基座模型（Base Model）— "什么都知道，但不太会聊天"

   - **阶段二：监督微调（SFT）**
     - 任务：用高质量的"问答对"数据教模型如何"好好回答"
     - 人工标注员写的理想回答 → 模型模仿
     - 产物：对话模型 — "学会了聊天格式"

   - **阶段三：人类反馈强化学习（RLHF）**
     - 任务：让模型学会"说人话"、拒绝有害请求
     - 人工标注员给不同回答打分 → 训练一个奖励模型 → LLM 根据奖励自我优化
     - 产物：对齐后的模型 — "更安全、更有帮助、更诚实"

4. **一张图总结 LLM 的原理（5 分钟）**
   - 给定上文 → 计算下一个 token 的概率分布 → 选一个 → 再计算下一个
   - 这就是"自回归生成"
   - LLM 的本质：一个极其复杂的"下一个词预测器"，大到了"看起来什么都懂"

---

### 第 7 课 · Prompt 工程基础

**教学目标**：掌握有效的 Prompt 编写方法，建立 Prompt 思维。

**核心内容**：

1. **什么是 Prompt，为什么重要（5 分钟）**
   - Prompt = 你给 LLM 的输入
   - 同样的模型，好的 prompt vs 差的 prompt 差别巨大
   - LLM 不会"读心术"— 给什么指令，得到什么结果

2. **有效 Prompt 的核心要素（15 分钟）**
   - **角色设定**：你是一个资深的 Python 开发者
   - **任务描述**：帮我写一个函数，实现...
   - **约束条件**：只用标准库、加注释、返回 JSON 格式
   - **输出格式**：请用 Markdown 表格呈现
   - **示例（Few-shot）**：类似这样...（给 2-3 个例子）
   - 实操：分别用一个差的 prompt 和一个好的 prompt 让模型写代码，对比效果

3. **进阶技巧（10 分钟）**
   - **Chain-of-Thought（思维链）**：加上"让我们一步步思考"，让模型展示推理过程
   - **分步拆解**：把复杂任务拆成多轮对话，而不是一次提完
   - **反向提示**：告诉它"不要做什么"有时比"要做什么"更有效
   - **结构化输出**：要求"用 JSON 格式返回，字段包括 name、age、summary"

4. **常见误区（5 分钟）**
   - 指令太模糊：请写一篇文章（什么主题？读者是谁？多长？）
   - 一次塞太多：复杂任务请拆开问
   - 和模型"客气"有无影响：轻微影响，但控制长度更重要
   - 认为模型"懂"了：模型不"懂"，只是预测概率最高的输出

5. **动手练习（5 分钟）**
   - 学员自己写 prompt：让模型帮写一封请假邮件
   - 互相比较谁的 prompt 效果更好

---

### 第 8 课 · AI 的能力与边界

**教学目标**：客观认知 LLM 的真实能力，学会识别和应对其局限。

**核心内容**：

1. **LLM 擅长什么（10 分钟）**
   - 文本生成与改写（长文不擅长，中短篇很出色）
   - 代码编写与调试（标准场景极强）
   - 信息摘要与提炼（给材料然后"总结一下"）
   - 翻译（主流语言之间表现好）
   - 创意发散（头脑风暴、起名字、写文案）
   - 结构化输出（从非结构化文本提取字段）

2. **LLM 不擅长什么（15 分钟）**
   - **精确计算与数学推理**
     - 简单加减还行，多位乘除可能出错
     - 原因：LLM 不是计算器，是按概率"猜"答案
   - **实时事实与最新信息**
     - 知识截止于训练日期，不知道"今天发生的事"
     - 不给网址的话可能"编"信息
   - **长文本的一致性**
     - 写短篇小说没问题，写长篇小说可能前后矛盾
   - **真正的逻辑与因果推理**
     - 有时会给看似合理但经不起推敲的论证
   - **图像生成**（纯文本模型做不到，但多模态模型可以）

3. **幻觉（Hallucination）深度解读（10 分钟）**
   - 什么是幻觉：模型自信地说出错误信息
   - 为什么会幻觉：
     - 训练数据的矛盾（同一个问题网上有不同答案）
     - 概率驱动（某个词序列在训练中高频出现，但恰好是错的）
     - 缺乏真实世界的验证机制
   - 如何缓解：
     - 要求引用来源
     - 用搜索工具辅助（联网/知识库）
     - 关键信息二次确认
     - 降低 temperature 减少随机性
   - 幻觉不全是坏事 — 创意写作时恰好需要这种"编造"能力

4. **实用自查清单（5 分钟）**
   - ✅ 这个任务需要事实准确性吗？→ 要求引用/搜索
   - ✅ 这个任务需要数学精确性吗？→ 要求用代码执行验证
   - ✅ 答案看起来合理，但有验证方法吗？→ 永远验证关键结论

---

### 第 9 课 · AI 伦理与安全

**教学目标**：建立负责任使用 AI 的意识，了解主要风险和应对策略。

**核心内容**：

1. **偏见问题（10 分钟）**
   - 训练数据中的偏见会被模型学到并放大
   - 案例：招聘简历筛选对某些族裔名字打分偏低
   - 案例：翻译中的性别刻板印象（doctor → 他，nurse → 她）
   - 各公司（Anthropic、OpenAI 等）在积极缓解但尚未完美解决

2. **隐私与数据安全（10 分钟）**
   - 你在对话中输入的数据去哪了？
   - API 调用 vs 本地运行的区别
   - 企业使用注意事项：
     - 不要粘贴公司机密到公共 AI
     - 使用企业版 / API（有数据保护条款）
     - Claude Code 等本地工具的数据处理方式

3. **版权与知识产权（5 分钟）**
   - LLM 训练数据的版权争议
   - AI 生成内容的版权归属
   - 当前法律尚未完全明确，处于快速演变期

4. **AI 安全与对齐（10 分钟）**
   - **对齐问题（Alignment）**：如何确保 AI 的行为与人类价值观一致
   - Anthropic 的 Constitutional AI：让模型遵循一套"宪法"原则
   - 潜在的滥用风险：深度伪造、自动化诈骗、信息武器化
   - 个人安全意识：不教 AI 做坏事、警惕 AI 生成的可疑内容

5. **讨论：我们应该怎么做（5 分钟）**
   - 永远人工审核 AI 的关键输出
   - 不输入敏感个人信息
   - 批判性思维：对 AI 输出保持合理怀疑
   - 追问：如果 AI 给了一个你可能不会给的答案，停下来想一想

---

### 第 10 课 · AI 工具生态概览

**教学目标**：了解主流 AI 工具和产品，学会根据需求选择合适的工具。

**核心内容**：

1. **主流模型对比（15 分钟）**
   - **Claude（Anthropic）**
     - 特点：注重安全、长上下文、代码能力强、Claude Code
     - 适合：编程、长文档分析、需要安全合规的场景
   - **GPT / ChatGPT（OpenAI）**
     - 特点：生态最大、多模态（GPT-4o）、插件丰富
     - 适合：通用场景、创意写作、多模态任务
   - **Gemini（Google）**
     - 特点：与 Google 生态深度集成、多模态
     - 适合：搜索结合场景、Google Workspace 用户
   - **开源模型（Llama、Mistral、DeepSeek 等）**
     - 特点：可本地部署、数据不外传、可定制
     - 适合：企业私有化部署、有成本控制需求

2. **产品形态对比（10 分钟）**
   - **Chat 界面**（claude.ai、chatgpt.com）：零门槛、即开即用
   - **API**：开发者使用、按量付费、灵活性最高
   - **IDE 插件**（Claude Code、GitHub Copilot）：编程场景利器
   - **企业平台**（Claude for Work、ChatGPT Enterprise）：团队协作、权限管理

3. **如何选择 AI 工具（10 分钟）**
   - 场景一：写文章/邮件 → 任一 Chat 产品即可
   - 场景二：写代码 → Claude Code / GitHub Copilot
   - 场景三：分析长篇报告 → 选长上下文能力强者（Claude）
   - 场景四：企业内部使用 → API + 私有部署
   - 场景五：预算有限 → 开源模型 + 本地运行

4. **本课小结（5 分钟）**
   - 没有"最好"的模型，只有"最适合你的场景"的模型
   - 多体验、多对比、形成自己的判断
   - 预告：下节课开始，我们聚焦 Claude 实战

---

## 第二部分：Claude 实战使用

---

### 第 11 课 · Claude 初体验

**教学目标**：完成 Claude 的注册和基本使用，产出第一个有效对话。

**核心内容**：

1. **Claude 简介（5 分钟）**
   - Anthropic 公司背景与理念
   - Claude 系列模型的发展历程
   - Claude 的核心优势：长上下文、代码、安全、推理透明度

2. **注册与访问（10 分钟）**
   - claude.ai 注册流程
   - 免费版 vs Pro 版 vs Team 版
   - App 端安装（iOS / Android）
   - API 平台（console.anthropic.com）

3. **界面导览（10 分钟）**
   - 对话区、历史列表、设置
   - 模型选择（不同版本的差异）
   - 附件上传（图片、PDF、代码文件）
   - Projects 入口

4. **第一个对话（10 分钟）**
   - 简单问答：问天气、问知识
   - 追问与修正：模型答错了或不够好，如何纠正
   - 多轮对话：在一次会话中不断深化话题
   - 实操：每人完成一个 3 轮以上的对话任务

5. **布置课后作业（5 分钟）**
   - 任务：用 Claude 帮你完成一件实际的事（写邮件/改简历/学一个概念），下节课分享体验

---

### 第 12 课 · 高效对话技巧

**教学目标**：系统掌握与 Claude 高效沟通的方法论。

**核心内容**：

1. **写清楚指令的黄金法则（15 分钟）**
   - **CRISP 框架**：
     - **C**ontext（背景）：我是谁，在做什么，为什么需要帮助
     - **R**ole（角色）：让 Claude 扮演什么专家
     - **I**nstruction（指令）：具体要做什么
     - **S**tyle（风格）：输出的语气、格式、长度
     - **P**recision（精准）：约束条件和边界
   - 对比案例：模糊版 vs CRISP 版 prompt 的 Claude 回答差异

2. **提供有效上下文（10 分钟）**
   - 不是越多越好 — 信息要相关
   - 结构化上下文：用标题、列表组织背景信息
   - 示例对比：直接把 Excel 数据粘进去 vs 先描述数据结构再粘数据
   - 上传文件 vs 粘贴文本的取舍

3. **分步拆解复杂任务（10 分钟）**
   - 核心理念：一个复杂任务 = 多个简单任务的串联
   - 具体做法：
     - 第一轮：让 Claude 帮你理清思路、列出步骤
     - 第二轮：让 Claude 执行步骤 1
     - 第三轮：让 Claude 在步骤 1 的结果上执行步骤 2
     - 以此类推
   - 实操：用分步法让 Claude 帮你制定一份旅行计划

4. **常见对话问题排查（5 分钟）**
   - Claude 答非所问 → 指令不够清晰，重新组织
   - Claude 输出太长/太短 → 明确要求长度
   - Claude 来回兜圈子 → 换一种问法，提供更具体的约束
   - Claude 拒绝回答 → 可能是安全策略触发，换一种表述试试

---

### 第 13 课 · Claude Code 入门

**教学目标**：完成 Claude Code 的安装配置，掌握基本代码操作。

**核心内容**：

1. **Claude Code 是什么（5 分钟）**
   - Anthropic 推出的 AI 编程助手
   - 直接在终端中运行，可以读、写、搜索、执行代码
   - 与 GitHub Copilot 的区别：Copilot 是补全，Claude Code 是"代理"（Agent）
   - 核心能力：理解整个项目、跨文件操作、执行命令、自主完成复杂任务

2. **安装与环境配置（10 分钟）**
   - 安装步骤：\`npm install -g @anthropic-ai/claude-code\`
   - API Key 配置
   - 首次运行：\`claude\`
   - 基本设置：主题、模型选择、权限配置

3. **Claude Code 的核心工作模式（10 分钟）**
   - 给它一个任务描述 → 它自己探索代码库 → 制定方案 → 修改代码 → 验证
   - 与 Chat 版的关键区别：Claude Code 有行动力（Agentic），不是只能聊天
   - 演示：从零创建一个 CLI 工具项目

4. **第一个代码任务（15 分钟）**
   - 实操任务：用 Claude Code 修复一个 bug 或添加一个小功能
   - 观察 Claude Code 的行为：读文件、搜索、修改、验证
   - 学会如何给它有效反馈（不准、不对、换个方法）

---

### 第 14 课 · 用 Claude 辅助编程

**教学目标**：系统掌握用 Claude 进行各类编程任务的技巧。

**核心内容**：

1. **代码生成（15 分钟）**
   - 从需求描述到代码：你描述功能，Claude 写代码
   - 指定技术栈、风格、约束
   - 好的 prompt 示例：逐步骤描述功能，给出期望的输入输出
   - 实操：让 Claude 写一个 Python 爬虫脚本

2. **代码解释与学习（10 分钟）**
   - 贴一段不熟悉的代码 → "逐行解释这段代码在做什么"
   - 学习新技术栈的最佳方式：让 Claude 一边写代码一边讲解
   - 实操：找一段开源代码，让 Claude 帮你读懂

3. **调试与排错（10 分钟）**
   - 贴错误日志 + 相关代码 → "这个错误是什么原因？怎么修？"
   - Claude Code 的调试优势：它能主动读完整上下文、运行诊断命令
   - 技巧：不要只贴一行报错，把触发错误的步骤也说出来

4. **代码审查与重构（5 分钟）**
   - 贴代码 → "这段代码有哪些问题？如何改进？"
   - 从可读性、性能、安全性多维度审查
   - Claude Code 的 \`/code-review\` 命令

---

### 第 15 课 · 文档与内容创作

**教学目标**：掌握用 Claude 进行各类文字创作和文档处理的方法。

**核心内容**：

1. **结构化写作（15 分钟）**
   - 文章/报告：从大纲到全文，分步生成
   - 邮件：场景 → 收件人 → 要点 → 语气 → 成文
   - 技术文档：API 文档、README、用户手册
   - 实操：让 Claude 生成一份汇报 PPT 大纲（明天要给老板）

2. **翻译与润色（10 分钟）**
   - 翻译最佳实践：给上下文 + 指定领域术语
   - 中英互译的常见坑
   - 润色：让 Claude 帮你把"写得不好"改"写得好"
   - 指定风格：正式、口语化、幽默、学术

3. **长文档处理（10 分钟）**
   - 摘要：3 万字的报告 → 300 字核心要点
   - 提取关键信息：从合同/政策文件中找重点条款
   - 对比分析：两份文档的异同
   - Claude 的长上下文优势：一次可处理整本书

4. **常见误区（5 分钟）**
   - AI 生成内容不等于你不需要核查
   - 关键数据、引用需要人工验证
   - 不要全文照搬，加入你自己的视角和判断

---

### 第 16 课 · 数据分析与处理

**教学目标**：学会用 Claude 高效处理数据和生成分析。

**核心内容**：

1. **结构化数据处理（15 分钟）**
   - 粘贴 CSV / JSON 数据 → 让 Claude 分析趋势、计算统计
   - Excel 数据直接上传 → 描述分析需求
   - 实操：上传一份销售数据，让 Claude 生成分析报告

2. **数据清洗（10 分钟）**
   - 常见问题：缺失值、重复值、格式不统一
   - 给 Claude 描述数据格式，让它写清洗脚本
   - 迭代优化：跑一遍 → 看结果 → 告诉 Claude 问题 → 修改 → 再跑

3. **可视化（10 分钟）**
   - 描述需求 → Claude 生成 Python 可视化代码
   - 支持的图表类型：折线图、柱状图、饼图、散点图、热力图
   - 实操：用 Claude Code 读取数据文件，生成图表

4. **Claude Code 的数据分析优势（5 分钟）**
   - 它可以直接读文件、写代码、执行、看输出、调整
   - 你只需要说需求，不需要写一行代码

---

### 第 17 课 · Projects 与知识库

**教学目标**：学会用 Projects 功能组织长期协作和构建专属知识库。

**核心内容**：

1. **Project 的概念（5 分钟）**
   - 一个 Project = 一个专属工作空间
   - 包含：自定义指令 + 上传的文档 + 对话历史
   - 使用场景：一个长期项目、一门课程学习、一个专业领域

2. **创建与管理 Project（10 分钟）**
   - 新建 Project → 命名 → 设置自定义指令
   - 自定义指令示例："你是我公司的技术顾问，我们用的是 Python + React 技术栈..."
   - 不同 Project 之间的隔离

3. **知识库构建（15 分钟）**
   - 上传文档作为知识库：公司内部文档、产品手册、课程资料
   - Claude 会根据知识库内容回答问题
   - 最佳实践：
     - 文档尽量结构化（标题清晰、分段合理）
     - 一次不要上传太多无关文档
     - 定期更新知识库
   - 实操：创建一个自己的专属知识库 Project

4. **使用场景与限制（5 分钟）**
   - 适合：公司新人 onboarding、产品问答、学习资料整理
   - 限制：知识库大小有限、仍需人工验证答案准确性

5. **与 Claude Code 的 CLAUDE.md 对比（5 分钟）**
   - Projects 自定义指令 ≈ CLAUDE.md 的作用
   - 区别：Projects 是云端、对话场景；CLAUDE.md 是本地、编程场景

---

### 第 18 课 · MCP 工具扩展

**教学目标**：理解 MCP 协议的概念，掌握基础使用。

**核心内容**：

1. **MCP 是什么（10 分钟）**
   - MCP = Model Context Protocol（模型上下文协议）
   - Anthropic 推出的开放标准，让 LLM 能连接外部工具和数据源
   - 类比：USB 协议 — 统一的接口，任何设备都能插
   - 核心架构：MCP Host（Claude Code/Claude Desktop）←→ MCP Server（工具/数据源）
   - MCP Server 提供：工具（Tools）、资源（Resources）、提示模板（Prompts）

2. **MCP 的能力范围（5 分钟）**
   - 文件系统操作：读、写、搜索文件
   - 数据库连接：查询 PostgreSQL、SQLite
   - API 集成：连接 GitHub、Slack、Google Drive
   - Web 搜索：联网获取实时信息
   - 自定义工具：任何你能写代码实现的功能

3. **配置与使用 MCP Server（15 分钟）**
   - Claude Desktop 中配置 MCP：编辑 claude_desktop_config.json
   - Claude Code 中配置 MCP：编辑 .claude/mcp.json
   - 实操：配置 filesystem MCP Server，让 Claude 访问本地文件夹
   - 实操：配置 GitHub MCP Server，让 Claude 管理 Issues 和 PR

4. **常用 MCP Server 推荐（5 分钟）**
   - @anthropic/filsystem：文件系统
   - @anthropic/github：GitHub 集成
   - Brave Search / Tavily：联网搜索
   - Puppeteer：浏览器自动化
   - 社区生态：https://github.com/modelcontextprotocol/servers

5. **MCP 可以做的事 — 案例展示（5 分钟）**
   - "帮我整理桌面上的所有文件"
   - "搜索我的 GitHub Issues，汇总本周需要解决的问题"
   - "从这个网页抓取数据，整理成 Excel"

---

### 第 19 课 · Claude + 自动化工作流

**教学目标**：学会用 Claude 设计和实现自动化方案。

**核心内容**：

1. **自动化的核心思路（5 分钟）**
   - 识别重复劳动 → 用 Claude 写脚本 → 定时运行或一键执行
   - Claude 的价值：帮你把"想法"变成"可执行的脚本"

2. **日常办公自动化实战（15 分钟）**
   - 场景一：每日自动汇总邮件要点
   - 场景二：批量重命名/整理文件
   - 场景三：自动生成周报（从 Git 提交记录提取）
   - 场景四：网站内容变更监控
   - 每场景：思路 → Prompt → Claude 生成代码 → 验证

3. **CI/CD 集成（10 分钟）**
   - 用 Claude 写 GitHub Actions 脚本
   - 自动代码审查：PR 提交 → Claude 审查 → 评论
   - 自动文档生成：代码更新 → 自动更新 API 文档
   - 实操：写一个 GitHub Action，在 PR 创建时自动运行测试

4. **定时任务与监控（5 分钟）**
   - Cron Job + Claude Code：定时执行 AI 任务
   - Claude Code 的 \`/loop\` 命令：循环执行任务
   - 注意事项：不要让自动化"失控"

5. **调试自动化脚本（5 分钟）**
   - 日志很重要
   - 先手动验证每一步，再组合成自动化
   - 出错时的 fallback 策略

---

### 第 20 课 · 多模态能力

**教学目标**：掌握 Claude 处理图片、PDF 等非文本内容的能力。

**核心内容**：

1. **Claude 的多模态支持（5 分钟）**
   - 图片理解：截图、照片、图表、手写笔记
   - PDF 阅读：直接上传 PDF 进行分析
   - 代码截图 → 生成可运行的代码
   - 多模态的限制：生成图片不行（Claude 只能读取，不能生成图像）

2. **图片分析实战（15 分钟）**
   - 上传图表 → "分析这个图表的趋势和关键数据"
   - 截图报错信息 → "这是什么错？怎么解决？"
   - 上传手写笔记/白板照片 → "把这段手写文字转成电子版并整理"
   - 上传 UI 设计稿 → "这个界面有哪些 UX 问题，给出改进建议"
   - 上传架构图 → "请描述这个架构，并指出潜在的性能瓶颈"

3. **PDF 处理（10 分钟）**
   - 上传 PDF 报告 → "总结这份报告的 3 个核心观点"
   - 上传合同 → "找出所有涉及违约金的条款"
   - 上传扫描件 → 提取关键信息
   - Claude 的长上下文在 PDF 场景的巨大优势

4. **跨格式转换实战（10 分钟）**
   - 照片表格 → Excel：拍一张纸质表格，让 Claude 生成数据
   - PPT 截图 → 文字大纲
   - 设计稿 → HTML/CSS 代码
   - 实操：每人实际完成一个跨格式转换任务

---

### 第 21 课 · 团队协作与最佳实践

**教学目标**：学会在团队中高效使用 Claude，建立标准化流程。

**核心内容**：

1. **共享 Prompt 模板（10 分钟）**
   - 团队为什么要统一 Prompt：保证输出质量和一致性
   - 建立团队 Prompt 库：
     - 代码审查模板
     - 周报生成模板
     - 技术文档模板
   - 模板的持续迭代优化

2. **CLAUDE.md 深度使用（15 分钟）**
   - CLAUDE.md 是 Claude Code 的项目"记忆文件"
   - 作用：让 Claude Code 理解你的项目约定、技术栈、代码风格
   - 关键内容：
     - 项目简介与技术栈
     - 代码风格与命名规范
     - 常用命令（构建、测试、部署）
     - 项目特定的注意事项
   - 实操：为自己的项目写一个 CLAUDE.md
   - 团队级 CLAUDE.md：放在项目根目录，全团队共享

3. **权限管理与安全配置（10 分钟）**
   - Claude Code 的权限模型：允许/询问/拒绝
   - settings.json 配置：设置哪些操作自动允许、哪些需要确认
   - 团队中的安全最佳实践：
     - 敏感信息不放 CLAUDE.md
     - API Key 用环境变量而非硬编码
     - 关键操作（部署、数据库写入）始终需要确认

4. **团队使用规范建议（5 分钟）**
   - 所有 Claude 产出需要人工审核
   - 不要用 Claude 生成密码、密钥
   - 对 Claude 生成的代码做 Code Review
   - 建立 AI 使用准则文档

---

### 第 22 课 · API 开发入门

**教学目标**：学会使用 Anthropic API，能独立开发简单的 AI 应用。

**核心内容**：

1. **API 基础（10 分钟）**
   - 在 console.anthropic.com 获取 API Key
   - 第一个 API 调用的代码（Python / JavaScript）
   - Message API 的基本结构：system / messages / model / max_tokens
   - 响应解析与错误处理

2. **关键参数详解（10 分钟）**
   - **model**：不同模型版本的特性与选择
   - **max_tokens**：控制输出长度
   - **temperature**（0-1）：控制创造性（0=确定性，1=发散）
     - 对比演示：同一 prompt 下 temperature=0 vs 0.9
   - **system prompt**：设定角色的最佳方式
   - **stop_sequences**：自定义停止词

3. **流式输出（10 分钟）**
   - 什么是流式输出（streaming），为什么要用
   - 用户体验优势：打字机效果，不用等
   - 代码示例：从同步到流的改造

4. **多轮对话实现（10 分钟）**
   - 对话历史管理：messages 数组的维护
   - token 管理：长对话需要裁减历史
   - 实操：搭建一个命令行 AI 聊天助手

---

### 第 23 课 · 综合实战项目

**教学目标**：综合运用所学，独立完成一个有实用价值的 AI 项目。

**核心内容**：

1. **项目选题建议（5 分钟）**
   - 选项 A：智能客服机器人（知识库 + API + 多轮对话）
   - 选项 B：文档智能问答（Project + PDF 分析 + API）
   - 选项 C：自动化报告生成器（利用 Claude Code 完成）
   - 选项 D：个人 AI 助手（自定义 MCP + 命令行工具）
   - 供学员根据兴趣和职业方向选择

2. **从需求分析到方案设计（15 分钟）**
   - 第一步：明确要解决的问题和用户
   - 第二步：用 Claude 帮你做需求分析和技术选型
   - 第三步：设计系统架构（数据流、模块划分）
   - 第四步：制定开发计划（分步任务拆解）

3. **开发实现（15 分钟）**
   - 用 Claude Code 逐步实现各模块
   - 关键代码由 Claude 生成 + 人工审核
   - 使用 Git 进行版本管理
   - 过程中的调试与问题解决

4. **测试与交付（5 分钟）**
   - 功能测试：用 Claude 帮你生成测试用例
   - 编写 README 和简单文档
   - 成果展示与互相评审

---

### 第 24 课 · 回顾与展望

**教学目标**：系统回顾课程知识，了解 AI 发展趋势，规划后续学习路径。

**核心内容**：

1. **课程知识地图回顾（15 分钟）**
   - 第一部分：AI 基础概念
     - AI 是什么 → AI 三学派 → 机器学习 → 深度学习 → NLP → LLM
     - Prompt 工程 → AI 的边界 → AI 伦理 → 工具生态
   - 第二部分：Claude 实战
     - 初体验 → 高效对话 → Claude Code → 编程 → 文档写作
     - 数据分析 → Projects → MCP → 自动化 → 多模态
     - 团队协作 → API 开发 → 综合项目
   - 每个学员说出自己"印象最深的一节课"和"最有用的一个技能"

2. **AI 发展趋势（10 分钟）**
   - Agent（智能体）：AI 从"回答问题"到"独立完成任务"
   - 多模态深度融合：文字+图像+音频+视频无缝协作
   - AI + 具体行业：医疗、法律、教育、金融的深度应用
   - 人机协作范式：AI 不是替代人，而是"增强"人
   - 保持关注的方向建议：Agent 框架、多模态、开源模型进展

3. **持续学习资源推荐（5 分钟）**
   - 官方文档：docs.anthropic.com
   - 社区：Reddit r/ClaudeAI、GitHub Discussions
   - 博客：Anthropic Research Blog
   - 动手实践：用 Claude Code 做项目是最好的学习方式
   - 关注模型发布和 Changelog

4. **给学员的建议（10 分钟）**
   - 最重要的能力不是写代码，而是"提出好问题"
   - AI 是工具，你是决策者 — 不要放弃自己的判断力
   - 保持好奇心，AI 领域变化快，定期更新知识
   - 这次课程只是起点，真正的学习开始于日常的持续使用

5. **Q&A + 交流分享（如时间允许）**

---

## 附录

### 推荐教学节奏

| 周次 | 课时 | 内容规划 |
|------|------|----------|
| 第 1 周 | 1-3 课 | AI 定义 + 学派 + 机器学习 |
| 第 2 周 | 4-6 课 | 深度学习 + NLP + LLM 原理 |
| 第 3 周 | 7-9 课 | Prompt 工程 + 能力边界 + 伦理 |
| 第 4 周 | 10-12 课 | 工具生态 + Claude 入门 + 对话技巧 |
| 第 5 周 | 13-15 课 | Claude Code + 编程 + 文档创作 |
| 第 6 周 | 16-18 课 | 数据分析 + Projects + MCP |
| 第 7 周 | 19-21 课 | 自动化 + 多模态 + 团队协作 |
| 第 8 周 | 22-24 课 | API + 项目实战 + 回顾展望 |

### 每课建议结构（45 分钟）

- 5 分钟：课前回顾 + 本节引入
- 25 分钟：核心内容讲解 + 演示
- 10 分钟：课堂实操 / 互动练习
- 5 分钟：本节小结 + 课后任务

### 教学资源准备

- 每节课准备 2-3 个演示用的 Prompt 示例
- 准备一些"错误案例"用于对比教学
- 实操环节提前测试环境和账号
- 建立课程微信群/Slack，用于课后答疑和学员交流
`,o=`---
title: Tailwind CSS 实战心得
date: 2024-05-10
tags: [CSS, Tailwind, 前端, 设计]
excerpt: Tailwind CSS 改变了前端写样式的方式。分享一些实际项目中积累的使用技巧和最佳实践。
---

# Tailwind CSS 实战心得

Tailwind CSS 是一个「实用优先」的 CSS 框架，它彻底改变了传统写样式的方式——不用再写自定义 CSS，而是通过组合预定义的原子类来构建界面。

## 实用优先的理念

传统写法的痛点：CSS 文件越写越大，类名越来越多，改起来心累：

\`\`\`css
/* 传统写法*/
.card {
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.card__title {
  font-size: 20px;
  font-weight: bold;
  color: #111;
}
.card__body {
  color: #666;
  margin-top: 8px;
}
\`\`\`

用 Tailwind，同样的效果直接写在 HTML 里，所见即所得：

\`\`\`html
<div class="bg-white rounded-lg p-6 shadow-md">
  <h3 class="text-xl font-bold text-gray-900">卡片标题</h3>
  <p class="text-gray-500 mt-2">卡片内容放在这里。</p>
</div>
\`\`\`

## 为什么推荐用 Tailwind

### 一、开发速度飞快

不用在 HTML 和 CSS 文件之间来回切换，所有样式就地完成。对组件化开发特别友好。

### 二、设计规范统一

Tailwind 内置了一套精心设计的设计标记——间距、颜色、字号都是标准化的，天然保证视觉一致性。

### 三、响应式轻而易举

在想适配的类名前面加断点前缀就行：

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- 手机一列 → 平板两列 → 桌面三列，一行搞定！ -->
</div>
\`\`\`

### 四、生产包体积极小

Tailwind 会自动删除未使用的样式，最终打包的 CSS 通常只有几 KB。

## 实际使用技巧

### 封装组件，避免滥用 @apply

当一段样式重复出现时，建议封装成 Vue / React 组件，而不是用 \`@apply\` 指令：

\`\`\`vue
<template>
  <button class="px-4 py-2 bg-blue-600 text-white rounded-lg
                 hover:bg-blue-700 transition-colors
                 focus:outline-none focus:ring-2 focus:ring-blue-400">
    <slot />
  </button>
</template>
\`\`\`

### 暗色模式

用 \`dark:\` 前缀轻松适配暗色模式：

\`\`\`html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  自动跟随系统主题切换
</div>
\`\`\`

### 善用配置文件的 content 路径

确保 \`tailwind.config.ts\` 中正确配置了扫描路径，这样 Tree-shaking 才能正常工作：

\`\`\`ts
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  // ...
}
\`\`\`

## 总结

Tailwind CSS 初看可能觉得类名太多太乱，但真正用起来之后会发现它让写样式变成了一件轻松愉快的事。如果你还没用过，下一个项目不妨试试——可能会上瘾。
`,s=`---
title: Vue 3 入门指南
date: 2024-03-15
tags: [Vue, JavaScript, 前端]
excerpt: Vue 3 是目前最流行的前端框架之一。本文带你从零开始，快速掌握 Vue 3 的核心概念和实际用法。
---

# Vue 3 入门指南

Vue 3 是 Vue.js 的最新主版本，在性能、TypeScript 支持和开发体验方面都有了质的飞跃。

## 为什么选择 Vue 3

Vue 3 引入了**组合式 API（Composition API）**，让组件逻辑的组织更加灵活。核心优势如下：

- **更出色的 TypeScript 支持**：Vue 3 本身就是用 TypeScript 编写的，类型推断非常准确。
- **更小的打包体积**：核心运行时支持 Tree-shaking，按需打包，最终体积更小。
- **更快的渲染性能**：组件初始化、更新和内存占用都有显著优化。
- **逻辑复用更方便**：组合式 API 让代码组织和逻辑复用更加直观。

## 快速上手

使用官方脚手架工具创建一个 Vue 3 项目：

\`\`\`bash
npm create vue@latest
\`\`\`

这条命令会使用 Vite 作为构建工具，提供极快的热更新和构建速度。

## 你的第一个组件

下面是一个使用组合式 API 编写的简单计数器组件：

\`\`\`vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
<\/script>

<template>
  <button @click="increment">
    点击次数：{{ count }}
  </button>
</template>
\`\`\`

## 核心概念

### 响应式状态

Vue 3 的响应式系统建立在 \`ref()\` 和 \`reactive()\` 之上。基本类型用 \`ref()\`，对象用 \`reactive()\`：

\`\`\`ts
import { ref, reactive } from 'vue'

const message = ref('你好，Vue！')
const state = reactive({
  user: { name: '小明' },
  items: [],
})
\`\`\`

### 计算属性

计算属性会缓存结果，只有依赖变化时才会重新计算：

\`\`\`ts
import { ref, computed } from 'vue'

const items = ref([1, 2, 3, 4, 5])
const total = computed(() => items.value.reduce((a, b) => a + b, 0))
\`\`\`

### 侦听器

当需要响应数据变化执行副作用时，使用 \`watch\`：

\`\`\`ts
import { ref, watch } from 'vue'

const keyword = ref('')

watch(keyword, (newVal) => {
  console.log(\`搜索关键词变为：\${newVal}\`)
})
\`\`\`

## 下一步

掌握了这些基础之后，推荐继续学习 Vue Router 路由管理、Pinia 状态管理，以及组件通信的进阶技巧。开始动手写代码吧！
`,c=`---
title: 为什么要学 TypeScript
date: 2024-04-20
tags: [TypeScript, JavaScript, 编程]
excerpt: TypeScript 已经成为现代前端开发的标配。本文聊聊为什么你应该学习它，以及如何发挥它的最大价值。
---

# 为什么要学 TypeScript

TypeScript 从一个 JavaScript 的小众超集，逐步成长为构建大型前端应用的事实标准。来聊聊它为什么值得你投入时间学习。

## 类型安全，拒绝低级错误

TypeScript 最大的价值在于把错误从运行时提前到编译时：

\`\`\`typescript
// JavaScript —— 运行时才发现参数传错了
function getUser(id) {
  return fetch(\`/api/users/\${id}\`).then(r => r.json())
}
getUser("abc")  // 能运行，但 id 到底该传字符串还是数字？

// TypeScript —— 编译时就报错
interface User {
  id: number
  name: string
  email: string
}

function getUser(id: number): Promise<User> {
  return fetch(\`/api/users/\${id}\`).then(r => r.json())
}

getUser("abc")  // ❌ 报错：string 类型不能赋值给 number
\`\`\`

## 更好的开发体验

配合 VS Code 等现代编辑器，TypeScript 能提供：

- **智能补全**：根据类型精确提示属性和方法。
- **即时文档**：鼠标悬浮就能看到参数类型和返回值。
- **安全重构**：重命名、提取函数等操作，改一个地方全项目同步。
- **跳转定义**：一键定位到变量或函数的定义位置。

## 几个必会的特性

### 一、泛型

让代码既灵活又安全：

\`\`\`typescript
function first<T>(arr: T[]): T | undefined {
  return arr[0]
}

const a = first([1, 2, 3])    // 类型：number | undefined
const b = first(['a', 'b'])    // 类型：string | undefined
\`\`\`

### 二、工具类型

TypeScript 内置了许多实用工具类型：

\`\`\`typescript
interface User {
  id: number
  name: string
  email: string
  avatar: string
}

// 全部可选
type PartialUser = Partial<User>

// 只取几个字段
type UserPreview = Pick<User, 'id' | 'name'>

// 排除几个字段
type UserWithoutEmail = Omit<User, 'email'>
\`\`\`

### 三、可辨识联合类型

优雅地处理多种状态：

\`\`\`typescript
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error }

function render(state: AsyncState<User>) {
  switch (state.status) {
    case 'idle':    return '等待中...'
    case 'loading': return '加载中...'
    case 'success': return \`你好，\${state.data.name}\`
    case 'error':   return \`出错了：\${state.error.message}\`
  }
}
\`\`\`

## 总结

TypeScript 不是银弹，但它是对代码质量和开发效率的一次重要投资。如果你还在犹豫，不妨试着把一个现有的小项目迁移到 TypeScript——这个过程本身就很有收获。
`,l={};function u(e){let t=l[e];if(t)return t;t=l[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);t.push(n)}for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t[r]=`%`+(`0`+r.toString(16).toUpperCase()).slice(-2)}return t}function d(e,t){typeof t!=`string`&&(t=d.defaultChars);let n=u(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(e){let t=``;for(let r=0,i=e.length;r<i;r+=3){let a=parseInt(e.slice(r+1,r+3),16);if(a<128){t+=n[a];continue}if((a&224)==192&&r+3<i){let n=parseInt(e.slice(r+4,r+6),16);if((n&192)==128){let e=a<<6&1984|n&63;e<128?t+=`��`:t+=String.fromCharCode(e),r+=3;continue}}if((a&240)==224&&r+6<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16);if((n&192)==128&&(i&192)==128){let e=a<<12&61440|n<<6&4032|i&63;e<2048||e>=55296&&e<=57343?t+=`���`:t+=String.fromCharCode(e),r+=6;continue}}if((a&248)==240&&r+9<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),o=parseInt(e.slice(r+10,r+12),16);if((n&192)==128&&(i&192)==128&&(o&192)==128){let e=a<<18&1835008|n<<12&258048|i<<6&4032|o&63;e<65536||e>1114111?t+=`����`:(e-=65536,t+=String.fromCharCode(55296+(e>>10),56320+(e&1023))),r+=9;continue}}t+=`�`}return t})}d.defaultChars=`;/?:@&=+$,#`,d.componentChars=``;var f={};function p(e){let t=f[e];if(t)return t;t=f[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);/^[0-9a-z]$/i.test(n)?t.push(n):t.push(`%`+(`0`+e.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function m(e,t,n){typeof t!=`string`&&(n=t,t=m.defaultChars),n===void 0&&(n=!0);let r=p(t),i=``;for(let t=0,a=e.length;t<a;t++){let o=e.charCodeAt(t);if(n&&o===37&&t+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(t+1,t+3))){i+=e.slice(t,t+3),t+=2;continue}if(o<128){i+=r[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&t+1<a){let n=e.charCodeAt(t+1);if(n>=56320&&n<=57343){i+=encodeURIComponent(e[t]+e[t+1]),t++;continue}}i+=`%EF%BF%BD`;continue}i+=encodeURIComponent(e[t])}return i}m.defaultChars=`;/?:@&=+$,-_.!~*'()#`,m.componentChars=`-_.!~*'()`;function h(e){let t=``;return t+=e.protocol||``,t+=e.slashes?`//`:``,t+=e.auth?e.auth+`@`:``,e.hostname&&e.hostname.indexOf(`:`)!==-1?t+=`[`+e.hostname+`]`:t+=e.hostname||``,t+=e.port?`:`+e.port:``,t+=e.pathname||``,t+=e.search||``,t+=e.hash||``,t}function g(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var _=/^([a-z0-9.+-]+:)/i,v=/:[0-9]*$/,y=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,ee=[`%`,`/`,`?`,`;`,`#`,`'`,`{`,`}`,`|`,`\\`,`^`,"`",`<`,`>`,`"`,"`",` `,`\r`,`
`,`	`],te=[`/`,`?`,`#`],ne=255,b=/^[+a-z0-9A-Z_-]{0,63}$/,re=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,ie={javascript:!0,"javascript:":!0},ae={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function oe(e,t){if(e&&e instanceof g)return e;let n=new g;return n.parse(e,t),n}g.prototype.parse=function(e,t){let n,r,i,a=e;if(a=a.trim(),!t&&e.split(`#`).length===1){let e=y.exec(a);if(e)return this.pathname=e[1],e[2]&&(this.search=e[2]),this}let o=_.exec(a);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,a=a.substr(o.length)),(t||o||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=a.substr(0,2)===`//`,i&&!(o&&ie[o])&&(a=a.substr(2),this.slashes=!0)),!ie[o]&&(i||o&&!ae[o])){let e=-1;for(let t=0;t<te.length;t++)r=a.indexOf(te[t]),r!==-1&&(e===-1||r<e)&&(e=r);let t,n;n=e===-1?a.lastIndexOf(`@`):a.lastIndexOf(`@`,e),n!==-1&&(t=a.slice(0,n),a=a.slice(n+1),this.auth=t),e=-1;for(let t=0;t<ee.length;t++)r=a.indexOf(ee[t]),r!==-1&&(e===-1||r<e)&&(e=r);e===-1&&(e=a.length),a[e-1]===`:`&&e--;let i=a.slice(0,e);a=a.slice(e),this.parseHost(i),this.hostname=this.hostname||``;let o=this.hostname[0]===`[`&&this.hostname[this.hostname.length-1]===`]`;if(!o){let e=this.hostname.split(/\./);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n&&!n.match(b)){let r=``;for(let e=0,t=n.length;e<t;e++)n.charCodeAt(e)>127?r+=`x`:r+=n[e];if(!r.match(b)){let r=e.slice(0,t),i=e.slice(t+1),o=n.match(re);o&&(r.push(o[1]),i.unshift(o[2])),i.length&&(a=i.join(`.`)+a),this.hostname=r.join(`.`);break}}}}this.hostname.length>ne&&(this.hostname=``),o&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}let s=a.indexOf(`#`);s!==-1&&(this.hash=a.substr(s),a=a.slice(0,s));let c=a.indexOf(`?`);return c!==-1&&(this.search=a.substr(c),a=a.slice(0,c)),a&&(this.pathname=a),ae[n]&&this.hostname&&!this.pathname&&(this.pathname=``),this},g.prototype.parseHost=function(e){let t=v.exec(e);t&&(t=t[0],t!==`:`&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var se=i({decode:()=>d,encode:()=>m,format:()=>h,parse:()=>oe}),ce=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,le=/[\0-\x1F\x7F-\x9F]/,ue=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,de=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,fe=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,pe=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,me=i({Any:()=>ce,Cc:()=>le,Cf:()=>ue,P:()=>de,S:()=>fe,Z:()=>pe}),he=new Uint16Array(`ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌`.split(``).map(e=>e.charCodeAt(0))),ge=new Uint16Array(`Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢`.split(``).map(e=>e.charCodeAt(0))),_e=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),ve=String.fromCodePoint??function(e){let t=``;return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function ye(e){return e>=55296&&e<=57343||e>1114111?65533:_e.get(e)??e}var x;(function(e){e[e.NUM=35]=`NUM`,e[e.SEMI=59]=`SEMI`,e[e.EQUALS=61]=`EQUALS`,e[e.ZERO=48]=`ZERO`,e[e.NINE=57]=`NINE`,e[e.LOWER_A=97]=`LOWER_A`,e[e.LOWER_F=102]=`LOWER_F`,e[e.LOWER_X=120]=`LOWER_X`,e[e.LOWER_Z=122]=`LOWER_Z`,e[e.UPPER_A=65]=`UPPER_A`,e[e.UPPER_F=70]=`UPPER_F`,e[e.UPPER_Z=90]=`UPPER_Z`})(x||={});var be=32,S;(function(e){e[e.VALUE_LENGTH=49152]=`VALUE_LENGTH`,e[e.BRANCH_LENGTH=16256]=`BRANCH_LENGTH`,e[e.JUMP_TABLE=127]=`JUMP_TABLE`})(S||={});function xe(e){return e>=x.ZERO&&e<=x.NINE}function Se(e){return e>=x.UPPER_A&&e<=x.UPPER_F||e>=x.LOWER_A&&e<=x.LOWER_F}function Ce(e){return e>=x.UPPER_A&&e<=x.UPPER_Z||e>=x.LOWER_A&&e<=x.LOWER_Z||xe(e)}function we(e){return e===x.EQUALS||Ce(e)}var C;(function(e){e[e.EntityStart=0]=`EntityStart`,e[e.NumericStart=1]=`NumericStart`,e[e.NumericDecimal=2]=`NumericDecimal`,e[e.NumericHex=3]=`NumericHex`,e[e.NamedEntity=4]=`NamedEntity`})(C||={});var w;(function(e){e[e.Legacy=0]=`Legacy`,e[e.Strict=1]=`Strict`,e[e.Attribute=2]=`Attribute`})(w||={});var Te=class{constructor(e,t,n){this.decodeTree=e,this.emitCodePoint=t,this.errors=n,this.state=C.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=w.Strict}startEntity(e){this.decodeMode=e,this.state=C.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,t){switch(this.state){case C.EntityStart:return e.charCodeAt(t)===x.NUM?(this.state=C.NumericStart,this.consumed+=1,this.stateNumericStart(e,t+1)):(this.state=C.NamedEntity,this.stateNamedEntity(e,t));case C.NumericStart:return this.stateNumericStart(e,t);case C.NumericDecimal:return this.stateNumericDecimal(e,t);case C.NumericHex:return this.stateNumericHex(e,t);case C.NamedEntity:return this.stateNamedEntity(e,t)}}stateNumericStart(e,t){return t>=e.length?-1:(e.charCodeAt(t)|be)===x.LOWER_X?(this.state=C.NumericHex,this.consumed+=1,this.stateNumericHex(e,t+1)):(this.state=C.NumericDecimal,this.stateNumericDecimal(e,t))}addToNumericResult(e,t,n,r){if(t!==n){let i=n-t;this.result=this.result*r**+i+parseInt(e.substr(t,i),r),this.consumed+=i}}stateNumericHex(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(xe(r)||Se(r))t+=1;else return this.addToNumericResult(e,n,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(e,n,t,16),-1}stateNumericDecimal(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(xe(r))t+=1;else return this.addToNumericResult(e,n,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(e,n,t,10),-1}emitNumericEntity(e,t){var n;if(this.consumed<=t)return(n=this.errors)==null||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===x.SEMI)this.consumed+=1;else if(this.decodeMode===w.Strict)return 0;return this.emitCodePoint(ye(this.result),this.consumed),this.errors&&(e!==x.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,t){let{decodeTree:n}=this,r=n[this.treeIndex],i=(r&S.VALUE_LENGTH)>>14;for(;t<e.length;t++,this.excess++){let a=e.charCodeAt(t);if(this.treeIndex=De(n,r,this.treeIndex+Math.max(1,i),a),this.treeIndex<0)return this.result===0||this.decodeMode===w.Attribute&&(i===0||we(a))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&S.VALUE_LENGTH)>>14,i!==0){if(a===x.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==w.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;let{result:t,decodeTree:n}=this,r=(n[t]&S.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(e=this.errors)==null||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,t,n){let{decodeTree:r}=this;return this.emitCodePoint(t===1?r[e]&~S.VALUE_LENGTH:r[e+1],n),t===3&&this.emitCodePoint(r[e+2],n),n}end(){var e;switch(this.state){case C.NamedEntity:return this.result!==0&&(this.decodeMode!==w.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case C.NumericDecimal:return this.emitNumericEntity(0,2);case C.NumericHex:return this.emitNumericEntity(0,3);case C.NumericStart:return(e=this.errors)==null||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case C.EntityStart:return 0}}};function Ee(e){let t=``,n=new Te(e,e=>t+=ve(e));return function(e,r){let i=0,a=0;for(;(a=e.indexOf(`&`,a))>=0;){t+=e.slice(i,a),n.startEntity(r);let o=n.write(e,a+1);if(o<0){i=a+n.end();break}i=a+o,a=o===0?i+1:i}let o=t+e.slice(i);return t=``,o}}function De(e,t,n,r){let i=(t&S.BRANCH_LENGTH)>>7,a=t&S.JUMP_TABLE;if(i===0)return a!==0&&r===a?n:-1;if(a){let t=r-a;return t<0||t>=i?-1:e[n+t]-1}let o=n,s=o+i-1;for(;o<=s;){let t=o+s>>>1,n=e[t];if(n<r)o=t+1;else if(n>r)s=t-1;else return e[t+i]}return-1}var Oe=Ee(he);Ee(ge);function ke(e,t=w.Legacy){return Oe(e,t)}function Ae(e){return Oe(e,w.Strict)}var je=i({arrayReplaceAt:()=>Ie,asciiTrim:()=>N,assign:()=>T,escapeHtml:()=>O,escapeRE:()=>Je,fromCodePoint:()=>E,has:()=>Fe,isMdAsciiPunct:()=>M,isPunctChar:()=>Ye,isPunctCharCode:()=>j,isSpace:()=>k,isString:()=>Ne,isValidEntityCode:()=>Le,isWhiteSpace:()=>A,lib:()=>Qe,normalizeReference:()=>Xe,unescapeAll:()=>D,unescapeMd:()=>He});function Me(e){return Object.prototype.toString.call(e)}function Ne(e){return Me(e)===`[object String]`}var Pe=Object.prototype.hasOwnProperty;function Fe(e,t){return Pe.call(e,t)}function T(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!=`object`)throw TypeError(t+`must be object`);Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e}function Ie(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function Le(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)==65535||(e&65535)==65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function E(e){if(e>65535){e-=65536;let t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}var Re=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,ze=RegExp(Re.source+`|&([a-z#][a-z0-9]{1,31});`,`gi`),Be=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function Ve(e,t){if(t.charCodeAt(0)===35&&Be.test(t)){let n=t[1].toLowerCase()===`x`?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Le(n)?E(n):e}let n=ke(e);return n===e?e:n}function He(e){return e.indexOf(`\\`)<0?e:e.replace(Re,`$1`)}function D(e){return e.indexOf(`\\`)<0&&e.indexOf(`&`)<0?e:e.replace(ze,function(e,t,n){return t||Ve(e,n)})}var Ue=/[&<>"]/,We=/[&<>"]/g,Ge={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`};function Ke(e){return Ge[e]}function O(e){return Ue.test(e)?e.replace(We,Ke):e}var qe=/[.?*+^$[\]\\(){}|-]/g;function Je(e){return e.replace(qe,`\\$&`)}function k(e){switch(e){case 9:case 32:return!0}return!1}function A(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Ye(e){return de.test(e)||fe.test(e)}function j(e){return Ye(E(e))}function M(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Xe(e){return e=e.trim().replace(/\s+/g,` `),e.toLowerCase().toUpperCase()}function Ze(e){return e===32||e===9||e===10||e===13}function N(e){let t=0;for(;t<e.length&&Ze(e.charCodeAt(t));t++);let n=e.length-1;for(;n>=t&&Ze(e.charCodeAt(n));n--);return e.slice(t,n+1)}var Qe={mdurl:se,ucmicro:me};function $e(e,t,n){let r,i,a,o,s=e.posMax,c=e.pos;for(e.pos=t+1,r=1;e.pos<s;){if(a=e.src.charCodeAt(e.pos),a===93&&(r--,r===0)){i=!0;break}if(o=e.pos,e.md.inline.skipToken(e),a===91){if(o===e.pos-1)r++;else if(n)return e.pos=c,-1}}let l=-1;return i&&(l=e.pos),e.pos=c,l}function et(e,t,n){let r,i=t,a={ok:!1,pos:0,str:``};if(e.charCodeAt(i)===60){for(i++;i<n;){if(r=e.charCodeAt(i),r===10||r===60)return a;if(r===62)return a.pos=i+1,a.str=D(e.slice(t+1,i)),a.ok=!0,a;if(r===92&&i+1<n){i+=2;continue}i++}return a}let o=0;for(;i<n&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<n){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(r===40&&(o++,o>32))return a;if(r===41){if(o===0)break;o--}i++}return t===i||o!==0?a:(a.str=D(e.slice(t,i)),a.pos=i,a.ok=!0,a)}function tt(e,t,n,r){let i,a=t,o={ok:!1,can_continue:!1,pos:0,str:``,marker:0};if(r)o.str=r.str,o.marker=r.marker;else{if(a>=n)return o;let r=e.charCodeAt(a);if(r!==34&&r!==39&&r!==40)return o;t++,a++,r===40&&(r=41),o.marker=r}for(;a<n;){if(i=e.charCodeAt(a),i===o.marker)return o.pos=a+1,o.str+=D(e.slice(t,a)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&a+1<n&&a++,a++}return o.can_continue=!0,o.str+=D(e.slice(t,a)),o}var nt=i({parseLinkDestination:()=>et,parseLinkLabel:()=>$e,parseLinkTitle:()=>tt}),P={};P.code_inline=function(e,t,n,r,i){let a=e[t];return`<code`+i.renderAttrs(a)+`>`+O(a.content)+`</code>`},P.code_block=function(e,t,n,r,i){let a=e[t];return`<pre`+i.renderAttrs(a)+`><code>`+O(e[t].content)+`</code></pre>
`},P.fence=function(e,t,n,r,i){let a=e[t],o=a.info?D(a.info).trim():``,s=``,c=``;if(o){let e=o.split(/(\s+)/g);s=e[0],c=e.slice(2).join(``)}let l;if(l=n.highlight&&n.highlight(a.content,s,c)||O(a.content),l.indexOf(`<pre`)===0)return l+`
`;if(o){let e=a.attrIndex(`class`),t=a.attrs?a.attrs.slice():[];e<0?t.push([`class`,n.langPrefix+s]):(t[e]=t[e].slice(),t[e][1]+=` `+n.langPrefix+s);let r={attrs:t};return`<pre><code${i.renderAttrs(r)}>${l}</code></pre>\n`}return`<pre><code${i.renderAttrs(a)}>${l}</code></pre>\n`},P.image=function(e,t,n,r,i){let a=e[t];return a.attrs[a.attrIndex(`alt`)][1]=i.renderInlineAsText(a.children,n,r),i.renderToken(e,t,n)},P.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`},P.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`},P.text=function(e,t){return O(e[t].content)},P.html_block=function(e,t){return e[t].content},P.html_inline=function(e,t){return e[t].content};function F(){this.rules=T({},P)}F.prototype.renderAttrs=function(e){let t,n,r;if(!e.attrs)return``;for(r=``,t=0,n=e.attrs.length;t<n;t++)r+=` `+O(e.attrs[t][0])+`="`+O(e.attrs[t][1])+`"`;return r},F.prototype.renderToken=function(e,t,n){let r=e[t],i=``;if(r.hidden)return``;r.block&&r.nesting!==-1&&t&&e[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?`</`:`<`)+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=` /`);let a=!1;if(r.block&&(a=!0,r.nesting===1&&t+1<e.length)){let n=e[t+1];(n.type===`inline`||n.hidden||n.nesting===-1&&n.tag===r.tag)&&(a=!1)}return i+=a?`>
`:`>`,i},F.prototype.renderInline=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;i[o]===void 0?r+=this.renderToken(e,a,t):r+=i[o](e,a,t,n,this)}return r},F.prototype.renderInlineAsText=function(e,t,n){let r=``;for(let i=0,a=e.length;i<a;i++)switch(e[i].type){case`text`:r+=e[i].content;break;case`image`:r+=this.renderInlineAsText(e[i].children,t,n);break;case`html_inline`:case`html_block`:r+=e[i].content;break;case`softbreak`:case`hardbreak`:r+=`
`;break;default:}return r},F.prototype.render=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;o===`inline`?r+=this.renderInline(e[a].children,t,n):i[o]===void 0?r+=this.renderToken(e,a,t,n):r+=i[o](e,a,t,n,this)}return r};function I(){this.__rules__=[],this.__cache__=null}I.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},I.prototype.__compile__=function(){let e=this,t=[``];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){t.indexOf(e)<0&&t.push(e)})}),e.__cache__={},t.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})},I.prototype.at=function(e,t,n){let r=this.__find__(e),i=n||{};if(r===-1)throw Error(`Parser rule not found: `+e);this.__rules__[r].fn=t,this.__rules__[r].alt=i.alt||[],this.__cache__=null},I.prototype.before=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},I.prototype.after=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},I.prototype.push=function(e,t,n){let r=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null},I.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!0,n.push(e)},this),this.__cache__=null,n},I.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,t)},I.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!1,n.push(e)},this),this.__cache__=null,n},I.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function L(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content=``,this.markup=``,this.info=``,this.meta=null,this.block=!1,this.hidden=!1}L.prototype.attrIndex=function(e){if(!this.attrs)return-1;let t=this.attrs;for(let n=0,r=t.length;n<r;n++)if(t[n][0]===e)return n;return-1},L.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},L.prototype.attrSet=function(e,t){let n=this.attrIndex(e),r=[e,t];n<0?this.attrPush(r):this.attrs[n]=r},L.prototype.attrGet=function(e){let t=this.attrIndex(e),n=null;return t>=0&&(n=this.attrs[t][1]),n},L.prototype.attrJoin=function(e,t){let n=this.attrIndex(e);n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+` `+t};function rt(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}rt.prototype.Token=L;var it=/\r\n?|\n/g,at=/\0/g;function ot(e){let t;t=e.src.replace(it,`
`),t=t.replace(at,`�`),e.src=t}function st(e){let t;e.inlineMode?(t=new e.Token(`inline`,``,0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function ct(e){let t=e.tokens;for(let n=0,r=t.length;n<r;n++){let r=t[n];r.type===`inline`&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function lt(e){return/^<a[>\s]/i.test(e)}function ut(e){return/^<\/a\s*>/i.test(e)}function dt(e){let t=e.tokens;if(e.md.options.linkify)for(let n=0,r=t.length;n<r;n++){if(t[n].type!==`inline`||!e.md.linkify.pretest(t[n].content))continue;let r=t[n].children,i=0;for(let a=r.length-1;a>=0;a--){let o=r[a];if(o.type===`link_close`){for(a--;r[a].level!==o.level&&r[a].type!==`link_open`;)a--;continue}if(o.type===`html_inline`&&(lt(o.content)&&i>0&&i--,ut(o.content)&&i++),!(i>0)&&o.type===`text`&&e.md.linkify.test(o.content)){let i=o.content,s=e.md.linkify.match(i),c=[],l=o.level,u=0;s.length>0&&s[0].index===0&&a>0&&r[a-1].type===`text_special`&&(s=s.slice(1));for(let t=0;t<s.length;t++){let n=s[t].url,r=e.md.normalizeLink(n);if(!e.md.validateLink(r))continue;let a=s[t].text;a=s[t].schema?s[t].schema===`mailto:`&&!/^mailto:/i.test(a)?e.md.normalizeLinkText(`mailto:`+a).replace(/^mailto:/,``):e.md.normalizeLinkText(a):e.md.normalizeLinkText(`http://`+a).replace(/^http:\/\//,``);let o=s[t].index;if(o>u){let t=new e.Token(`text`,``,0);t.content=i.slice(u,o),t.level=l,c.push(t)}let d=new e.Token(`link_open`,`a`,1);d.attrs=[[`href`,r]],d.level=l++,d.markup=`linkify`,d.info=`auto`,c.push(d);let f=new e.Token(`text`,``,0);f.content=a,f.level=l,c.push(f);let p=new e.Token(`link_close`,`a`,-1);p.level=--l,p.markup=`linkify`,p.info=`auto`,c.push(p),u=s[t].lastIndex}if(u<i.length){let t=new e.Token(`text`,``,0);t.content=i.slice(u),t.level=l,c.push(t)}t[n].children=r=Ie(r,a,c)}}}}var ft=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,pt=/\((c|tm|r)\)/i,mt=/\((c|tm|r)\)/gi,ht={c:`©`,r:`®`,tm:`™`};function gt(e,t){return ht[t.toLowerCase()]}function _t(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&(r.content=r.content.replace(mt,gt)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function vt(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&ft.test(r.content)&&(r.content=r.content.replace(/\+-/g,`±`).replace(/\.{2,}/g,`…`).replace(/([?!])…/g,`$1..`).replace(/([?!]){4,}/g,`$1$1$1`).replace(/,{2,}/g,`,`).replace(/(^|[^-])---(?=[^-]|$)/gm,`$1—`).replace(/(^|\s)--(?=\s|$)/gm,`$1–`).replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,`$1–`)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function yt(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type===`inline`&&(pt.test(e.tokens[t].content)&&_t(e.tokens[t].children),ft.test(e.tokens[t].content)&&vt(e.tokens[t].children))}var bt=/['"]/,xt=/['"]/g,St=`’`;function R(e,t,n,r){e[t]||(e[t]=[]),e[t].push({pos:n,ch:r})}function Ct(e,t){let n=``,r=0;t.sort((e,t)=>e.pos-t.pos);for(let i=0;i<t.length;i++){let a=t[i];n+=e.slice(r,a.pos)+a.ch,r=a.pos+1}return n+e.slice(r)}function wt(e,t){let n,r=[],i={};for(let a=0;a<e.length;a++){let o=e[a],s=e[a].level;for(n=r.length-1;n>=0&&!(r[n].level<=s);n--);if(r.length=n+1,o.type!==`text`)continue;let c=o.content,l=0,u=c.length;OUTER:for(;l<u;){xt.lastIndex=l;let o=xt.exec(c);if(!o)break;let d=!0,f=!0;l=o.index+1;let p=o[0]===`'`,m=32;if(o.index-1>=0)m=c.charCodeAt(o.index-1);else for(n=a-1;n>=0&&!(e[n].type===`softbreak`||e[n].type===`hardbreak`);n--)if(e[n].content){m=e[n].content.charCodeAt(e[n].content.length-1);break}let h=32;if(l<u)h=c.charCodeAt(l);else for(n=a+1;n<e.length&&!(e[n].type===`softbreak`||e[n].type===`hardbreak`);n++)if(e[n].content){h=e[n].content.charCodeAt(0);break}let g=M(m)||j(m),_=M(h)||j(h),v=A(m),y=A(h);if(y?d=!1:_&&(v||g||(d=!1)),v?f=!1:g&&(y||_||(f=!1)),h===34&&o[0]===`"`&&m>=48&&m<=57&&(f=d=!1),d&&f&&(d=g,f=_),!d&&!f){p&&R(i,a,o.index,St);continue}if(f)for(n=r.length-1;n>=0;n--){let e=r[n];if(r[n].level<s)break;if(e.single===p&&r[n].level===s){e=r[n];let s,c;p?(s=t.md.options.quotes[2],c=t.md.options.quotes[3]):(s=t.md.options.quotes[0],c=t.md.options.quotes[1]),R(i,a,o.index,c),R(i,e.token,e.pos,s),r.length=n;continue OUTER}}d?r.push({token:a,pos:o.index,single:p,level:s}):f&&p&&R(i,a,o.index,St)}}Object.keys(i).forEach(function(t){e[t].content=Ct(e[t].content,i[t])})}function Tt(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!==`inline`||!bt.test(e.tokens[t].content)||wt(e.tokens[t].children,e)}function Et(e){let t,n,r=e.tokens,i=r.length;for(let e=0;e<i;e++){if(r[e].type!==`inline`)continue;let i=r[e].children,a=i.length;for(t=0;t<a;t++)i[t].type===`text_special`&&(i[t].type=`text`);for(t=n=0;t<a;t++)i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}}var Dt=[[`normalize`,ot],[`block`,st],[`inline`,ct],[`linkify`,dt],[`replacements`,yt],[`smartquotes`,Tt],[`text_join`,Et]];function Ot(){this.ruler=new I;for(let e=0;e<Dt.length;e++)this.ruler.push(Dt[e][0],Dt[e][1])}Ot.prototype.process=function(e){let t=this.ruler.getRules(``);for(let n=0,r=t.length;n<r;n++)t[n](e)},Ot.prototype.State=rt;function z(e,t,n,r){this.src=e,this.md=t,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType=`root`,this.level=0;let i=this.src;for(let e=0,t=0,n=0,r=0,a=i.length,o=!1;t<a;t++){let s=i.charCodeAt(t);if(!o)if(k(s)){n++,s===9?r+=4-r%4:r++;continue}else o=!0;(s===10||t===a-1)&&(s!==10&&t++,this.bMarks.push(e),this.eMarks.push(t),this.tShift.push(n),this.sCount.push(r),this.bsCount.push(0),o=!1,n=0,r=0,e=t+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}z.prototype.push=function(e,t,n){let r=new L(e,t,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r},z.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},z.prototype.skipEmptyLines=function(e){for(let t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},z.prototype.skipSpaces=function(e){for(let t=this.src.length;e<t&&k(this.src.charCodeAt(e));e++);return e},z.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!k(this.src.charCodeAt(--e)))return e+1;return e},z.prototype.skipChars=function(e,t){for(let n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},z.prototype.skipCharsBack=function(e,t,n){if(e<=n)return e;for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1;return e},z.prototype.getLines=function(e,t,n,r){if(e>=t)return``;let i=Array(t-e);for(let a=0,o=e;o<t;o++,a++){let e=0,s=this.bMarks[o],c=s,l;for(l=o+1<t||r?this.eMarks[o]+1:this.eMarks[o];c<l&&e<n;){let t=this.src.charCodeAt(c);if(k(t))t===9?e+=4-(e+this.bsCount[o])%4:e++;else if(c-s<this.tShift[o])e++;else break;c++}e>n?i[a]=Array(e-n+1).join(` `)+this.src.slice(c,l):i[a]=this.src.slice(c,l)}return i.join(``)},z.prototype.Token=L;var kt=65536;function At(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];return e.src.slice(n,r)}function jt(e){let t=[],n=e.length,r=0,i=e.charCodeAt(r),a=!1,o=0,s=``;for(;r<n;)i===124&&(a?(s+=e.substring(o,r-1),o=r):(t.push(s+e.substring(o,r)),s=``,o=r+1)),a=i===92,r++,i=e.charCodeAt(r);return t.push(s+e.substring(o)),t}function Mt(e,t,n,r){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let a=e.bMarks[i]+e.tShift[i];if(a>=e.eMarks[i])return!1;let o=e.src.charCodeAt(a++);if(o!==124&&o!==45&&o!==58||a>=e.eMarks[i])return!1;let s=e.src.charCodeAt(a++);if(s!==124&&s!==45&&s!==58&&!k(s)||o===45&&k(s))return!1;for(;a<e.eMarks[i];){let t=e.src.charCodeAt(a);if(t!==124&&t!==45&&t!==58&&!k(t))return!1;a++}let c=At(e,t+1),l=c.split(`|`),u=[];for(let e=0;e<l.length;e++){let t=l[e].trim();if(!t){if(e===0||e===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(t))return!1;t.charCodeAt(t.length-1)===58?u.push(t.charCodeAt(0)===58?`center`:`right`):t.charCodeAt(0)===58?u.push(`left`):u.push(``)}if(c=At(e,t).trim(),c.indexOf(`|`)===-1||e.sCount[t]-e.blkIndent>=4)return!1;l=jt(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop();let d=l.length;if(d===0||d!==u.length)return!1;if(r)return!0;let f=e.parentType;e.parentType=`table`;let p=e.md.block.ruler.getRules(`blockquote`),m=e.push(`table_open`,`table`,1),h=[t,0];m.map=h;let g=e.push(`thead_open`,`thead`,1);g.map=[t,t+1];let _=e.push(`tr_open`,`tr`,1);_.map=[t,t+1];for(let t=0;t<l.length;t++){let n=e.push(`th_open`,`th`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t].trim(),r.children=[],e.push(`th_close`,`th`,-1)}e.push(`tr_close`,`tr`,-1),e.push(`thead_close`,`thead`,-1);let v,y=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let r=!1;for(let t=0,a=p.length;t<a;t++)if(p[t](e,i,n,!0)){r=!0;break}if(r||(c=At(e,i).trim(),!c)||e.sCount[i]-e.blkIndent>=4||(l=jt(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop(),y+=d-l.length,y>kt))break;if(i===t+2){let n=e.push(`tbody_open`,`tbody`,1);n.map=v=[t+2,0]}let a=e.push(`tr_open`,`tr`,1);a.map=[i,i+1];for(let t=0;t<d;t++){let n=e.push(`td_open`,`td`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t]?l[t].trim():``,r.children=[],e.push(`td_close`,`td`,-1)}e.push(`tr_close`,`tr`,-1)}return v&&(e.push(`tbody_close`,`tbody`,-1),v[1]=i),e.push(`table_close`,`table`,-1),h[1]=i,e.parentType=f,e.line=i,!0}function Nt(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let r=t+1,i=r;for(;r<n;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;let a=e.push(`code_block`,`code`,0);return a.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,a.map=[t,e.line],!0}function Pt(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>a)return!1;let o=e.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let s=i;i=e.skipChars(i,o);let c=i-s;if(c<3)return!1;let l=e.src.slice(s,i),u=e.src.slice(i,a);if(o===96&&u.indexOf(String.fromCharCode(o))>=0)return!1;if(r)return!0;let d=t,f=!1;for(;d++,!(d>=n||(i=s=e.bMarks[d]+e.tShift[d],a=e.eMarks[d],i<a&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(i)===o&&!(e.sCount[d]-e.blkIndent>=4)&&(i=e.skipChars(i,o),!(i-s<c)&&(i=e.skipSpaces(i),!(i<a)))){f=!0;break}c=e.sCount[t],e.line=d+ +!!f;let p=e.push(`fence`,`code`,0);return p.info=u,p.content=e.getLines(t+1,d,c,!0),p.markup=l,p.map=[t,e.line],!0}function Ft(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;let s=[],c=[],l=[],u=[],d=e.md.block.ruler.getRules(`blockquote`),f=e.parentType;e.parentType=`blockquote`;let p=!1,m;for(m=t;m<n;m++){let t=e.sCount[m]<e.blkIndent;if(i=e.bMarks[m]+e.tShift[m],a=e.eMarks[m],i>=a)break;if(e.src.charCodeAt(i++)===62&&!t){let t=e.sCount[m]+1,n,r;e.src.charCodeAt(i)===32?(i++,t++,r=!1,n=!0):e.src.charCodeAt(i)===9?(n=!0,(e.bsCount[m]+t)%4==3?(i++,t++,r=!1):r=!0):n=!1;let o=t;for(s.push(e.bMarks[m]),e.bMarks[m]=i;i<a;){let t=e.src.charCodeAt(i);if(k(t))t===9?o+=4-(o+e.bsCount[m]+ +!!r)%4:o++;else break;i++}p=i>=a,c.push(e.bsCount[m]),e.bsCount[m]=e.sCount[m]+1+ +!!n,l.push(e.sCount[m]),e.sCount[m]=o-t,u.push(e.tShift[m]),e.tShift[m]=i-e.bMarks[m];continue}if(p)break;let r=!1;for(let t=0,i=d.length;t<i;t++)if(d[t](e,m,n,!0)){r=!0;break}if(r){e.lineMax=m,e.blkIndent!==0&&(s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]-=e.blkIndent);break}s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]=-1}let h=e.blkIndent;e.blkIndent=0;let g=e.push(`blockquote_open`,`blockquote`,1);g.markup=`>`;let _=[t,0];g.map=_,e.md.block.tokenize(e,t,m);let v=e.push(`blockquote_close`,`blockquote`,-1);v.markup=`>`,e.lineMax=o,e.parentType=f,_[1]=e.line;for(let n=0;n<u.length;n++)e.bMarks[n+t]=s[n],e.tShift[n+t]=u[n],e.sCount[n+t]=l[n],e.bsCount[n+t]=c[n];return e.blkIndent=h,!0}function It(e,t,n,r){let i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.bMarks[t]+e.tShift[t],o=e.src.charCodeAt(a++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;a<i;){let t=e.src.charCodeAt(a++);if(t!==o&&!k(t))return!1;t===o&&s++}if(s<3)return!1;if(r)return!0;e.line=t+1;let c=e.push(`hr`,`hr`,0);return c.map=[t,e.line],c.markup=Array(s+1).join(String.fromCharCode(o)),!0}function Lt(e,t){let n=e.eMarks[t],r=e.bMarks[t]+e.tShift[t],i=e.src.charCodeAt(r++);return i!==42&&i!==45&&i!==43||r<n&&!k(e.src.charCodeAt(r))?-1:r}function Rt(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t],i=n;if(i+1>=r)return-1;let a=e.src.charCodeAt(i++);if(a<48||a>57)return-1;for(;;){if(i>=r)return-1;if(a=e.src.charCodeAt(i++),a>=48&&a<=57){if(i-n>=10)return-1;continue}if(a===41||a===46)break;return-1}return i<r&&(a=e.src.charCodeAt(i),!k(a))?-1:i}function zt(e,t){let n=e.level+2;for(let r=t+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===n&&e.tokens[r].type===`paragraph_open`&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function Bt(e,t,n,r){let i,a,o,s,c=t,l=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let u=!1;r&&e.parentType===`paragraph`&&e.sCount[c]>=e.blkIndent&&(u=!0);let d,f,p;if((p=Rt(e,c))>=0){if(d=!0,o=e.bMarks[c]+e.tShift[c],f=Number(e.src.slice(o,p-1)),u&&f!==1)return!1}else if((p=Lt(e,c))>=0)d=!1;else return!1;if(u&&e.skipSpaces(p)>=e.eMarks[c])return!1;if(r)return!0;let m=e.src.charCodeAt(p-1),h=e.tokens.length;d?(s=e.push(`ordered_list_open`,`ol`,1),f!==1&&(s.attrs=[[`start`,f]])):s=e.push(`bullet_list_open`,`ul`,1);let g=[c,0];s.map=g,s.markup=String.fromCharCode(m);let _=!1,v=e.md.block.ruler.getRules(`list`),y=e.parentType;for(e.parentType=`list`;c<n;){a=p,i=e.eMarks[c];let t=e.sCount[c]+p-(e.bMarks[c]+e.tShift[c]),r=t;for(;a<i;){let t=e.src.charCodeAt(a);if(t===9)r+=4-(r+e.bsCount[c])%4;else if(t===32)r++;else break;a++}let u=a,f;f=u>=i?1:r-t,f>4&&(f=1);let h=t+f;s=e.push(`list_item_open`,`li`,1),s.markup=String.fromCharCode(m);let g=[c,0];s.map=g,d&&(s.info=e.src.slice(o,p-1));let y=e.tight,ee=e.tShift[c],te=e.sCount[c],ne=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=h,e.tight=!0,e.tShift[c]=u-e.bMarks[c],e.sCount[c]=r,u>=i&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,c,n,!0),(!e.tight||_)&&(l=!1),_=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=ne,e.tShift[c]=ee,e.sCount[c]=te,e.tight=y,s=e.push(`list_item_close`,`li`,-1),s.markup=String.fromCharCode(m),c=e.line,g[1]=c,c>=n||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let b=!1;for(let t=0,r=v.length;t<r;t++)if(v[t](e,c,n,!0)){b=!0;break}if(b)break;if(d){if(p=Rt(e,c),p<0)break;o=e.bMarks[c]+e.tShift[c]}else if(p=Lt(e,c),p<0)break;if(m!==e.src.charCodeAt(p-1))break}return s=d?e.push(`ordered_list_close`,`ol`,-1):e.push(`bullet_list_close`,`ul`,-1),s.markup=String.fromCharCode(m),g[1]=c,e.line=c,e.parentType=y,l&&zt(e,h),!0}function Vt(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function s(t){let n=e.lineMax;if(t>=n||e.isEmpty(t))return null;let r=!1;if(e.sCount[t]-e.blkIndent>3&&(r=!0),e.sCount[t]<0&&(r=!0),!r){let r=e.md.block.ruler.getRules(`reference`),i=e.parentType;e.parentType=`reference`;let a=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,t,n,!0)){a=!0;break}if(e.parentType=i,a)return null}let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];return e.src.slice(i,a+1)}let c=e.src.slice(i,a+1);a=c.length;let l=-1;for(i=1;i<a;i++){let e=c.charCodeAt(i);if(e===91)return!1;if(e===93){l=i;break}else if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(e===92&&(i++,i<a&&c.charCodeAt(i)===10)){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}}if(l<0||c.charCodeAt(l+1)!==58)return!1;for(i=l+2;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!k(e))break}let u=e.md.helpers.parseLinkDestination(c,i,a);if(!u.ok)return!1;let d=e.md.normalizeLink(u.str);if(!e.md.validateLink(d))return!1;i=u.pos;let f=i,p=o,m=i;for(;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!k(e))break}let h=e.md.helpers.parseLinkTitle(c,i,a);for(;h.can_continue;){let t=s(o);if(t===null)break;c+=t,i=a,a=c.length,o++,h=e.md.helpers.parseLinkTitle(c,i,a,h)}let g;for(i<a&&m!==i&&h.ok?(g=h.str,i=h.pos):(g=``,i=f,o=p);i<a&&k(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10&&g)for(g=``,i=f,o=p;i<a&&k(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10)return!1;let _=Xe(c.slice(1,l));return _?r?!0:(e.env.references===void 0&&(e.env.references={}),e.env.references[_]===void 0&&(e.env.references[_]={title:g,href:d}),e.line=o,!0):!1}var Ht=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),Ut=RegExp(`^(?:<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`),Wt=RegExp(`^(?:<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>)`),B=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[RegExp(`^</?(`+Ht.join(`|`)+`)(?=(\\s|/?>|$))`,`i`),/^$/,!0],[RegExp(Wt.source+`\\s*$`),/^$/,!1]];function Gt(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let o=e.src.slice(i,a),s=0;for(;s<B.length&&!B[s][0].test(o);s++);if(s===B.length)return!1;if(r)return B[s][2];let c=t+1,l=B[s][1].test(``);if(!B[s][1].test(o)){for(;c<n&&!(e.sCount[c]<e.blkIndent&&(l||!e.isEmpty(c)));c++)if(i=e.bMarks[c]+e.tShift[c],a=e.eMarks[c],o=e.src.slice(i,a),B[s][1].test(o)){o.length!==0&&c++;break}}e.line=c;let u=e.push(`html_block`,``,0);return u.map=[t,c],u.content=e.getLines(t,c,e.blkIndent,!0),!0}function Kt(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(i);if(o!==35||i>=a)return!1;let s=1;for(o=e.src.charCodeAt(++i);o===35&&i<a&&s<=6;)s++,o=e.src.charCodeAt(++i);if(s>6||i<a&&!k(o))return!1;if(r)return!0;a=e.skipSpacesBack(a,i);let c=e.skipCharsBack(a,35,i);c>i&&k(e.src.charCodeAt(c-1))&&(a=c),e.line=t+1;let l=e.push(`heading_open`,`h`+String(s),1);l.markup=`########`.slice(0,s),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=N(e.src.slice(i,a)),u.map=[t,e.line],u.children=[];let d=e.push(`heading_close`,`h`+String(s),-1);return d.markup=`########`.slice(0,s),!0}function qt(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`);if(e.sCount[t]-e.blkIndent>=4)return!1;let i=e.parentType;e.parentType=`paragraph`;let a=0,o,s=t+1;for(;s<n&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let t=e.bMarks[s]+e.tShift[s],n=e.eMarks[s];if(t<n&&(o=e.src.charCodeAt(t),(o===45||o===61)&&(t=e.skipChars(t,o),t=e.skipSpaces(t),t>=n))){a=o===61?1:2;break}}if(e.sCount[s]<0)continue;let t=!1;for(let i=0,a=r.length;i<a;i++)if(r[i](e,s,n,!0)){t=!0;break}if(t)break}if(!a)return e.parentType=i,!1;let c=N(e.getLines(t,s,e.blkIndent,!1));e.line=s+1;let l=e.push(`heading_open`,`h`+String(a),1);l.markup=String.fromCharCode(o),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=c,u.map=[t,e.line-1],u.children=[];let d=e.push(`heading_close`,`h`+String(a),-1);return d.markup=String.fromCharCode(o),e.parentType=i,!0}function Jt(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`),i=e.parentType,a=t+1;for(e.parentType=`paragraph`;a<n&&!e.isEmpty(a);a++){if(e.sCount[a]-e.blkIndent>3||e.sCount[a]<0)continue;let t=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,a,n,!0)){t=!0;break}if(t)break}let o=N(e.getLines(t,a,e.blkIndent,!1));e.line=a;let s=e.push(`paragraph_open`,`p`,1);s.map=[t,e.line];let c=e.push(`inline`,``,0);return c.content=o,c.map=[t,e.line],c.children=[],e.push(`paragraph_close`,`p`,-1),e.parentType=i,!0}var V=[[`table`,Mt,[`paragraph`,`reference`]],[`code`,Nt],[`fence`,Pt,[`paragraph`,`reference`,`blockquote`,`list`]],[`blockquote`,Ft,[`paragraph`,`reference`,`blockquote`,`list`]],[`hr`,It,[`paragraph`,`reference`,`blockquote`,`list`]],[`list`,Bt,[`paragraph`,`reference`,`blockquote`]],[`reference`,Vt],[`html_block`,Gt,[`paragraph`,`reference`,`blockquote`]],[`heading`,Kt,[`paragraph`,`reference`,`blockquote`]],[`lheading`,qt],[`paragraph`,Jt]];function H(){this.ruler=new I;for(let e=0;e<V.length;e++)this.ruler.push(V[e][0],V[e][1],{alt:(V[e][2]||[]).slice()})}H.prototype.tokenize=function(e,t,n){let r=this.ruler.getRules(``),i=r.length,a=e.md.options.maxNesting,o=t,s=!1;for(;o<n&&(e.line=o=e.skipEmptyLines(o),!(o>=n||e.sCount[o]<e.blkIndent));){if(e.level>=a){e.line=n;break}let t=e.line,c=!1;for(let a=0;a<i;a++)if(c=r[a](e,o,n,!1),c){if(t>=e.line)throw Error(`block rule didn't increment state.line`);break}if(!c)throw Error(`none of the block rules matched`);e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<n&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}},H.prototype.parse=function(e,t,n,r){if(!e)return;let i=new this.State(e,t,n,r);this.tokenize(i,i.line,i.lineMax)},H.prototype.State=z;function U(e,t,n,r){this.src=e,this.env=n,this.md=t,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending=``,this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}U.prototype.pushPending=function(){let e=new L(`text`,``,0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending=``,e},U.prototype.push=function(e,t,n){this.pending&&this.pushPending();let r=new L(e,t,n),i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r},U.prototype.scanDelims=function(e,t){let n=this.posMax,r=this.src.charCodeAt(e),i;if(e===0)i=32;else if(e===1)i=this.src.charCodeAt(0),(i&63488)==55296&&(i=65533);else if(i=this.src.charCodeAt(e-1),(i&64512)==56320){let t=this.src.charCodeAt(e-2);i=(t&64512)==55296?65536+(t-55296<<10)+(i-56320):65533}else(i&64512)==55296&&(i=65533);let a=e;for(;a<n&&this.src.charCodeAt(a)===r;)a++;let o=a-e,s=a<n?this.src.charCodeAt(a):32;if((s&64512)==55296){let e=this.src.charCodeAt(a+1);s=(e&64512)==56320?65536+(s-55296<<10)+(e-56320):65533}else(s&64512)==56320&&(s=65533);let c=M(i)||j(i),l=M(s)||j(s),u=A(i),d=A(s),f=!d&&(!l||u||c),p=!u&&(!c||d||l);return{can_open:f&&(t||!p||c),can_close:p&&(t||!f||l),length:o}},U.prototype.Token=L;function Yt(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function Xt(e,t){let n=e.pos;for(;n<e.posMax&&!Yt(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}var Zt=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function Qt(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;let n=e.pos,r=e.posMax;if(n+3>r||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;let i=e.pending.match(Zt);if(!i)return!1;let a=i[1],o=e.md.linkify.matchAtStart(e.src.slice(n-a.length));if(!o)return!1;let s=o.url;if(s.length<=a.length)return!1;let c=s.length;for(;c>0&&s.charCodeAt(c-1)===42;)c--;c!==s.length&&(s=s.slice(0,c));let l=e.md.normalizeLink(s);if(!e.md.validateLink(l))return!1;if(!t){e.pending=e.pending.slice(0,-a.length);let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,l]],t.markup=`linkify`,t.info=`auto`;let n=e.push(`text`,``,0);n.content=e.md.normalizeLinkText(s);let r=e.push(`link_close`,`a`,-1);r.markup=`linkify`,r.info=`auto`}return e.pos+=s.length-a.length,!0}function $t(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;let r=e.pending.length-1,i=e.posMax;if(!t)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let t=r-1;for(;t>=1&&e.pending.charCodeAt(t-1)===32;)t--;e.pending=e.pending.slice(0,t),e.push(`hardbreak`,`br`,0)}else e.pending=e.pending.slice(0,-1),e.push(`softbreak`,`br`,0);else e.push(`softbreak`,`br`,0);for(n++;n<i&&k(e.src.charCodeAt(n));)n++;return e.pos=n,!0}var en=[];for(let e=0;e<256;e++)en.push(0);`\\!"#$%&'()*+,./:;<=>?@[]^_\`{|}~-`.split(``).forEach(function(e){en[e.charCodeAt(0)]=1});function tn(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=r))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push(`hardbreak`,`br`,0),n++;n<r&&(i=e.src.charCodeAt(n),k(i));)n++;return e.pos=n,!0}if(i===32){if(!t){let t=e.push(`text_special`,``,0);t.content=`\\`,t.markup=`\\`,t.info=`escape`}return e.pos=n,!0}let a=e.src[n];if(i>=55296&&i<=56319&&n+1<r){let t=e.src.charCodeAt(n+1);t>=56320&&t<=57343&&(a+=e.src[n+1],n++)}let o=`\\`+a;if(!t){let t=e.push(`text_special`,``,0);i<256&&en[i]!==0?t.content=a:t.content=o,t.markup=o,t.info=`escape`}return e.pos=n+1,!0}function nn(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;let r=n;n++;let i=e.posMax;for(;n<i&&e.src.charCodeAt(n)===96;)n++;let a=e.src.slice(r,n),o=a.length;if(e.backticksScanned&&(e.backticks[o]||0)<=r)return t||(e.pending+=a),e.pos+=o,!0;let s=n,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<i&&e.src.charCodeAt(s)===96;)s++;let r=s-c;if(r===o){if(!t){let t=e.push(`code_inline`,`code`,0);t.markup=a,t.content=e.src.slice(n,c).replace(/\n/g,` `).replace(/^ (.+) $/,`$1`)}return e.pos=s,!0}e.backticks[r]=c}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=o,!0}function rn(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==126)return!1;let i=e.scanDelims(e.pos,!0),a=i.length,o=String.fromCharCode(r);if(a<2)return!1;let s;a%2&&(s=e.push(`text`,``,0),s.content=o,a--);for(let t=0;t<a;t+=2)s=e.push(`text`,``,0),s.content=o+o,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function an(e,t){let n,r=[],i=t.length;for(let a=0;a<i;a++){let i=t[a];if(i.marker!==126||i.end===-1)continue;let o=t[i.end];n=e.tokens[i.token],n.type=`s_open`,n.tag=`s`,n.nesting=1,n.markup=`~~`,n.content=``,n=e.tokens[o.token],n.type=`s_close`,n.tag=`s`,n.nesting=-1,n.markup=`~~`,n.content=``,e.tokens[o.token-1].type===`text`&&e.tokens[o.token-1].content===`~`&&r.push(o.token-1)}for(;r.length;){let t=r.pop(),i=t+1;for(;i<e.tokens.length&&e.tokens[i].type===`s_close`;)i++;i--,t!==i&&(n=e.tokens[i],e.tokens[i]=e.tokens[t],e.tokens[t]=n)}}function on(e){let t=e.tokens_meta,n=e.tokens_meta.length;an(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&an(e,t[r].delimiters)}var sn={tokenize:rn,postProcess:on};function cn(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==95&&r!==42)return!1;let i=e.scanDelims(e.pos,r===42);for(let t=0;t<i.length;t++){let t=e.push(`text`,``,0);t.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function ln(e,t){let n=t.length;for(let r=n-1;r>=0;r--){let n=t[r];if(n.marker!==95&&n.marker!==42||n.end===-1)continue;let i=t[n.end],a=r>0&&t[r-1].end===n.end+1&&t[r-1].marker===n.marker&&t[r-1].token===n.token-1&&t[n.end+1].token===i.token+1,o=String.fromCharCode(n.marker),s=e.tokens[n.token];s.type=a?`strong_open`:`em_open`,s.tag=a?`strong`:`em`,s.nesting=1,s.markup=a?o+o:o,s.content=``;let c=e.tokens[i.token];c.type=a?`strong_close`:`em_close`,c.tag=a?`strong`:`em`,c.nesting=-1,c.markup=a?o+o:o,c.content=``,a&&(e.tokens[t[r-1].token].content=``,e.tokens[t[n.end+1].token].content=``,r--)}}function un(e){let t=e.tokens_meta,n=e.tokens_meta.length;ln(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&ln(e,t[r].delimiters)}var dn={tokenize:cn,postProcess:un};function fn(e,t){let n,r,i,a,o=``,s=``,c=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;let u=e.pos,d=e.posMax,f=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let m=p+1;if(m<d&&e.src.charCodeAt(m)===40){for(l=!1,m++;m<d&&(n=e.src.charCodeAt(m),!(!k(n)&&n!==10));m++);if(m>=d)return!1;if(c=m,i=e.md.helpers.parseLinkDestination(e.src,m,e.posMax),i.ok){for(o=e.md.normalizeLink(i.str),e.md.validateLink(o)?m=i.pos:o=``,c=m;m<d&&(n=e.src.charCodeAt(m),!(!k(n)&&n!==10));m++);if(i=e.md.helpers.parseLinkTitle(e.src,m,e.posMax),m<d&&c!==m&&i.ok)for(s=i.str,m=i.pos;m<d&&(n=e.src.charCodeAt(m),!(!k(n)&&n!==10));m++);}(m>=d||e.src.charCodeAt(m)!==41)&&(l=!0),m++}if(l){if(e.env.references===void 0)return!1;if(m<d&&e.src.charCodeAt(m)===91?(c=m+1,m=e.md.helpers.parseLinkLabel(e,m),m>=0?r=e.src.slice(c,m++):m=p+1):m=p+1,r||=e.src.slice(f,p),a=e.env.references[Xe(r)],!a)return e.pos=u,!1;o=a.href,s=a.title}if(!t){e.pos=f,e.posMax=p;let t=e.push(`link_open`,`a`,1),n=[[`href`,o]];t.attrs=n,s&&n.push([`title`,s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push(`link_close`,`a`,-1)}return e.pos=m,e.posMax=d,!0}function pn(e,t){let n,r,i,a,o,s,c,l,u=``,d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;let p=e.pos+2,m=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(m<0)return!1;if(a=m+1,a<f&&e.src.charCodeAt(a)===40){for(a++;a<f&&(n=e.src.charCodeAt(a),!(!k(n)&&n!==10));a++);if(a>=f)return!1;for(l=a,s=e.md.helpers.parseLinkDestination(e.src,a,e.posMax),s.ok&&(u=e.md.normalizeLink(s.str),e.md.validateLink(u)?a=s.pos:u=``),l=a;a<f&&(n=e.src.charCodeAt(a),!(!k(n)&&n!==10));a++);if(s=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<f&&l!==a&&s.ok)for(c=s.str,a=s.pos;a<f&&(n=e.src.charCodeAt(a),!(!k(n)&&n!==10));a++);else c=``;if(a>=f||e.src.charCodeAt(a)!==41)return e.pos=d,!1;a++}else{if(e.env.references===void 0)return!1;if(a<f&&e.src.charCodeAt(a)===91?(l=a+1,a=e.md.helpers.parseLinkLabel(e,a),a>=0?i=e.src.slice(l,a++):a=m+1):a=m+1,i||=e.src.slice(p,m),o=e.env.references[Xe(i)],!o)return e.pos=d,!1;u=o.href,c=o.title}if(!t){r=e.src.slice(p,m);let t=[];e.md.inline.parse(r,e.md,e.env,t);let n=e.push(`image`,`img`,0),i=[[`src`,u],[`alt`,``]];n.attrs=i,n.children=t,n.content=r,c&&i.push([`title`,c])}return e.pos=a,e.posMax=f,!0}var mn=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,hn=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function gn(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;let r=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;let t=e.src.charCodeAt(n);if(t===60)return!1;if(t===62)break}let a=e.src.slice(r+1,n);if(hn.test(a)){let n=e.md.normalizeLink(a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}if(mn.test(a)){let n=e.md.normalizeLink(`mailto:`+a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}return!1}function _n(e){return/^<a[>\s]/i.test(e)}function vn(e){return/^<\/a\s*>/i.test(e)}function yn(e){let t=e|32;return t>=97&&t<=122}function bn(e,t){if(!e.md.options.html)return!1;let n=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=n)return!1;let i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!yn(i))return!1;let a=e.src.slice(r).match(Ut);if(!a)return!1;if(!t){let t=e.push(`html_inline`,``,0);t.content=a[0],_n(t.content)&&e.linkLevel++,vn(t.content)&&e.linkLevel--}return e.pos+=a[0].length,!0}var xn=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Sn=/^&([a-z][a-z0-9]{1,31});/i;function Cn(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=r)return!1;if(e.src.charCodeAt(n+1)===35){let r=e.src.slice(n).match(xn);if(r){if(!t){let t=r[1][0].toLowerCase()===`x`?parseInt(r[1].slice(1),16):parseInt(r[1],10),n=e.push(`text_special`,``,0);n.content=Le(t)?E(t):E(65533),n.markup=r[0],n.info=`entity`}return e.pos+=r[0].length,!0}}else{let r=e.src.slice(n).match(Sn);if(r){let n=Ae(r[0]);if(n!==r[0]){if(!t){let t=e.push(`text_special`,``,0);t.content=n,t.markup=r[0],t.info=`entity`}return e.pos+=r[0].length,!0}}}return!1}function wn(e){let t={},n=e.length;if(!n)return;let r=0,i=-2,a=[];for(let o=0;o<n;o++){let n=e[o];if(a.push(0),(e[r].marker!==n.marker||i!==n.token-1)&&(r=o),i=n.token,n.length=n.length||0,!n.close)continue;t.hasOwnProperty(n.marker)||(t[n.marker]=[-1,-1,-1,-1,-1,-1]);let s=t[n.marker][(n.open?3:0)+n.length%3],c=r-a[r]-1,l=c;for(;c>s;c-=a[c]+1){let t=e[c];if(t.marker===n.marker&&t.open&&t.end<0){let r=!1;if((t.close||n.open)&&(t.length+n.length)%3==0&&(t.length%3!=0||n.length%3!=0)&&(r=!0),!r){let r=c>0&&!e[c-1].open?a[c-1]+1:0;a[o]=o-c+r,a[c]=r,n.open=!1,t.end=o,t.close=!1,l=-1,i=-2;break}}}l!==-1&&(t[n.marker][(n.open?3:0)+(n.length||0)%3]=l)}}function Tn(e){let t=e.tokens_meta,n=e.tokens_meta.length;wn(e.delimiters);for(let e=0;e<n;e++)t[e]&&t[e].delimiters&&wn(t[e].delimiters)}function En(e){let t,n,r=0,i=e.tokens,a=e.tokens.length;for(t=n=0;t<a;t++)i[t].nesting<0&&r--,i[t].level=r,i[t].nesting>0&&r++,i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}var Dn=[[`text`,Xt],[`linkify`,Qt],[`newline`,$t],[`escape`,tn],[`backticks`,nn],[`strikethrough`,sn.tokenize],[`emphasis`,dn.tokenize],[`link`,fn],[`image`,pn],[`autolink`,gn],[`html_inline`,bn],[`entity`,Cn]],On=[[`balance_pairs`,Tn],[`strikethrough`,sn.postProcess],[`emphasis`,dn.postProcess],[`fragments_join`,En]];function W(){this.ruler=new I;for(let e=0;e<Dn.length;e++)this.ruler.push(Dn[e][0],Dn[e][1]);this.ruler2=new I;for(let e=0;e<On.length;e++)this.ruler2.push(On[e][0],On[e][1])}W.prototype.skipToken=function(e){let t=e.pos,n=this.ruler.getRules(``),r=n.length,i=e.md.options.maxNesting,a=e.cache;if(a[t]!==void 0){e.pos=a[t];return}let o=!1;if(e.level<i){for(let i=0;i<r;i++)if(e.level++,o=n[i](e,!0),e.level--,o){if(t>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}else e.pos=e.posMax;o||e.pos++,a[t]=e.pos},W.prototype.tokenize=function(e){let t=this.ruler.getRules(``),n=t.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){let a=e.pos,o=!1;if(e.level<i){for(let r=0;r<n;r++)if(o=t[r](e,!1),o){if(a>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}if(o){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},W.prototype.parse=function(e,t,n,r){let i=new this.State(e,t,n,r);this.tokenize(i);let a=this.ruler2.getRules(``),o=a.length;for(let e=0;e<o;e++)a[e](i)},W.prototype.State=U;function kn(e){let t={};e||={},t.src_Any=ce.source,t.src_Cc=le.source,t.src_Z=pe.source,t.src_P=de.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join(`|`),t.src_ZCc=[t.src_Z,t.src_Cc].join(`|`);let n=`[><｜]`;return t.src_pseudo_letter=`(?:(?!${n}|${t.src_ZPCc})${t.src_Any})`,t.src_ip4=`(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`,t.src_auth=`(?:(?:(?!${t.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`,t.src_port=`(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?`,t.src_host_terminator=`(?=$|${n}|${t.src_ZPCc})(?!${e[`---`]?`-(?!--)|`:`-|`}_|:\\d|\\.-|\\.(?!$|${t.src_ZPCc}))`,t.src_path=`(?:[/?#](?:(?!${t.src_ZCc}|${n}|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!${t.src_ZCc}|\\]).)*\\]|\\((?:(?!${t.src_ZCc}|[)]).)*\\)|\\{(?:(?!${t.src_ZCc}|[}]).)*\\}|\\"(?:(?!${t.src_ZCc}|["]).)+\\"|\\'(?:(?!${t.src_ZCc}|[']).)+\\'|\\'(?=${t.src_pseudo_letter}|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!${t.src_ZCc}|[.]|$)|`+(e[`---`]?`\\-(?!--(?:[^-]|$))(?:-*)|`:`\\-+|`)+`,(?!${t.src_ZCc}|$)|;(?!${t.src_ZCc}|$)|\\!+(?!${t.src_ZCc}|[!]|$)|\\?(?!${t.src_ZCc}|[?]|$))+|\\/)?`,t.src_email_name=`[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]{0,63}`,t.src_xn=`xn--[a-z0-9\\-]{1,59}`,t.src_domain_root=`(?:`+t.src_xn+`|${t.src_pseudo_letter}{1,63})`,t.src_domain=`(?:`+t.src_xn+`|(?:${t.src_pseudo_letter})|(?:${t.src_pseudo_letter}(?:-|${t.src_pseudo_letter}){0,61}${t.src_pseudo_letter}))`,t.src_host=`(?:(?:(?:(?:${t.src_domain})\\.)*${t.src_domain}))`,t.tpl_host_fuzzy=`(?:`+t.src_ip4+`|(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%)))`,t.tpl_host_no_ip_fuzzy=`(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%))`,t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:${t.src_ZPCc}|>|$))`,t.tpl_email_fuzzy=`(^|${n}|"|\\(|${t.src_ZCc})(${t.src_email_name}@${t.tpl_host_fuzzy_strict})`,t.tpl_link_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${t.src_ZPCc}))((?![$+<=>^\`|\uff5c])${t.tpl_host_port_fuzzy_strict}${t.src_path})`,t.tpl_link_no_ip_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${t.src_ZPCc}))((?![$+<=>^\`|\uff5c])${t.tpl_host_port_no_ip_fuzzy_strict}${t.src_path})`,t}function An(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}function G(e){return Object.prototype.toString.call(e)}function jn(e){return G(e)===`[object String]`}function Mn(e){return G(e)===`[object Object]`}function Nn(e){return G(e)===`[object RegExp]`}function Pn(e){return G(e)===`[object Function]`}function Fn(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,`\\$&`)}var In={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function Ln(e){return Object.keys(e||{}).reduce(function(e,t){return e||In.hasOwnProperty(t)},!1)}var Rn={"http:":{validate:function(e,t,n){let r=e.slice(t);return n.re.http||(n.re.http=RegExp(`^\\/\\/${n.re.src_auth}${n.re.src_host_port_strict}${n.re.src_path}`,`i`)),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":`http:`,"ftp:":`http:`,"//":{validate:function(e,t,n){let r=e.slice(t);return n.re.no_http||(n.re.no_http=RegExp(`^`+n.re.src_auth+`(?:localhost|(?:(?:${n.re.src_domain})\\.)+${n.re.src_domain_root})`+n.re.src_port+n.re.src_host_terminator+n.re.src_path,`i`)),n.re.no_http.test(r)?t>=3&&e[t-3]===`:`||t>=3&&e[t-3]===`/`?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){let r=e.slice(t);return n.re.mailto||(n.re.mailto=RegExp(`^${n.re.src_email_name}@${n.re.src_host_strict}`,`i`)),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},zn=`a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]`,Bn=`biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф`.split(`|`);function Vn(e){return function(t,n){let r=t.slice(n);return e.test(r)?r.match(e)[0].length:0}}function Hn(){return function(e,t){t.normalize(e)}}function K(e){let t=e.re=kn(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(zn),n.push(t.src_xn),t.src_tlds=n.join(`|`);function r(e){return e.replace(`%TLDS%`,t.src_tlds)}t.email_fuzzy=RegExp(r(t.tpl_email_fuzzy),`i`),t.email_fuzzy_global=RegExp(r(t.tpl_email_fuzzy),`ig`),t.link_fuzzy=RegExp(r(t.tpl_link_fuzzy),`i`),t.link_fuzzy_global=RegExp(r(t.tpl_link_fuzzy),`ig`),t.link_no_ip_fuzzy=RegExp(r(t.tpl_link_no_ip_fuzzy),`i`),t.link_no_ip_fuzzy_global=RegExp(r(t.tpl_link_no_ip_fuzzy),`ig`),t.host_fuzzy_test=RegExp(r(t.tpl_host_fuzzy_test),`i`);let i=[];e.__compiled__={};function a(e,t){throw Error(`(LinkifyIt) Invalid schema "${e}": ${t}`)}Object.keys(e.__schemas__).forEach(function(t){let n=e.__schemas__[t];if(n===null)return;let r={validate:null,link:null};if(e.__compiled__[t]=r,Mn(n)){Nn(n.validate)?r.validate=Vn(n.validate):Pn(n.validate)?r.validate=n.validate:a(t,n),Pn(n.normalize)?r.normalize=n.normalize:n.normalize?a(t,n):r.normalize=Hn();return}if(jn(n)){i.push(t);return}a(t,n)}),i.forEach(function(t){e.__compiled__[e.__schemas__[t]]&&(e.__compiled__[t].validate=e.__compiled__[e.__schemas__[t]].validate,e.__compiled__[t].normalize=e.__compiled__[e.__schemas__[t]].normalize)}),e.__compiled__[``]={validate:null,normalize:Hn()};let o=Object.keys(e.__compiled__).filter(function(t){return t.length>0&&e.__compiled__[t]}).map(Fn).join(`|`);e.re.schema_test=RegExp(`(^|(?!_)(?:[><\uff5c]|${t.src_ZPCc}))(${o})`,`i`),e.re.schema_search=RegExp(`(^|(?!_)(?:[><\uff5c]|${t.src_ZPCc}))(${o})`,`ig`),e.re.schema_at_start=RegExp(`^${e.re.schema_search.source}`,`i`),e.re.pretest=RegExp(`(${e.re.schema_test.source})|(${e.re.host_fuzzy_test.source})|@`,`i`)}function Un(e,t,n,r){let i=e.slice(n,r);this.schema=t.toLowerCase(),this.index=n,this.lastIndex=r,this.raw=i,this.text=i,this.url=i}function q(e,t){if(!(this instanceof q))return new q(e,t);t||Ln(e)&&(t=e,e={}),this.__opts__=An({},In,t),this.__schemas__=An({},Rn,e),this.__compiled__={},this.__tlds__=Bn,this.__tlds_replaced__=!1,this.re={},K(this)}q.prototype.add=function(e,t){return this.__schemas__[e]=t,K(this),this},q.prototype.set=function(e){return this.__opts__=An(this.__opts__,e),this},q.prototype.test=function(e){if(!e.length)return!1;let t,n;if(this.re.schema_test.test(e)){for(n=this.re.schema_search,n.lastIndex=0;(t=n.exec(e))!==null;)if(this.testSchemaAt(e,t[2],n.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__[`http:`]&&e.search(this.re.host_fuzzy_test)>=0&&e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`]&&e.indexOf(`@`)>=0&&e.match(this.re.email_fuzzy)!==null)},q.prototype.pretest=function(e){return this.re.pretest.test(e)},q.prototype.testSchemaAt=function(e,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,n,this):0},q.prototype.match=function(e){let t=[],n=[],r=[],i=[],a,o,s;function c(e,t){return e?t?e.index===t.index?e.lastIndex>=t.lastIndex?e:t:e.index<t.index?e:t:e:t}if(!e.length)return null;if(this.re.schema_test.test(e))for(s=this.re.schema_search,s.lastIndex=0;(a=s.exec(e))!==null;)o=this.testSchemaAt(e,a[2],s.lastIndex),o&&n.push({schema:a[2],index:a.index+a[1].length,lastIndex:a.index+a[0].length+o});if(this.__opts__.fuzzyLink&&this.__compiled__[`http:`])for(s=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)r.push({schema:``,index:a.index+a[1].length,lastIndex:a.index+a[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`])for(s=this.re.email_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)i.push({schema:`mailto:`,index:a.index+a[1].length,lastIndex:a.index+a[0].length});let l=[0,0,0],u=0;for(;;){let a=[n[l[0]],i[l[1]],r[l[2]]],o=c(c(a[0],a[1]),a[2]);if(!o)break;if(o===a[0]?l[0]++:o===a[1]?l[1]++:l[2]++,o.index<u)continue;let s=new Un(e,o.schema,o.index,o.lastIndex);this.__compiled__[s.schema].normalize(s,this),t.push(s),u=o.lastIndex}return t.length?t:null},q.prototype.matchAtStart=function(e){if(!e.length)return null;let t=this.re.schema_at_start.exec(e);if(!t)return null;let n=this.testSchemaAt(e,t[2],t[0].length);if(!n)return null;let r=new Un(e,t[2],t.index+t[1].length,t.index+t[0].length+n);return this.__compiled__[r.schema].normalize(r,this),r},q.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,t,n){return e!==n[t-1]}).reverse(),K(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,K(this),this)},q.prototype.normalize=function(e){e.schema||(e.url=`http://${e.url}`),e.schema===`mailto:`&&!/^mailto:/i.test(e.url)&&(e.url=`mailto:${e.url}`)},q.prototype.onCompile=function(){};var J=2147483647,Y=36,Wn=1,X=26,Gn=38,Kn=700,qn=72,Jn=128,Yn=`-`,Xn=/^xn--/,Zn=/[^\0-\x7F]/,Qn=/[\x2E\u3002\uFF0E\uFF61]/g,$n={overflow:`Overflow: input needs wider integers to process`,"not-basic":`Illegal input >= 0x80 (not a basic code point)`,"invalid-input":`Invalid input`},er=Y-Wn,Z=Math.floor,tr=String.fromCharCode;function Q(e){throw RangeError($n[e])}function nr(e,t){let n=[],r=e.length;for(;r--;)n[r]=t(e[r]);return n}function rr(e,t){let n=e.split(`@`),r=``;n.length>1&&(r=n[0]+`@`,e=n[1]),e=e.replace(Qn,`.`);let i=nr(e.split(`.`),t).join(`.`);return r+i}function ir(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}var ar=e=>String.fromCodePoint(...e),or=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:Y},sr=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},cr=function(e,t,n){let r=0;for(e=n?Z(e/Kn):e>>1,e+=Z(e/t);e>455;r+=Y)e=Z(e/er);return Z(r+36*e/(e+Gn))},lr=function(e){let t=[],n=e.length,r=0,i=Jn,a=qn,o=e.lastIndexOf(Yn);o<0&&(o=0);for(let n=0;n<o;++n)e.charCodeAt(n)>=128&&Q(`not-basic`),t.push(e.charCodeAt(n));for(let s=o>0?o+1:0;s<n;){let o=r;for(let t=1,i=Y;;i+=Y){s>=n&&Q(`invalid-input`);let o=or(e.charCodeAt(s++));o>=Y&&Q(`invalid-input`),o>Z((J-r)/t)&&Q(`overflow`),r+=o*t;let c=i<=a?Wn:i>=a+X?X:i-a;if(o<c)break;let l=Y-c;t>Z(J/l)&&Q(`overflow`),t*=l}let c=t.length+1;a=cr(r-o,c,o==0),Z(r/c)>J-i&&Q(`overflow`),i+=Z(r/c),r%=c,t.splice(r++,0,i)}return String.fromCodePoint(...t)},ur=function(e){let t=[];e=ir(e);let n=e.length,r=Jn,i=0,a=qn;for(let n of e)n<128&&t.push(tr(n));let o=t.length,s=o;for(o&&t.push(Yn);s<n;){let n=J;for(let t of e)t>=r&&t<n&&(n=t);let c=s+1;n-r>Z((J-i)/c)&&Q(`overflow`),i+=(n-r)*c,r=n;for(let n of e)if(n<r&&++i>J&&Q(`overflow`),n===r){let e=i;for(let n=Y;;n+=Y){let r=n<=a?Wn:n>=a+X?X:n-a;if(e<r)break;let i=e-r,o=Y-r;t.push(tr(sr(r+i%o,0))),e=Z(i/o)}t.push(tr(sr(e,0))),a=cr(i,c,s===o),i=0,++s}++i,++r}return t.join(``)},dr={version:`2.3.1`,ucs2:{decode:ir,encode:ar},decode:lr,encode:ur,toASCII:function(e){return rr(e,function(e){return Zn.test(e)?`xn--`+ur(e):e})},toUnicode:function(e){return rr(e,function(e){return Xn.test(e)?lr(e.slice(4).toLowerCase()):e})}},fr={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`paragraph`]},inline:{rules:[`text`],rules2:[`balance_pairs`,`fragments_join`]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`blockquote`,`code`,`fence`,`heading`,`hr`,`html_block`,`lheading`,`list`,`reference`,`paragraph`]},inline:{rules:[`autolink`,`backticks`,`emphasis`,`entity`,`escape`,`html_inline`,`image`,`link`,`newline`,`text`],rules2:[`balance_pairs`,`emphasis`,`fragments_join`]}}}},pr=/^(vbscript|javascript|file|data):/,mr=/^data:image\/(gif|png|jpeg|webp);/;function hr(e){let t=e.trim().toLowerCase();return!pr.test(t)||mr.test(t)}var gr=[`http:`,`https:`,`mailto:`];function _r(e){let t=oe(e,!0);if(t.hostname&&(!t.protocol||gr.indexOf(t.protocol)>=0))try{t.hostname=dr.toASCII(t.hostname)}catch{}return m(h(t))}function vr(e){let t=oe(e,!0);if(t.hostname&&(!t.protocol||gr.indexOf(t.protocol)>=0))try{t.hostname=dr.toUnicode(t.hostname)}catch{}return d(h(t),d.defaultChars+`%`)}function $(e,t){if(!(this instanceof $))return new $(e,t);t||Ne(e)||(t=e||{},e=`default`),this.inline=new W,this.block=new H,this.core=new Ot,this.renderer=new F,this.linkify=new q,this.validateLink=hr,this.normalizeLink=_r,this.normalizeLinkText=vr,this.utils=je,this.helpers=T({},nt),this.options={},this.configure(e),t&&this.set(t)}$.prototype.set=function(e){return T(this.options,e),this},$.prototype.configure=function(e){let t=this;if(Ne(e)){let t=e;if(e=fr[t],!e)throw Error('Wrong `markdown-it` preset "'+t+`", check name`)}if(!e)throw Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this},$.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to enable unknown rule(s): `+r);return this},$.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to disable unknown rule(s): `+r);return this},$.prototype.use=function(e){let t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},$.prototype.parse=function(e,t){if(typeof e!=`string`)throw Error(`Input data should be a String`);let n=new this.core.State(e,this,t);return this.core.process(n),n.tokens},$.prototype.render=function(e,t){return t||={},this.renderer.render(this.parse(e,t),this.options,t)},$.prototype.parseInline=function(e,t){let n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens},$.prototype.renderInline=function(e,t){return t||={},this.renderer.render(this.parseInline(e,t),this.options,t)};var yr=new $({html:!0,linkify:!0,typographer:!0});function br(e){let t=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{data:{},content:e};let n=t[1],r=t[2],i={};for(let e of n.split(`
`)){let t=e.trim();if(!t||t.startsWith(`#`))continue;let n=t.indexOf(`:`);if(n===-1)continue;let r=t.slice(0,n).trim(),a=t.slice(n+1).trim();switch(r){case`title`:case`date`:case`excerpt`:case`cover`:i[r]=a;break;case`tags`:i.tags=xr(a);break}}return{data:i,content:r}}function xr(e){let t=e.trim();return t.startsWith(`[`)&&t.endsWith(`]`)?t.slice(1,-1).split(`,`).map(e=>e.trim().replace(/['"]/g,``)).filter(Boolean):t.split(/\s+/).filter(Boolean)}function Sr(e,t){let{data:n,content:r}=br(e);return{slug:t,title:n.title||t,date:n.date||``,tags:n.tags||[],excerpt:n.excerpt||``,cover:n.cover||void 0,content:yr.render(r),rawContent:r}}var Cr=Object.assign({"../posts/ai-course.md":a,"../posts/tailwind-css-tips.md":o,"../posts/vue3-guide.md":s,"../posts/why-typescript.md":c}),wr=e(`posts`,()=>{let e=n([]);function r(){let t=[];for(let[e,n]of Object.entries(Cr)){let r=(e.split(`/`).pop()||``).replace(/\.md$/,``);r&&typeof n==`string`&&n.length>0&&t.push(Sr(n,r))}t.sort((e,t)=>e.date?t.date?new Date(t.date).getTime()-new Date(e.date).getTime():-1:1),e.value=t}let i=t(()=>e.value.length),a=t(()=>{let t=new Set;for(let n of e.value)for(let e of n.tags)t.add(e);return[...t].sort()});function o(t){return e.value.find(e=>e.slug===t)}function s(t){return e.value.filter(e=>e.tags.includes(t))}return r(),{posts:e,postCount:i,tags:a,loadPosts:r,getPostBySlug:o,getPostsByTag:s}});export{wr as t};