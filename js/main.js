let currentQuestionIndex = 0;
let answers = new Array(12).fill(null);
let selectedAge = null;
let questions = [];
let selectTimeout = null;

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(function(s) {
    s.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgressBar() {
  var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';
  document.getElementById('current-question').textContent = currentQuestionIndex + 1;
  document.getElementById('total-questions').textContent = questions.length;
}

function renderQuestion() {
  var question = questions[currentQuestionIndex];
  document.getElementById('question-text').textContent = question.text;

  var container = document.getElementById('options-container');
  container.innerHTML = '';

  var labels = ['A', 'B', 'C', 'D'];
  question.options.forEach(function(option, index) {
    var btn = document.createElement('button');
    btn.className = 'option-button';
    if (answers[currentQuestionIndex] === option.type) {
      btn.classList.add('selected');
    }
    btn.innerHTML =
      '<span class="option-label">' + labels[index] + '</span>' +
      '<span class="option-text">' + option.text + '</span>';
    btn.addEventListener('click', function() {
      selectOption(option.type, btn);
    });
    container.appendChild(btn);
  });

  updateProgressBar();

  var prevBtn = document.getElementById('btn-prev');
  prevBtn.style.visibility = currentQuestionIndex === 0 ? 'hidden' : 'visible';
}

function selectOption(type, selectedBtn) {
  // Disable all options immediately to prevent double-tap
  document.querySelectorAll('.option-button').forEach(function(btn) {
    btn.classList.remove('selected');
    btn.disabled = true;
  });
  selectedBtn.classList.add('selected');
  answers[currentQuestionIndex] = type;

  selectTimeout = setTimeout(function() {
    selectTimeout = null;
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      showResult();
    }
  }, 320);
}

function calculateResult() {
  var scores = { logical: 0, emotional: 0, active: 0, stable: 0 };
  answers.forEach(function(type) {
    if (type) scores[type]++;
  });

  var maxScore = Math.max(scores.logical, scores.emotional, scores.active, scores.stable);
  var topTypes = Object.keys(scores).filter(function(t) {
    return scores[t] === maxScore;
  });

  if (topTypes.length === 1) return { type: topTypes[0], scores: scores };

  var q20Answer = answers[questions.length - 1];
  if (q20Answer && topTypes.indexOf(q20Answer) !== -1) {
    return { type: q20Answer, scores: scores };
  }

  return { type: 'balance', scores: scores };
}

function generateResultHTML(type, scores) {
  var data = resultData[type];
  var total = questions.length;

  var scoreEntries = [
    { key: 'logical', score: scores.logical },
    { key: 'emotional', score: scores.emotional },
    { key: 'active', score: scores.active },
    { key: 'stable', score: scores.stable }
  ].sort(function(a, b) { return b.score - a.score; });

  var scoreHTML = scoreEntries.map(function(entry) {
    var td = resultData[entry.key];
    var pct = Math.round((entry.score / total) * 100);
    return (
      '<div class="score-bar-item">' +
        '<span class="score-bar-label">' + td.typeLabel + '</span>' +
        '<div class="score-bar-track">' +
          '<div class="score-bar-fill" style="width:0%;background-color:' + td.typeColor + '" data-width="' + pct + '%"></div>' +
        '</div>' +
        '<span class="score-bar-value">' + entry.score + '点</span>' +
      '</div>'
    );
  }).join('');

  var strengthsHTML = data.strengths.map(function(s) {
    return '<li>' + s + '</li>';
  }).join('');

  var weaknessesHTML = data.weaknesses.map(function(w) {
    return '<li>' + w + '</li>';
  }).join('');

  var ngHTML = data.ngBehaviors.map(function(n) {
    return '<li>' + n + '</li>';
  }).join('');

  var phrasesHTML = data.goodPhrases.map(function(p) {
    return '<div class="phrase-item" style="border-left-color:' + data.typeColor + '">"' + p + '"</div>';
  }).join('');

  function listItems(arr) {
    return arr.map(function(item) { return '<li>' + item + '</li>'; }).join('');
  }

  return (
    '<div class="result-type-header" style="background-color:' + data.typeColorLight + ';border-color:' + data.typeColorMid + '">' +
      '<span class="result-type-emoji">' + data.typeEmoji + '</span>' +
      '<span class="result-type-badge" style="background-color:' + data.typeColor + '">診断結果</span>' +
      '<h2 class="result-type-name" style="color:' + data.typeColor + '">' + data.typeName + '</h2>' +
      '<p class="result-type-description">' + data.description.replace(/\n/g, '<br>') + '</p>' +
    '</div>' +

    '<div class="result-section score-section">' +
      '<h3 class="section-title"><span class="section-icon">📊</span> スコア内訳</h3>' +
      '<div class="score-bars">' + scoreHTML + '</div>' +
    '</div>' +

    '<div class="result-section">' +
      '<h3 class="section-title" style="color:' + data.typeColor + '"><span class="section-icon">✨</span> 強み</h3>' +
      '<ul class="result-list">' + strengthsHTML + '</ul>' +
    '</div>' +

    '<div class="result-section">' +
      '<h3 class="section-title"><span class="section-icon">🌱</span> 苦手傾向</h3>' +
      '<p class="section-note">苦手というより、サポートがあると力を発揮しやすい場面です</p>' +
      '<ul class="result-list">' + weaknessesHTML + '</ul>' +
    '</div>' +

    '<div class="result-section ng-section">' +
      '<h3 class="section-title ng-title"><span class="section-icon">⚠️</span> 親のNG対応</h3>' +
      '<p class="section-note">意識することで、関わり方が変わりやすい場面です</p>' +
      '<ul class="result-list ng-list">' + ngHTML + '</ul>' +
    '</div>' +

    '<div class="result-section phrase-section" style="background-color:' + data.typeColorLight + ';border:2px solid ' + data.typeColorMid + '">' +
      '<h3 class="section-title" style="color:' + data.typeColor + '"><span class="section-icon">💬</span> おすすめの声かけ</h3>' +
      '<div class="phrase-list">' + phrasesHTML + '</div>' +
    '</div>' +

    '<div class="result-section daily-section" style="border-left:4px solid ' + data.typeColor + '">' +
      '<h3 class="section-title"><span class="section-icon">📅</span> 今日からできる関わり方</h3>' +
      '<p class="daily-advice">' + data.dailyAdvice + '</p>' +
    '</div>' +

    '<div class="guide-inline-section">' +
      '<h3 class="guide-inline-heading" style="color:' + data.typeColor + '">📚 育成ガイド</h3>' +
      '<div class="guide-block">' +
        '<h3 class="guide-block-title" style="color:' + data.typeColor + '">💡 この子の関わり方ポイント</h3>' +
        '<ul class="guide-list">' + listItems(data.guide.parentingTips) + '</ul>' +
      '</div>' +
      '<div class="guide-block">' +
        '<h3 class="guide-block-title">🌱 年齢別の関わり方</h3>' +
        '<div class="guide-age-item">' +
          '<span class="guide-age-label">0〜3歳</span>' +
          '<p class="guide-age-text">' + data.guide.ageYoung + '</p>' +
        '</div>' +
        '<div class="guide-age-item">' +
          '<span class="guide-age-label">4〜7歳</span>' +
          '<p class="guide-age-text">' + data.guide.ageOlder + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="guide-block">' +
        '<h3 class="guide-block-title">🎮 おすすめの遊び・活動</h3>' +
        '<ul class="guide-list">' + listItems(data.guide.activities) + '</ul>' +
      '</div>' +
      '<div class="guide-block">' +
        '<h3 class="guide-block-title">📚 習い事の方向性</h3>' +
        '<p class="guide-lesson">' + data.guide.lessons + '</p>' +
      '</div>' +
      '<div class="guide-block guide-block-last">' +
        '<h3 class="guide-block-title">🚀 将来伸びやすい力</h3>' +
        '<ul class="guide-list">' + listItems(data.guide.futureStrengths) + '</ul>' +
      '</div>' +
    '</div>'
  );
}

function showResult() {
  var result = calculateResult();
  var type = result.type;
  var scores = result.scores;

  var resultContent = document.getElementById('result-content');
  resultContent.innerHTML = generateResultHTML(type, scores);
  resultContent.dataset.type = type;

  showScreen('screen-result');

  setTimeout(function() {
    document.querySelectorAll('.score-bar-fill').forEach(function(bar) {
      bar.style.width = bar.dataset.width;
    });
  }, 150);
}

function shareResult() {
  var resultContent = document.getElementById('result-content');
  var type = resultContent.dataset.type;
  var data = resultData[type];

  var text = '【子どもの才能タイプ診断】\n\n結果：' + data.typeName + '\n\n' + data.description + '\n\n#子育て #才能タイプ診断';

  if (navigator.share) {
    navigator.share({
      title: '子どもの才能タイプ診断',
      text: text
    }).catch(function() {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(function() {
      showToast('結果をコピーしました！');
    }).catch(function() {
      showToast('コピーできませんでした');
    });
  } else {
    showToast('シェア機能はご利用の環境では使えません');
  }
}

function showToast(message) {
  var existing = document.querySelector('.toast');
  if (existing) existing.remove();

  var toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(function() { toast.classList.add('show'); }, 10);
  setTimeout(function() {
    toast.classList.remove('show');
    setTimeout(function() { toast.remove(); }, 300);
  }, 2500);
}

function resetDiagnosisState() {
  if (selectTimeout) { clearTimeout(selectTimeout); selectTimeout = null; }
  currentQuestionIndex = 0;
  answers = new Array(12).fill(null);
  document.getElementById('options-container').innerHTML = '';
}

function startDiagnosis(ageKey) {
  resetDiagnosisState();
  selectedAge = ageKey;
  questions = questionsByAge[ageKey];
  answers = new Array(questions.length).fill(null);
  renderQuestion();
  showScreen('screen-question');
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn-start').addEventListener('click', function() {
    showScreen('screen-age');
  });

  document.querySelectorAll('.age-number-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      startDiagnosis(btn.dataset.age);
    });
  });

  document.getElementById('btn-prev').addEventListener('click', function() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion();
    }
  });

  document.getElementById('btn-age-select').addEventListener('click', function() {
    resetDiagnosisState();
    selectedAge = null;
    showScreen('screen-age');
  });

  document.getElementById('btn-share').addEventListener('click', shareResult);

  document.getElementById('btn-retry').addEventListener('click', function() {
    resetDiagnosisState();
    selectedAge = null;
    showScreen('screen-age');
  });
});
