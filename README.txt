/****************************************************************************
  FileName     [ README.txt ]
  PackageName  [ README ]
  Synopsis     [ README file for settings.json ]
  Author       [ Cheng-Hao (Nick) Chu ]
  Copyright    [ Copyright © 2017 Gicuma Studio All right reserved. ]
****************************************************************************/

/****************************************************************************
我把一些比較有問題的數值放進 settings.json 你們可以直接從那邊調整比較方便，單位都是 ms
，因為 json 格式裡面不能放註解所以只好另外打一份 README 解釋每個東西的意思。
****************************************************************************/

{
  "version": "1.6.02",                        // 隨便打的一個版本號碼，不重要
  "debug_jump": "GameMenu",                   // 可以在 loading 完直接跳到別的畫面不用一步一步過去，流程如下
                                              // "GameMenu" -> "HomeScene" -> "WorkChooseScene" -> "ArcadeScene" 
  "game_menu":{                               // 主選單畫面
    "logo_delay": 2800,                       // 上方 logo 進來的延遲 (多晚進來)
    "button_delay": 3150,                     // 開始遊戲按鈕進來的延遲 
    "logo_speed": 6000,                       // logo 移動 fade in 進來花的時間
    "button_speed": 6000                      // 開始按鈕 fade in 進來花的時間
  },
  "home_scene":{                              // 家中選取物品畫面
    "dialog_delay": 1000,                     // 上方選擇裝備的 "白底" 的延遲
    "dialog_speed": 2000,                     // "白底"進來花的時間
    "dialog_txt_extra_delay": 200,            // "選取裝備"文字"接續在白底後"的延遲 
    "dialog_txt_speed": 2000,                 // "選取裝備"文字進來所花的時間
    "dialog_txt_2_extra_delay": 400,          // "選擇行程"文字"接續在 Joseph 移動到右邊後"的延遲
    "dialog_txt_2_extra_delay_space": 200,    // "選擇行程"文字第二行接在第一行後的延遲
    "icon_delay": 200,                        // 三個選擇地點"接續在 Joseph 移動到右邊後"的延遲
    "icon_speed": 1800                        // 三個地點進來所花的時間
  },
  "work_choose_scene":{                       // 選擇 十字路口/騎樓 畫面
    "joseph_in_speed": 1250,                  // Joseph 背影漸入進來所花的時間
    "option_timer_delay": 1000                 // 十字路口/騎樓 icon 進來的延遲

  },
  "arcade_scene":{                            // 騎樓畫面
    "paw_blink_speed": 1400,                  // 對話框狗腳印呼吸的時間間隔 (越小呼吸越快)
    "option_in_delay": 2000,                  // 機車突發狀況出現後選項出現的延遲
    "txt_speed":1000                          // 文字顯現所花的時間
  }
}