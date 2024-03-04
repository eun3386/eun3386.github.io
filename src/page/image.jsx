import { useParams } from "react-router-dom";

export const Image = () => {
  let { params } = useParams();
  console.log("params", params);

  const imgData = [
    {
      src: "https://www.datocms-assets.com/92457/1680017080-ofs_homecollection.png?fit=max&h=300&w=200",
    },
    {
      src: "https://www.datocms-assets.com/92457/1680017396-the_retreat_lo.jpg?fit=max&h=300&w=200",
    },
    {
      src: "https://www.datocms-assets.com/92457/1680431509-remoteworking_daytime_v001-min.jpg?fit=max&h=300&w=200",
    },
    {
      src: "https://www.datocms-assets.com/92457/1680431515-remoteworking_nighttime_v001-min.jpg?fit=max&h=300&w=200",
    },
    {
      src: "https://www.datocms-assets.com/92457/1680694505-220618_perfume-bottle_001.jpg?fit=max&h=300&w=200",
    },
    {
      src: "https://www.datocms-assets.com/92457/1680694464-r_mason_004b.jpg?fit=max&h=300&w=200",
    },
    {
      src: "https://www.datocms-assets.com/92457/1680694524-21-15_aesop_002_b-w.jpg?fit=max&h=300&w=200",
    },
    {
      src: "https://www.datocms-assets.com/92457/1680696278-rossm_final.jpg?fit=max&h=300&w=200",
    },
    {
      src: "https://www.datocms-assets.com/92457/1680696547-interior_07.jpg?fit=max&h=300&w=200",
    },
    {
      src: "https://www.datocms-assets.com/92457/1695073885-x_ray_tutorial_v001_front_x-ray_03_edit.jpg?fit=max&h=300&w=200",
    },
    {
      src: "https://www.datocms-assets.com/92457/1695073869-x_ray_layout_edit.jpg?fit=max&h=300&w=200",
    },
    {
      src: "https://www.datocms-assets.com/92457/1695073885-x_ray_tutorial_v001_front_x-ray_03_edit.jpg?fit=max&h=300&w=200",
    },
    {
      src: "https://www.datocms-assets.com/92457/1695073917-x_ray_tutorial_v001_wing_mirror_edit.jpg?fit=max&h=300&w=200",
    },
    {
      src: "https://www.datocms-assets.com/92457/1695157865-x_ray_tutorial_v2.jpg?fit=max&h=300&w=200",
    },
  ];

  return (
    <>
      <img src={imgData[params].src} alt="" />
    </>
  );
};
