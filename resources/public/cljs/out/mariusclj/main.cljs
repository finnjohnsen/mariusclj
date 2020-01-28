(ns mariusclj.main
  (:require [reagent.core :as r]))

(defn app []
  [:div "derp2"])


(r/render [app]
          (.getElementById js/document "app"))