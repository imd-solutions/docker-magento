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

class OrderBy implements \Magento\Framework\Option\ArrayInterface
{
    public function toOptionArray()
    {
        return [
            ['value' => 'name', 'label' => __('Name')],
            ['value' => 'entity_id', 'label' => __('Id')],
            ['value' => 'created_at', 'label' => __('Date Created')],
            ['value' => 'price', 'label' => __('Price')],
            ['value' => 'num_rating_summary', 'label' => __('Number Rating')],
            ['value' => 'num_reviews_count', 'label' => __('Number Reviews')],
            ['value' => 'num_view_counts', 'label' => __('Number Views')],
            ['value' => 'ordered_qty', 'label' => __('Number Ordered')],
        ];
    }
}