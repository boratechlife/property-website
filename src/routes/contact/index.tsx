import { component$ } from '@builder.io/qwik';
import styles from './hero.module.css';
import Contact from '~/components/common/contact';

// Define the testimonials as an array of objects
const testimonials = [
  {
    quote:
      'NexaRealty has been managing my rental properties for over 3 years now. Their monthly reports are incredibly detailed, and I love how responsive they are to both tenant and owner needs. Best decision I made as a property investor.',
    name: 'Sarah Johnson',
    role: 'Property Owner, 4 Units',
    avatar:
      'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      'The peace of mind NexaRealty provides is invaluable. I travel frequently for work, and knowing my properties are in professional hands allows me to focus on my career without worrying about maintenance issues or tenant problems.',
    name: 'Michael Chen',
    role: 'Property Owner, 2 Units',
    avatar:
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      "Their tenant screening process is thorough, and the quality of tenants they find is outstanding. We've had minimal turnover and consistent rental income since switching to NexaRealty. Highly recommend their services.",
    name: 'Rebecca Martinez',
    role: 'Property Owner, 6 Units',
    avatar:
      'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      'Working with NexaRealty has completely changed my approach to property investment. They handle all the complexities, from legal compliance to emergency repairs, leaving me to enjoy the benefits of a hassle-free income stream.',
    name: 'David Lee',
    role: 'Property Owner, 3 Units',
    avatar:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
];

export default component$(() => {
  return <Contact />;
});
