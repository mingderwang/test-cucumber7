# 用範例, 且改成中文
@tag
Feature: 吃太多小黃瓜對你沒有什麼好處
  吃太多任何東西都對你沒什麼好處
  Scenario: 吃一點沒關係
    Given 愛麗絲肚子有點餓
    When 她吃了 3 條小黃瓜s
    Then 她沒有飽
    When 她又吃了 1 條小黃瓜
    Then 她飽了