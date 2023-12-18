package com.phydrogen.ws.Worker;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import com.phydrogen.ws.Data.DataModel;

@Controller
public class WorkerController {

    @MessageMapping("/test")
    @SendTo("/topic/worker")
    public Worker sendData(DataModel message) throws Exception {
        return new Worker("Author: " + HtmlUtils.htmlEscape(message.getAuthor()) + "\n Id: " + message.getId());
    }
}
