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

class OrderDirection implements \Magento\Framework\Option\ArrayInterface
{
    public function toOptionArray()
    {
        return [
            ['value' => 'ASC', 'label' => __('Asc')],
            ['value' => 'DESC', 'label' => __('Desc')]
        ];
    }
}