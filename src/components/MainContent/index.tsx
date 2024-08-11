import Categories from "./Categories.section";
import FlashSales from "./FlashSales.section";
import Section from "../Section";
import ThisMonth from "./ThisMonth.section";
import OurProducts from "./OurProducts.section";
import Featured from "./Featured.section";

const MainContent = () => {
  return (
    <main className="my-20 flex flex-col gap-20 px-4 lg:mt-36 lg:px-0">
      <Section name="Today's">
        <FlashSales />
      </Section>
      <Section name="Categories">
        <Categories />
      </Section>
      <Section name="This Month">
        <ThisMonth />
      </Section>
      <Section name="Our Products">
        <OurProducts />
      </Section>
      <Section name="Featured">
        <Featured />
      </Section>
    </main>
  );
};

export default MainContent;
