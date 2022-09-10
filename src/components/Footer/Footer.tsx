import { Link } from "react-router-dom";
import AudiophileLogo from "../../assets/svg/audiophileLogo";
import textContentEnum from "../../graphql/enum/textContentEnum";
import {
  useFooterItemsQuery,
  useSocialNetworksQuery,
  useTextContentsQuery,
} from "../../graphql/generated";

const Footer = () => {
  const footerItems = useFooterItemsQuery().data?.footerItems;
  const socialNetworksItems = useSocialNetworksQuery().data?.socialNetworks;
  const footerDescription = useTextContentsQuery({
    variables: {
      name: textContentEnum.footerDescription,
    },
  }).data?.textContents[0]?.value;

  return (
    <footer className="bg-black text-white flex items-center flex-col md:px-10 md:items-start">
      <div className="lg:max-w-[1100px] lg:mx-auto lg:w-full">
        <div className="bg-primary-900 w-[100px] h-1 mx-auto md:mx-0"></div>
        <div className="flex items-center flex-col md:items-start lg:justify-between lg:w-full lg:flex-row lg:items-center">
          <AudiophileLogo className="my-14 md:my-10" />
          <ul className="text-white text-center gap-8 font-semibold flex flex-col md:flex-row">
            {footerItems?.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    to={item.redirectTo ?? ""}
                    className="hover:text-primary-900 transition-all"
                  >
                    {item.displayText}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-white opacity-50 mx-6 text-center mt-14 md:text-left md:mx-0 md:mt-10 lg:max-w-[540px]">
          {footerDescription}
        </div>
        <div className="flex items-center flex-col md:flex-row md:justify-between md:w-full ">
          <p className="text-white opacity-50 mt-14 text-center mx-6 font-bold md:mx-0 md:mt-0">
            Copyright 2021. All Rights Reserved
          </p>

          <div className="flex text-white text-4xl gap-4 my-14 items-center ">
            {socialNetworksItems?.map((item) => {
              return (
                <Link to={item.redirectTo}>
                  <img src={item.icon?.url} alt={item.name} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
