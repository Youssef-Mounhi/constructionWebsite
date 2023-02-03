import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Page = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    {blok.before_body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
    <div>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      
    </div>
  </div>
);
 
export default Page;