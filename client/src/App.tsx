import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import Graphics from "@/pages/Graphics";
import VideoEdits from "@/pages/VideoEdits";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";

function RouterComponent() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/graphics" component={Graphics} />
      <Route path="/video" component={VideoEdits} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router base="/">
        <TooltipProvider>
          <Toaster />
          <RouterComponent />
        </TooltipProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
