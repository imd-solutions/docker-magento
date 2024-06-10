<?php
/**
 * @category PragmaticDigitalTech
 * @package PragmaticDigitalTech_ProductTabs
 * @version 1.0.0
 * @copyright Copyright (c) 2022 PragmaticDigitalTech Company. All Rights Reserved.
 * @license - Copyrighted Commercial Software
 * @author PragmaticDigitalTech Company <contact@pragmaticdigitaltech.com>
 * @link https://pragmaticdigitaltech.com
 */

namespace PragmaticDigitalTech\ProductTabs\Model\Config\Source;

class ListField implements \Magento\Framework\Option\ArrayInterface
{
    public function toOptionArray()
    {
        return [
            ['value' => 'name', 'label' => __('Name')],
            ['value' => 'entity_id', 'label' => __('Id')],
            ['value' => 'price', 'label' => __('Price')],
            ['value' => 'lastest_products', 'label' => __('New Products')],
            ['value' => 'num_rating_summary', 'label' => __('Top Rating')],
            ['value' => 'num_reviews_count', 'label' => __('Most Reviews')],
            ['value' => 'num_view_counts', 'label' => __('Most Viewed')],
            ['value' => 'ordered_qty', 'label' => __('Most Selling')]
        ];
    }
}