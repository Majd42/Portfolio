import React from "react";
import Title from "./Title";
import { title } from "process";
import IconTitle from "./IconTitle";

interface Event {
  id: number;
  period: string;
  title: string;
  place: string;
  body: string;
}

interface PropTypes {
  title: string;
  Icon: React.ElementType;
  events: Event[];
}
const Timeline = ({ events, title, Icon }: PropTypes) => {
  return (
    <div className="relative flex flex-col gap-3 w-[100%] mt-7">
      <div className="bg-disabled  opacity-40 w-[0.5px]  h-full absolute left-0 top-5" />

      {/* <Title text={title} /> */}
      <IconTitle Icon={Icon} title={title} />
      {events.map((event) => {
        return (
          <div
            key={event.id}
            className=" flex flex-col gap-5 relative min-h-[120px] "
          >
            <div className="w-2 h-2 bg-disabled rounded-full absolute top-5 -left-[0.8%]" />

            <div className="px-4 py-7 flex flex-col gap-1 relative after:absolute after:bg-gradient-to-r after:from-disabled after:to-transparent after:w-full after:h-[0.5px] after:top-[100%] after:left-0 after:opacity-40">
              <p className="text-xs text-disabled border border-disabled w-fit py-[2px] px-2 mt-2 rounded-md">
                {event.period}
              </p>
              <div className=" flex flex-col mt-2">
                <p className="font-bold text-white text-lg">{event.title}</p>
                <p className=" text-sm text-disabled">{event.place}</p>
              </div>
              <p className="text-disabled text-md">{event.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
